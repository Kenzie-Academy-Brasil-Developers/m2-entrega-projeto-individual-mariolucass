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
    buttons.forEach((elem) => {
      elem.addEventListener("click", async (event) => {
        event.preventDefault();
        const funcionarioId = elem.id;
        await Api.attContratarFuncionarioApi();
      });
    });
  }

  static async getAllUsersForEdit() {
    const users = await Render.renderFuncionariosAdmin();
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
