import { Api } from "./api.js";

export class Login {
  static async login() {
    const buttonLogin = document.getElementById("buttonLogin");

    buttonLogin.addEventListener("click", async (event) => {
      event.preventDefault();
      const inputEmail = document.getElementById("loginEmail");
      const inputPassword = document.getElementById("loginPassword");

      const data = {
        email: inputEmail.value,
        password: inputPassword.value,
      };

      Api.postLoginApi(data);
    });
  }
  static async redirect() {
    const redirButton = document.querySelectorAll(".buttonRedir");

    redirButton.forEach((elem) => {
      elem.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.assign("/src/pages/register.html");
      });
    });
  }
}
