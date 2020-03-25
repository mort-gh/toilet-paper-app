export function checkUserBrowserLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang === 'ua-UK') {
    return 0;
  } else if (userLang === 'ru-RU') {
    return 1;
  } else if (userLang === 'en-US') {
    return 2;
  }
}
