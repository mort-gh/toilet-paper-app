export function checkUserBrowserLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang.toLowerCase().includes('uk')) {
    return 0;
  } else if (userLang.toLowerCase().includes('ru')) {
    return 1;
  } else if (userLang.toLowerCase().includes('en')) {
    return 2;
  }
}
