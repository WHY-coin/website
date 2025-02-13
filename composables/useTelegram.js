import { onMounted, ref } from "vue";

const loaded = ref(false);
const tg = ref(undefined);
const initDataUnsafe = ref(undefined);

const urlParseHashParams = (hash) => {
  if (!hash || hash === '') {
    return {};
  }

  const data = hash.slice(1).split('&').reduce((acc, param) => {
    let [key, ...valueParts] = param.split('=');
    let value = valueParts.join('=');
    if (value) {
      try {
        value = decodeURIComponent(value);
        if (value.startsWith('{') || value.startsWith('[')) {
          value = JSON.parse(value);
        }
      } catch (e) {
        console.warn(`Error parsing key: ${key}, value: ${value}`, e);
      }
    }
    acc[key] = value;
    return acc;
  }, {});

  if (data.tgWebAppData) {
    const [key, value] = data.tgWebAppData.split('=', 2);
    data[key] = JSON.parse(value);
  }

  return data;
}


export const useTelegram = (onLoaded) => {

  onMounted(() => {
    if (window.Telegram.WebApp && !initDataUnsafe.value) {
      window.Telegram.WebApp.ready();
      initDataUnsafe.value = urlParseHashParams(location.hash);
      tg.value = window.Telegram.WebApp;
      tg.value.ready();
      tg.value.setBottomBarColor('#04060C');
      tg.value.setBackgroundColor('#04060C');
      tg.value.setHeaderColor('#04060C');
      loaded.value = true;
      if (onLoaded)
        onLoaded(tg, initDataUnsafe);
    }
  });

  return { tg, loaded, initDataUnsafe };
}
