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
        console.log(empresas);
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

  static messageError(message, section) {
    section.innerHTML = "";

    const h3 = document.createElement("h3");
    const span = document.createElement("span");

    h3.innerText = `Infelizmente não foi possivel carregar os dados ${message}`;
    span.innerText = "Tente Novamente.";

    section.append(h3, span);
  }
}
