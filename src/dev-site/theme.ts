function themeHandler() {
  const url = new URL(window.location.href);
  const currentTheme = url.searchParams.get("theme");

  const lightThemeButton = document.querySelector("#light-theme-button");
  const darkThemeButton = document.querySelector("#dark-theme-button");

  lightThemeButton?.addEventListener("click", () => {
    url.searchParams.delete("theme");
    url.searchParams.append("theme", "light");
    window.location.href = url.href;
  });

  darkThemeButton?.addEventListener("click", () => {
    url.searchParams.delete("theme");
    url.searchParams.append("theme", "dark");
    window.location.href = url.href;
  });

  if (currentTheme === "dark") {
    theme.isDark = true;
    theme.isLight = false;

    document.body.style.background = "#0b0c0e";
    document.body.style.color = "#d8d9da";
  }
}

window.theme = {
  isDark: false,
  isLight: true,
};

themeHandler();
