import { Api } from "./api.js";

export class Modal {
  static async empresasporSetor(lista) {
    await lista;
    const modal = document.querySelector(".modal");
    modal.innerHTML = "";
    const ul = document.createElement("ul");
    const closeModal = document.createElement("span");

    closeModal.innerText = "X";
    closeModal.id = "closeModal";
    closeModal.addEventListener("click", () => {
      modal.classList.toggle("hidden");
    });
    ul.append(closeModal);

    function listarEmpresas() {
      lista.forEach((element) => {
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        const span = document.createElement("span");
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        const span3 = document.createElement("span");

        h2.innerText = element.name;
        span1.innerText = "Descrição da empresa:";
        span.innerText = element.description;
        span.style.fontWeight = "600";
        span3.innerText = "Horário de funcionamento:";
        span2.innerText = element.opening_hours;
        span2.style.fontWeight = "600";
        li.append(h2, span1, span, span3, span2);
        ul.append(li);
      });
      modal.append(ul);
    }

    function naoTemEmpresas() {
      const li = document.createElement("li");
      const h2 = document.createElement("h2");
      const span = document.createElement("span");

      h2.innerText = "Não há empresas pra esse setor";
      span.innerText = "Tente outro setor.";

      li.append(h2, span);
      ul.append(li);
      modal.append(ul);
    }

    lista.length ? listarEmpresas() : naoTemEmpresas();
  }

  static async editDepartamento() {}

  static async deleteDepartamento() {}

  static async contratarFuncionario(id) {
    const departamentos = await Api.getAllDepartamentsApi();
    const modal = document.querySelector(".modal");
    modal.innerHTML = "";

    const form = document.createElement("form");
    const select = document.createElement("select");
    const button = document.createElement("button");

    button.classList.add("buttonContratarApi", "button2");
    select.classList.add("departamentoHire");
    button.id = id;
    button.innerText = "Contratar Agora.";
    departamentos.forEach((element) => {
      const option = document.createElement("option");
      option.innerText = element.name;
      option.value = element.uuid;
      select.append(option);
    });

    this.closeModal(modal, form);
    form.append(select, button);
    modal.append(form);

    button.addEventListener("click", async (event) => {
      event.preventDefault();
      const data = {
        user_uuid: event.target.id,
        department_uuid: select.value,
      };
      await Api.attContratarFuncionarioApi(data);
    });
  }

  static async editFuncionario(id) {
    const modal = document.querySelector(".modal1");
    modal.innerHTML = "";
    const form = document.createElement("form");
    this.closeModal(modal, form);

    const h3 = document.createElement("h3");
    h3.innerText = "Edite aqui.";
    const inputTipo = document.createElement("input");
    const inputLevel = document.createElement("input");
    inputTipo.id = "editarTipoTrabalho";
    inputLevel.id = "editarLevel";
    inputTipo.placeholder = "Edite aqui seu tipo de trabalho.";
    inputLevel.placeholder = "Edite aqui seu nivel de  trabalho.";

    const button = document.createElement("button");
    button.id = id;
    button.innerText = "Editar Agora.";
    button.classList.add("buttonEditarApi", "button2");

    button.addEventListener("click", async (event) => {
      event.preventDefault();
      const data = {
        kind_of_work: inputTipo.value,
        professional_level: inputLevel.value,
      };
      Api.attInfoFuncionarioApi(id, data);
    });

    form.append(h3, inputTipo, inputLevel, button);
    modal.append(form);
  }

  static async deleteFuncionario(id) {
    const modal = document.querySelector(".modal2");
    modal.innerHTML = "";
    const form = document.createElement("form");
    this.closeModal(modal, form);
    modal.append(form);

    const button = document.createElement("button");
    const h3 = document.createElement("h3");

    button.id = id;
    button.innerText = "Demitir Agora.";
    h3.innerText = "Tem certeza que quer demitir?";

    button.classList.add("buttonDemitirApi", "button2");

    button.addEventListener("click", async (event) => {
      event.preventDefault();
      const idFuncionario = event.target.id;
      Api.attDemitirFuncionarioApi(idFuncionario);
    });

    form.append(h3, button);
  }

  static closeModal(modal, form) {
    const closeModal = document.createElement("span");
    closeModal.innerText = "X";
    closeModal.id = "closeModal";
    closeModal.addEventListener("click", () => {
      modal.classList.toggle("hidden");
    });
    form.append(closeModal);
  }
}
