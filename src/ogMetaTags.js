export const ogMetaTags = () => {
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang.toLowerCase().includes('uk')) {
    return `<meta property="og:url" content="https://toiletpaper.tech/" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Скільки потрібно туалетного паперу, щоб пережити пандемію?" />
  <meta property="og:description"
    content="Онлайн калькулятор, щоб розрахувати стратегічні запаси туалетного паперу на період пандемії" />
  <meta property="og:image" content="https://i.ibb.co/FgKgxNg/toiletpapersocial.png" />

  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:title"
    content="Скільки потрібно туалетного паперу, щоб пережити пандемію? Онлайн калькулятор">
  <meta property="twitter:description"
    content="Онлайн калькулятор, щоб розрахувати стратегічні запаси туалетного паперу на період пандемії">
  <meta property="twitter:image" content="https://i.ibb.co/FgKgxNg/toiletpapersocial.png">`;
  } else if (userLang.toLowerCase().includes('ru')) {
    return `<meta property="og:url" content="https://toiletpaper.tech/" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Сколько нужно туалетной бумаги, чтобы пережить пандемию? Онлайн калькулятор" />
  <meta property="og:description"
    content="Онлайн калькулятор, чтобы рассчитать стратегические запасы туалетной бумаги на период пандемии" />
  <meta property="og:image" content="https://i.ibb.co/FgKgxNg/toiletpapersocial.png" />

  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:title"
    content="Сколько нужно туалетной бумаги, чтобы пережить пандемию? Онлайн калькулятор">
  <meta property="twitter:description"
    content="Онлайн калькулятор, чтобы рассчитать стратегические запасы туалетной бумаги на период пандемии">
  <meta property="twitter:image" content="https://i.ibb.co/FgKgxNg/toiletpapersocial.png">`;
  } else if (userLang.toLowerCase().includes('en')) {
    return ``;
  }
};
