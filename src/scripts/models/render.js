import { Api } from "./api.js";

export class Render {
  static Usertoken = localStorage.getItem("@kenzieEmpresas:token");

  static async renderEmpresasLogin() {
    const empresas = await Api.getEmpresasApi();
    const ul = document.querySelector(".listaEmpresas");
    empresas.forEach((elem) => {
      const liCard = document.createElement("li");
      const nameEmpresa = document.createElement("h3");
      const spanDescricao = document.createElement("span");

      nameEmpresa.innerText = elem.name;
      spanDescricao.innerText = elem.description;
      liCard.append(nameEmpresa, spanDescricao);
      ul.append(liCard);
    });
  }

  static async renderUser() {
    const user = await Api.getu;
  }

  static async renderUsers() {
    const users = await Api.getAllUsersApi();
  }

  static async renderDepartaments() {
    const departaments = Api.getAllDepartaments();
  }

  static async renderMenuDash() {
    const buttonMenu = document.querySelector(".buttonMenu");
    const sectionMenuHide = document.querySelector(".sectionMenu");
    const buttonMenuHide = document.querySelector(".buttonMenuHide");
    buttonMenu.addEventListener("click", () => {
      buttonMenu.classList.toggle("hidden");
      sectionMenuHide.classList.toggle("hidden");
    });
    buttonMenuHide.addEventListener("click", () => {
      buttonMenu.classList.toggle("hidden");
      sectionMenuHide.classList.toggle("hidden");
    });
  }

  static async renderLogout() {
    const buttonLogout = document.getElementById("logout");
    buttonLogout.addEventListener("click", () => {
      localStorage.clear();
      window.location.assign("/index.html");
    });
  }
}
