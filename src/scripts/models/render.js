import { Api } from "./api.js";

export class Render {
  static Usertoken = localStorage.getItem("@Hashy:token");

  static createE(e) {
    return document.createElement(e);
  }

  static classA(e, c) {
    return e.classList.add(c);
  }

  static async renderEmpresasLogin() {
    const { createE } = this;
    const empresas = await Api.getEmpresasApi();
    const ul = document.querySelector(".listaEmpresas");
    empresas.forEach((elem) => {
      const liCard = createE("li");
      const nameEmpresa = createE("h3");
      const spanDescricao = createE("span");

      nameEmpresa.innerText = elem.name;
      spanDescricao.innerText = elem.description;
      liCard.append(nameEmpresa, spanDescricao);
      ul.append(liCard);
    });
  }

  static async renderUser(elem) {
    const user = await Api.getUserLoggedApi();
    const spanUsuario = document.getElementById(elem);
    spanUsuario.innerText = user.username;
    spanUsuario.style.fontWeight = "900";
  }

  static async renderLevel(elem) {
    const user = await Api.getUserLoggedApi();
    const spanNivel = document.getElementById(elem);
    spanNivel.innerText = user.professional_level;
    spanNivel.style.fontWeight = "600";
  }

  static async renderUsers(secao) {
    const { createE } = this;
  }

  static async renderDepartaments(secao) {
    const { createE } = this;
    const divDepartamento = createE("div");
    const h2 = createE("h2");
  }

  static async renderCoWorkers(secao) {
    const { createE } = this;

    const li = createE("li");
    const divUser = createE("div");
    const spanUsuario = createE("span");
  }

  static async renderEmpresa() {}

  static async renderEmpresasCriadasAdmin() {}

  static async renderSetoresAdmin() {}

  static async renderDepartamentsAdmin() {}

  static async createDepartamentAdmin() {}

  static async editDepartamentAdmin() {}

  static async renderFuncionariosAdmin() {}

  static async editFuncionarioAdmin() {}

  static async deleteFuncionarioAdmin() {}

  static async renderHorarioFuncionamentoAdmin() {}

  static async renderFuncionariosOffWorkAdmin() {}

  static renderMenuDashUser() {
    const arrayLinks = [
      { text: "Voltar à homepage", href: "/src/pages/dashboard.html" },
      { text: "Visualizar sua empresa", href: "/src/pages/user/empresa.html" },
      {
        text: "Visualizar seu departamento",
        href: "/src/pages/user/departaments.html",
      },
      {
        text: "Editar suas informações",
        href: "/src/pages/user/editInfos.html",
      },
    ];

    this.renderMenu(arrayLinks);
  }

  static renderMenuDashAdmin() {
    const arrayLinks = [
      { text: "Voltar à homepage", href: "/src/pages/dashboardAdmin.html" },
      { text: "Gerenciar empresas", href: "/src/pages/admin/empresas.html" },
      {
        text: "Gerenciar departamentos",
        href: "/src/pages/admin/departamentos.html",
      },
      {
        text: "Gerenciar funcionários",
        href: "/src/pages/admin/funcionarios.html",
      },
    ];

    this.renderMenu(arrayLinks);
  }

  static renderMenu(array) {
    const sectionMenuHide = document.querySelector(".sectionMenu");

    const arrayLinks = array;

    function createLinks(ul) {
      arrayLinks.forEach((elem) => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = elem.href;
        a.innerText = elem.text;

        li.append(a);
        ul.append(li);
      });
    }

    function showAndHideMenu(elem) {
      buttonMenu.classList.toggle("hidden");
      sectionMenuHide.classList.toggle("hidden");
    }

    function createMenu() {
      function createElem(elem) {
        return document.createElement(elem);
      }
      function classeAdd(elem, classe) {
        elem.classList.add(classe);
      }

      const divRectangle4 = createElem("div");
      const divRectangle5 = createElem("div");
      const ul = createElem("ul");
      const divButton = createElem("div");
      const divMaior = createElem("div");
      const li = createElem("li");
      const spanLogout = createElem("span");

      classeAdd(divMaior, "menuHeader");
      classeAdd(divButton, "buttonMenuHide");
      classeAdd(divRectangle4, "rectangle4");
      classeAdd(divRectangle5, "rectangle5");
      classeAdd(ul, "menuList");

      spanLogout.id = "logout";
      spanLogout.innerText = "Logout";
      spanLogout.addEventListener("click", () => {
        localStorage.clear();
        window.location.assign("/index.html");
      });

      divButton.append(divRectangle4, divRectangle5);
      ul.append(createLinks(ul));
      li.append(spanLogout);
      ul.append(li);
      divMaior.append(divButton, ul);
      sectionMenuHide.append(divMaior);
    }

    createMenu();

    const buttonMenuHide = document.querySelector(".buttonMenuHide");
    const buttonMenu = document.querySelector(".buttonMenu");

    buttonMenu.addEventListener("click", () => showAndHideMenu());
    buttonMenuHide.addEventListener("click", () => showAndHideMenu());
  }

  static renderDarkMode() {}
}
