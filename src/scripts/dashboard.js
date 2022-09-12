import { Render } from "./models/render.js";
const token = Render.Usertoken;
const tokenAdmin = localStorage.getItem("@Hashy:admin");
async function dashboard() {
  Render.renderUser("nameUserBoasVindas");
  Render.renderLevel("userLevelWork");
  Render.renderMenuDashUser();
}
tokenAdmin
  ? window.location.replace("/src/pages/dashboardadmin.html")
  : !token
  ? window.location.replace("/index.html")
  : dashboard();
