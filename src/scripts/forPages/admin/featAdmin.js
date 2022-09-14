import { Api } from "../../models/api.js";
import { Modal } from "../../models/modal.js";
import { Render } from "../../models/render.js";

export class Admin {
  static async getSetores() {
    await Render.renderSetoresAdmin();
    const buttons = document.querySelectorAll(".showEmpresas");

    buttons.forEach((element) => {
      element.addEventListener("click", async (event) => {
        event.preventDefault();
        const setor = element.id;
        const empresas = await Api.getEmpresasSetorApi(setor);
        Modal.empresasporSetor(empresas);
        const modal = document.querySelector(".modal");
        modal.classList.toggle("hidden");
      });
    });
  }

  static async getFuncionariosOffWork() {
    await Render.renderFuncionariosOffWorkAdmin();
    const buttons = document.querySelectorAll(".buttonContratar");
    const modal = document.querySelector(".modal");

    buttons.forEach((elem) => {
      elem.addEventListener("click", async (event) => {
        event.preventDefault();
        Modal.contratarFuncionario(elem.id);
        modal.classList.toggle("hidden");
      });
    });
  }

  static async getAllUsersForEdit() {
    await Render.renderFuncionariosAdmin();
    const buttonEditar = document.querySelectorAll(".buttonEditar");
    const buttonDemitir = document.querySelectorAll(".buttonDemitir");
    const modal1 = document.querySelector(".modal1");
    const modal2 = document.querySelector(".modal2");

    buttonEditar.forEach((elem) => {
      elem.addEventListener("click", async (event) => {
        event.preventDefault();
        Modal.editFuncionario(elem.id);
        modal1.classList.toggle("hidden");
      });
    });

    buttonDemitir.forEach((elem) => {
      elem.addEventListener("click", async (event) => {
        event.preventDefault();
        Modal.deleteFuncionario(elem.id);
        modal2.classList.toggle("hidden");
      });
    });
  }

  static async selectUsers() {
    const selectSetor = document.getElementById("usersListDelete");
    const users = await Api.getAllUsersApi();

    users.forEach((element) => {
      const option = document.createElement("option");
      option.innerText = element.username;
      option.value = element.uuid;
      selectSetor.append(option);
    });
  }

  static async getEmpresas() {
    await Render.renderEmpresasCriadasAdmin();
  }

  static async createEmpresa() {
    const inputNome = document.getElementById("empresaNome");
    const inputHorario = document.getElementById("empresaHorario");
    const inputDescription = document.getElementById("empresaDescricao");
    const selectDepartament = document.getElementById("empresaSetor");

    const buttonCreate = document.getElementById("buttonCreateEmpresa");

    buttonCreate.addEventListener("click", async (event) => {
      event.preventDefault();
      const data = {
        name: inputNome.value,
        opening_hours: inputHorario.value,
        description: inputDescription.value,
        sector_uuid: selectDepartament.value,
      };
      await Api.createEmpresasApi(data);
    });
  }

  static async selectEmpresas() {
    const selectSetor = document.getElementById("empresaSetor");
    const setores = await Api.getAllSectorsApi();
    setores.forEach((element) => {
      const option = document.createElement("option");
      option.innerText = element.description;
      option.value = element.uuid;
      selectSetor.append(option);
    });
  }

  static async getDepartamentos() {
    await Render.renderDepartamentsAdmin();
  }

  static async createDepartamento() {
    const inputNome = document.getElementById("departamentoNome");
    const inputDescription = document.getElementById("departamentoDescricao");
    const selectDepartament = document.getElementById("departamentoEmpresa");

    const buttonCreate = document.getElementById("buttonCreateDepartamento");

    buttonCreate.addEventListener("click", async (event) => {
      event.preventDefault();
      const data = {
        name: inputNome.value,
        description: inputDescription.value,
        company_uuid: selectDepartament.value,
      };
      await Api.createDepartamentoApi(data);
    });
  }

  static async selectDepartamento() {
    const selectEmpresa = document.getElementById("departamentoEmpresa");
    const empresas = await Api.getEmpresasApi();
    empresas.forEach((element) => {
      const option = document.createElement("option");
      option.innerText = element.name;
      option.value = element.uuid;
      selectEmpresa.append(option);
    });
  }

  static async getAllDepartamentsForEdit() {
    await Render.renderEditDepartamentAdmin();
    const buttonEditar = document.querySelectorAll(".buttonEditar");
    const buttonDemitir = document.querySelectorAll(".buttonDeletar");
    const modal1 = document.querySelector(".modal1");
    const modal2 = document.querySelector(".modal2");

    buttonEditar.forEach((elem) => {
      elem.addEventListener("click", async (event) => {
        event.preventDefault();
        Modal.editDepartamento(elem.id);
        modal1.classList.toggle("hidden");
      });
    });

    buttonDemitir.forEach((elem) => {
      elem.addEventListener("click", async (event) => {
        event.preventDefault();
        Modal.deleteDepartamento(elem.id);
        modal2.classList.toggle("hidden");
      });
    });
  }

  static async deleteUser() {
    const button = document.getElementById("buttonDelete");
    const select = document.getElementById("usersListDelete");

    button.addEventListener("click", async (event) => {
      event.preventDefault();

      const idUser = select.value;
      await Api.deleteUser(idUser);
    });
  }

  static messageError(message, section) {
    section.innerHTML = "";

    const h3 = document.createElement("h3");
    const span = document.createElement("span");

    h3.innerText = `Infelizmente não foi possivel carregar os dados ${message}`;
    span.innerText = "Tente Novamente.";

    section.append(h3, span);
  }
}
