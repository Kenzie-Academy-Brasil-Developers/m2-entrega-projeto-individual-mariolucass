import { Api } from "../../models/api.js";
import { Render } from "../../models/render.js";

export class User {
  static async EditUser() {
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
    const usuario = await Api.getUserLoggedApi();
    const empresa = usuario.kind_of_work;
    const section = document.querySelector(".empresaUser");
    const message = "da sua Empresa";
    function createListEmpresa() {
      const ul = document.createElement("ul");
    }
    empresa ? createListEmpresa() : this.messageError(message, section);
  }

  static async getDepartamento() {
    const departamento = await Api.getDepartamentsLoggedApi();
    const section = document.querySelector(".departamentoUser");
    const message = "do seu Departamento";
    function createListDepartaments() {
      const ul = document.createElement("ul");
    }
    departamento
      ? createListDepartaments()
      : this.messageError(message, section);
  }

  static async getCoWorkers() {
    const coWorkers = await Api.getCoWorkersApi();
    const section = document.querySelector(".departamentoCoWorkers");
    const message = "de CoWorkers";
    function createListCoWorkers() {
      const ul = document.createElement("ul");
      coWorkers.forEach((element) => {
        ul.append(Render.renderCoWorkers(element));
      });
    }
    coWorkers.length
      ? createListCoWorkers()
      : this.messageError(message, section);
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