export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      bestTokenEver: 'The best token ever',
      buyWhy: 'buy $WHY',
      chooseLanguage: 'Eng',
      code: 'en',
      socials: 'Socials',
      appDesc: '$WHY coin offical website',
      err404: 'Why are you here? Buy $WHY instead!',
      err404Title: '404 not found',
      err404BackToHome: 'Back to home',
    },
    ru: {
      bestTokenEver: 'Лучший токен на свете',
      buyWhy: 'купить $WHY',
      chooseLanguage: 'Рус',
      code: 'ru',
      socials: 'Социальные сети',
      appDesc: 'официальный сайт $WHY coin',
      err404: 'Почему ты здесь? купи вместо этого $WHY!',
      err404Title: '404 не найдено',
      err404BackToHome: 'Домой',
    }
  }
}))
