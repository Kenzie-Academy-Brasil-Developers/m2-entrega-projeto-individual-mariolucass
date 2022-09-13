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
      const divTexto = createE("div");
      const divImg = createE("div");
      divTexto.classList.add("divTexto");
      divImg.classList.add("divImagem");
      const img = createE("img");
      img.src =
        "https://titulusdotcomdotbr.files.wordpress.com/2020/08/icon-company-png-7.png";

      divImg.append(img);

      nameEmpresa.innerText = elem.name;
      spanDescricao.innerText = elem.description;

      divTexto.append(nameEmpresa, spanDescricao);
      liCard.append(divImg, divTexto);
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

  static async renderDepartaments(lista) {
    const { createE } = this;
    const section = document.querySelector(".departamentoUser");
    const ul = createE("ul");
    const li = createE("li");
    const h2 = createE("h2");
    const span2 = createE("span");

    h2.innerText = lista.name;
    span2.innerText = lista.description;

    li.append(h2, span2);
    ul.append(li);
    section.append(ul);
  }

  static async renderCoWorkers(lista) {
    const { createE } = this;
    const section = document.querySelector(".departamentoCoWorkers");
    const ul = createE("ul");

    lista.forEach((elem) => {
      const li = createE("li");
      li.id = "coWorkers";
      const userName = createE("h3");
      const span = createE("span");
      const span1 = createE("span");
      const divImg = createE("div");
      const divTxt = createE("div");
      const img = createE("img");

      divTxt.classList.add("divTexto");
      divImg.classList.add("divImagem");
      img.src =
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png";

      userName.innerText = elem.username;

      elem.kind_of_work
        ? (span.innerText = elem.kind_of_work)
        : (span.innerText = "A decidir.");
      span1.innerText = elem.professional_level;

      divImg.append(img);
      divTxt.append(userName, span, span1);
      li.append(divImg, divTxt);
      ul.append(li);
    });

    section.append(ul);
  }

  static async renderEmpresa(lista) {
    const { createE } = this;
    const section = document.querySelector(".empresaUser");
    const ul = createE("ul");
    const li = createE("li");
    const h2 = createE("h2");
    const span1 = createE("span");
    const span2 = createE("span");

    h2.innerText = lista.name;
    span1.innerText = lista.opening_hours;
    span2.innerText = lista.description;

    li.append(h2, span1, span2);
    ul.append(li);
    section.append(ul);
  }

  static async renderEmpresasCriadasAdmin() {
    const { createE } = this;
    const empresas = await Api.getEmpresasApi();
    const section = document.querySelector(".empresasCriadas");
    const ul = createE("ul");
    empresas.forEach((elem) => {
      const liCard = createE("li");
      const nameEmpresa = createE("h3");
      const spanDescricao = createE("span");

      nameEmpresa.innerText = elem.name;
      spanDescricao.innerText = elem.description;

      liCard.append(nameEmpresa, spanDescricao);
      ul.append(liCard);
    });

    section.append(ul);
  }

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

      button.id = elem.description;
      span.innerText = elem.description;
      button.innerText = "Listar empresas";

      li.append(span, button);
      ul.append(li);
    });

    secao.append(ul);
  }

  static async renderDepartamentsAdmin() {
    const { createE } = this;
    const departamentos = await Api.getAllDepartamentsApi();
    const section = document.querySelector(".departamentosCriados");

    const ul = createE("ul");
    departamentos.forEach((elem) => {
      const liCard = createE("li");
      const nameEmpresa = createE("h3");
      const spanDescricao = createE("span");

      nameEmpresa.innerText = elem.name;
      spanDescricao.innerText = elem.description;

      liCard.append(nameEmpresa, spanDescricao);
      ul.append(liCard);
    });

    section.append(ul);
  }

  static async renderEditDepartamentAdmin() {}

  static async renderFuncionariosAdmin() {
    const { createE } = this;
    const funcionarios1 = await Api.getAllUsersApi();
    const funcionarios = funcionarios1.filter((elem) => {
      return !elem.is_admin && elem.department_uuid;
    });
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
      button2.id = elem.uuid;
      elem.kind_of_work
        ? (span2.innerText = elem.kind_of_work)
        : (span2.innerText = "A definir.");
      h2.innerText = elem.username;
      span.innerText = elem.professional_level;
      span4.innerText = elem.email;

      spanLevel.innerText = "Nível profissional:";
      span1.innerText = `Tipo de trabalho :`;
      span3.innerText = `E-mail para contato:`;
      button1.innerText = "Editar";
      button2.innerText = "Demitir";

      span.style.fontWeight = "600";
      span2.style.fontWeight = "600";
      span4.style.fontWeight = "600";
      button1.style.backgroundColor = "blue";
      button2.style.backgroundColor = "red";

      li.append(h2, spanLevel, span, span1, span2, span3, span4);
      divButtons.append(button1, button2);
      li.append(divButtons);
      ul.append(li);
    });
    secao.append(ul);
  }

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
      spanLevel.innerText = "Nível profissional:";
      span1.innerText = `Tipo de trabalho :`;
      span3.innerText = `E-mail para contato:`;
      h2.innerText = elem.username;
      span.innerText = elem.professional_level;
      elem.kind_of_work
        ? (span2.innerText = elem.kind_of_work)
        : (span2.innerText = "A definir.");
      span4.innerText = elem.email;
      span.style.fontWeight = "600";
      span2.style.fontWeight = "600";
      span4.style.fontWeight = "600";

      li.append(h2, spanLevel, span, span1, span2, span3, span4, button);
      ul.append(li);
    });
    secao.append(ul);
  }

  static renderMenuDashUser() {
    const { renderMenu } = this;
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
    renderMenu(arrayLinks);
  }

  static renderMenuDashAdmin() {
    const { renderMenu } = this;
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
    renderMenu(arrayLinks);
  }

  static renderDashAdmin() {
    const { createE } = this;
    const sectionUsersOffWork = document.querySelector(".dashUsersOffWork");
    const sectionFuncionarios = document.querySelector(".dashFuncionarios");
    const sectionDepartaments = document.querySelector(".dashDepartaments");
    const sectionEmpresa = document.querySelector(".dashEmpresa");

    async function renderOff() {
      const funcionarios = await Api.getUsersOffWorkApi();
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
        spanLevel.innerText = "Nível profissional:";
        span1.innerText = `Tipo de trabalho :`;
        span3.innerText = `E-mail para contato:`;
        h2.innerText = elem.username;
        span.innerText = elem.professional_level;
        elem.kind_of_work
          ? (span2.innerText = elem.kind_of_work)
          : (span2.innerText = "A definir.");
        span4.innerText = elem.email;
        span.style.fontWeight = "600";
        span2.style.fontWeight = "600";
        span4.style.fontWeight = "600";

        li.append(h2, spanLevel, span, span1, span2, span3, span4);
        ul.append(li);
      });
      sectionUsersOffWork.append(ul);
    }

    async function renderFuncionarios() {
      const funcionarios1 = await Api.getAllUsersApi();
      const funcionarios = funcionarios1.filter((elem) => {
        return !elem.is_admin && elem.department_uuid;
      });
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

        divButtons.classList.add("divButtons");

        elem.kind_of_work
          ? (span2.innerText = elem.kind_of_work)
          : (span2.innerText = "A definir.");
        h2.innerText = elem.username;
        span.innerText = elem.professional_level;
        span4.innerText = elem.email;

        spanLevel.innerText = "Nível profissional:";
        span1.innerText = `Tipo de trabalho :`;
        span3.innerText = `E-mail para contato:`;

        span.style.fontWeight = "600";
        span2.style.fontWeight = "600";
        span4.style.fontWeight = "600";

        li.append(h2, spanLevel, span, span1, span2, span3, span4);
        ul.append(li);
      });
      sectionFuncionarios.append(ul);
    }

    async function renderDepartaments() {
      const departamentos = await Api.getAllDepartamentsApi();

      const ul = createE("ul");
      departamentos.forEach((elem) => {
        const liCard = createE("li");
        const nameEmpresa = createE("h3");
        const spanDescricao = createE("span");

        nameEmpresa.innerText = elem.name;
        spanDescricao.innerText = elem.description;

        liCard.append(nameEmpresa, spanDescricao);
        ul.append(liCard);
      });

      sectionDepartaments.append(ul);
    }

    async function renderEmpresa() {
      const empresas = await Api.getEmpresasApi();
      const ul = createE("ul");
      empresas.forEach((elem) => {
        const liCard = createE("li");
        const nameEmpresa = createE("h3");
        const spanDescricao = createE("span");

        nameEmpresa.innerText = elem.name;
        spanDescricao.innerText = elem.description;

        liCard.append(nameEmpresa, spanDescricao);
        ul.append(liCard);
      });

      sectionEmpresa.append(ul);
    }

    renderOff();
    renderFuncionarios();
    renderDepartaments();
    renderEmpresa();
  }

  static renderMenu(array) {
    const sectionMenuHide = document.querySelector(".sectionMenu");
    const arrayLinks = array;
    const { createE } = Render;

    function createLinks(ul) {
      arrayLinks.forEach((elem) => {
        const li = createE("li");
        const a = createE("a");

        a.href = elem.href;
        a.innerText = elem.text;

        li.append(a);
        ul.append(li);
      });
    }

    function showAndHideMenu() {
      buttonMenu.classList.toggle("hidden");
      sectionMenuHide.classList.toggle("hidden");
    }

    function createMenu() {
      function classeAdd(elem, classe) {
        elem.classList.add(classe);
      }
      const divRectangle4 = createE("div");
      const divRectangle5 = createE("div");
      const divButton = createE("div");
      const divMaior = createE("div");
      const ul = createE("ul");
      const li = createE("li");
      const spanLogout = createE("span");

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

  static renderDarkMode() {}
}
