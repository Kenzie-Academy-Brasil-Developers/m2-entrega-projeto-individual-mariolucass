import { Login } from "./models/featLogin.js";
import { Render } from "./models/render.js";
const token = Render.Usertoken;

if (token) {
  window.location.assign("/src/pages/dashboard.html");
} else {
  await Render.renderEmpresasLogin();
  Login.redirect();
  Login.login();
}
