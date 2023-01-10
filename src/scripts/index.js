import { Login } from "./models/featLogin.js";
import { Render } from "./models/render.js";
const token = Render.Usertoken;
const tokenAdmin = localStorage.getItem("@Hashy:admin");

async function loginPage() {
  Login.redirect();
  Login.login();
  await Render.renderEmpresasLogin();
}
tokenAdmin
  ? window.location.replace("/src/pages/dashboardadmin.html")
  : token
  ? window.location.replace("/src/pages/dashboard.html")
  : loginPage();
