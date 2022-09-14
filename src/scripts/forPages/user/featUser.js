import { Api } from "../../models/api.js";
import { Render } from "../../models/render.js";

export class User {
  static async editUser() {
    const buttonEdit = document.getElementById("buttonEdit");
    buttonEdit.addEventListener("click", async (event) => {
      event.preventDefault();
      const inputEmail = document.getElementById("editEmail");
      const inputUserName = document.getElementById("editUserName");
      const inputPassword = document.getElementById("editPassword");

      const data = {
        username: inputUserName.value,
        email: inputEmail.value,
        password: inputPassword.value,
      };
      await Api.attInfoLoggedApi(data);
    });
  }

  static async getEmpresa() {
    const empresa = await Api.getDepartamentsLoggedApi();
    const section = document.querySelector(".empresaUser");
    const message = "da sua Empresa";

    empresa
      ? Render.renderEmpresa(empresa)
      : this.messageError(message, section);
  }

  static async getDepartamento() {
    const departamento1 = await Api.getDepartamentsLoggedApi();
    const departamento = departamento1.departaments;
    const section = document.querySelector(".departamentoUser");
    const message = "do seu Departamento";

    departamento
      ? Render.renderDepartaments(departamento)
      : this.messageError(message, section);
  }

  static async getCoWorkers() {
    const coWorkers = await Api.getCoWorkersApi();
    console.log();
    const section = document.querySelector(".departamentoCoWorkers");
    const message = "de CoWorkers";

    coWorkers
      ? Render.renderCoWorkers(coWorkers)
      : this.messageError(message, section);
  }

  static async deleteFuncionario() {
    const buttonDeletar = document.getElementById("buttonDelete");

    buttonDeletar.addEventListener("click", async (event) => {
      event.preventDefault();
      Api.deleteFuncionario();
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
