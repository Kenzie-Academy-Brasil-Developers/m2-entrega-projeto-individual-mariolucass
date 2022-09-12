import { Login } from "./models/featLogin.js";
import { Render } from "./models/render.js";
const token = Render.Usertoken;
async function loginPage() {
  await Render.renderEmpresasLogin();
  Login.redirect();
  Login.login();
}

token ? window.location.assign("/src/pages/dashboard.html") : loginPage();
