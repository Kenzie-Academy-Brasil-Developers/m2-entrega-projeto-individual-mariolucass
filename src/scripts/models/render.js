import { Api } from "./api.js";

export class Render {
  static Usertoken = localStorage.getItem("@Hashy:token");

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

  static async renderSetoresAdmin() {
    const { createE } = this;
    const setores = await Api.getAllSectorsApi();
    const secao = document.querySelector(".setoresListar");
    const ul = createE("ul");
    setores.forEach((elem) => {
      const li = createE("li");
      const span = createE("span");
      const button = createE("button");
      button.classList.add("button2", "showEmpresas");
      button.innerText = "Listar empresas";
      button.id = elem.description;
      span.innerText = elem.description;
      li.append(span, button);
      ul.append(li);
    });
    secao.append(ul);
  }

  static async renderDepartamentsAdmin() {}

  static async createDepartamentAdmin() {}

  static async editDepartamentAdmin() {}

  static async renderFuncionariosAdmin() {
    const { createE } = this;
    const funcionarios1 = await Api.getAllUsersApi();
    const funcionarios = funcionarios1.filter((elem) => {
      return !elem.is_admin;
    });
    console.log(funcionarios);

    const secao = document.querySelector(".funcionariosEditarDeletar");
    const ul = createE("ul");
    funcionarios.forEach((elem) => {
      const li = createE("li");
      const h2 = createE("h2");
      const span = createE("span");
      const spanLevel = createE("span");
      const span1 = createE("span");
      const span2 = createE("span");
      const span3 = createE("span");
      const span4 = createE("span");
      const divButtons = createE("div");
      const button1 = createE("button");
      const button2 = createE("button");

      divButtons.classList.add("divButtons");
      button1.classList.add("button2", "buttonEditar");
      button2.classList.add("button2", "buttonDemitir");
      button1.id = elem.uuid;
      button1.innerText = "Editar";
      button2.id = elem.uuid;
      button2.innerText = "Demitir";
      button1.style.backgroundColor = "blue";
      button2.style.backgroundColor = "red";

      h2.innerText = elem.username;
      spanLevel.innerText = "Nível profissional:";
      span.innerText = elem.professional_level;
      span.style.fontWeight = "600";
      span1.innerText = `Tipo de trabalho :`;
      elem.kind_of_work
        ? (span2.innerText = elem.kind_of_work)
        : (span2.innerText = "A definir.");
      span2.style.fontWeight = "600";
      span3.innerText = `E-mail para contato:`;
      span4.innerText = elem.email;
      span4.style.fontWeight = "600";

      li.append(h2, spanLevel, span, span1, span2, span3, span4);
      divButtons.append(button1, button2);
      li.append(divButtons);
      ul.append(li);
    });
    secao.append(ul);
  }

  static async editFuncionarioAdmin() {}

  static async deleteFuncionarioAdmin() {}

  static async renderHorarioFuncionamentoAdmin() {}

  static async renderFuncionariosOffWorkAdmin() {
    const { createE } = this;
    const funcionarios = await Api.getUsersOffWorkApi();
    const secao = document.querySelector(".funcionariosOffWork");
    const ul = createE("ul");
    funcionarios.forEach((elem) => {
      const li = createE("li");
      const h2 = createE("h2");
      const span = createE("span");
      const spanLevel = createE("span");
      const span1 = createE("span");
      const span2 = createE("span");
      const span3 = createE("span");
      const span4 = createE("span");
      const button = createE("button");

      button.classList.add("button2", "buttonContratar");
      button.id = elem.uuid;
      button.innerText = "Contratar";

      h2.innerText = elem.username;
      spanLevel.innerText = "Nível profissional:";
      span.innerText = elem.professional_level;
      span.style.fontWeight = "600";
      span1.innerText = `Tipo de trabalho :`;
      elem.kind_of_work
        ? (span2.innerText = elem.kind_of_work)
        : (span2.innerText = "A definir.");
      span2.style.fontWeight = "600";
      span3.innerText = `E-mail para contato:`;
      span4.innerText = elem.email;
      span4.style.fontWeight = "600";

      li.append(h2, spanLevel, span, span1, span2, span3, span4, button);
      ul.append(li);
    });
    secao.append(ul);
  }

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
      { text: "Ver setores", href: "/src/pages/admin/setores.html" },
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

      createLinks(ul);
      divButton.append(divRectangle4, divRectangle5);
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

  static createE(e) {
    return document.createElement(e);
  }

  static classAdd(e, c) {
    return e.classList.add(c);
  }

  static renderDarkMode() {}
}
