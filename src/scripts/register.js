import { Register } from "./models/featRegister.js";
import { Render } from "./models/render.js";
const token = Render.Usertoken;
async function registerPage() {
  await Render.renderEmpresasLogin();
  Register.redirect();
  Register.register();
}

token ? window.location.assign("/src/pages/dashboard.html") : registerPage();
