import { onMounted, ref } from "vue";


const loaded = ref(false);
const tg = ref(undefined);
const initDataUnsafe = ref(undefined);


const urlParseHashParams = (hash) => {
  if (!hash || hash === '')
    return {};

  hash = hash.replace(/^#+/ig, '');

  const data = hash.split('&').reduce((acc, param) => {
    let [key, ...valueParts] = param.split('=');
    let value = valueParts.join('=');
    if (value) {
      try {
        value = decodeURIComponent(value);
        if (value.startsWith('{') || value.startsWith('['))
          value = JSON.parse(value);
      } catch (e) {
        console.warn(`Error parsing key: ${key}, value: ${value}`, e);
      }
    }
    acc[key] = value;
    return acc;
  }, {});

  if (data.tgWebAppData && typeof data.tgWebAppData === 'string' && data.tgWebAppData.includes('user=')) {
    const [key, value] = data.tgWebAppData.split('=', 2);
    data[key] = JSON.parse(value);
  }

  if (data.user && typeof data.user === 'string')
    data.user = JSON.parse(data.user);

  return data;
}


export const useTelegram = (onLoaded) => {

  const tg_info = useCookie(
    'tg_info',
    {
      default: () => {},
      watch: true,
      maxAge: 60 * 60 * 24
    }
  );
  const tg_info_initData = useCookie(
    'tg_info_initData',
    {
      default: () => {},
      watch: true,
      maxAge: 60 * 60 * 24
    }
  );

  onMounted(async () => {
    if (window.Telegram.WebApp && !initDataUnsafe.value) {
      tg.value = window.Telegram.WebApp;
      tg.value.ready();

      initDataUnsafe.value = urlParseHashParams(location.hash);
      const keysLength = Object.keys(initDataUnsafe.value).length

      // Load from location.hash and save tg_info_initData cookie
      if (keysLength > 0 && initDataUnsafe.value && initDataUnsafe.value.user) {
        tg_info.value = initDataUnsafe.value;
        tg_info_initData.value = location.hash.slice(1);
      // Load from cache
      } else if (tg_info.value && Object.keys(tg_info.value).length > 0) {
        initDataUnsafe.value = tg_info.value;
      }

      // Load from Telegram.WebApp.initData
      if (tg.value && tg.value.initDataUnsafe && tg.value.initDataUnsafe.user) {
        initDataUnsafe.value = tg.value.initDataUnsafe;
        tg_info_initData.value = tg.value.initData;
      }
      initDataUnsafe.value.initData = tg_info_initData.value;
      // console.log(initDataUnsafe.value);

      tg.value.setBottomBarColor('#04060C');
      tg.value.setBackgroundColor('#04060C');
      tg.value.setHeaderColor('#04060C');
      loaded.value = true;
      if (onLoaded)
        await onLoaded(tg, initDataUnsafe);
    }
  });

  return { tg, loaded, initDataUnsafe };
}
