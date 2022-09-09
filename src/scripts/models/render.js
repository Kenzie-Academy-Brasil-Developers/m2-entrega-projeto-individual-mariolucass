import { Api } from "./api.js";

export class Render {
  static Usertoken = localStorage.getItem("@Hashy:token");

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
    const user = await Api.getUserLoggedApi();
    const spanUsuario = document.getElementById("nameUserBoasVindas");
    spanUsuario.innerText = user.username;
  }

  static async renderUsers() {
    const users = await Api.getAllUsersApi();
  }

  static async renderDepartaments() {
    const departaments = Api.getAllDepartaments();
  }

  static async renderCoWorkers() {
    function createElem(elem) {
      return document.createElement(elem);
    }

    const li = createElem("li");
    const divUser = createElem("div");
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
