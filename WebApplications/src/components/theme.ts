import { ThemeEnum } from "../constants/themeEnum";

export const theme = () => {
  const firstToggle = document.getElementById("first_toggle");
  const secondToggle = document.getElementById("second_toggle");
  const thirdToggle = document.getElementById("third_toggle");
  const container = document.querySelector(".container");

  secondToggle.addEventListener("click", () => {
    container.setAttribute("data-theme", ThemeEnum.Semi);
  });

  thirdToggle.addEventListener("click", () => {
    container.setAttribute("data-theme", ThemeEnum.Dark);
  });

  firstToggle.addEventListener("click", () => {
    container.setAttribute("data-theme", ThemeEnum.Light);
  });
};
