import { Api } from "./api.js";

export class Register {
  static async register() {
    const buttonRegister = document.getElementById("buttonRegister");
    buttonRegister.addEventListener("click", async (event) => {
      event.preventDefault();
      const inputUser = document.getElementById("registerUserName");
      const inputLevel = document.getElementById("registerLevel");
      const inputEmail = document.getElementById("registerEmail");
      const inputPassword = document.getElementById("registerPassword");
      const data = {
        password: inputPassword.value,
        email: inputEmail.value,
        professional_level: inputLevel.value,
        username: inputUser.value,
      };
      Api.postRegisterApi(data);
    });
  }
  static async redirect() {
    const redirButton = document.querySelectorAll(".buttonRedir");

    redirButton.forEach((elem) => {
      elem.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.assign("/index.html");
      });
    });
  }
}
