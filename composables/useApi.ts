import { ref, watchEffect } from 'vue';
import axios from 'axios';


const baseURL = useRuntimeConfig().public.baseApiURL;

const instance = axios.create({
  baseURL
});

const token = ref('')
const score = ref(0)


export const useApi = () => {
  const getMe = async() => {
    const response = await instance.get(`/v1/user/me?access_token=${token.value}`)
    if (response.status === 200) {
      score.value = response.data.score;
    }
  }

  const auth = async (initDataUnsafe: any) => {
    const response = await instance.post('/v1/user/auth', {
      init_data: initDataUnsafe.initData.replace(/^#?tgWebAppData=/ig, ''),
      user: initDataUnsafe.user
    })
    if (response.status === 200) {
      token.value = response.data.token
      await getMe()
    }
  }

  return {
    instance,
    score,
    auth
  }
}
