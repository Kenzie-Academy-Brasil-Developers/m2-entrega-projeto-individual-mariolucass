import { Render } from "./models/render.js";
const token = localStorage.getItem("@Hashy:admin");
function dashboard() {
  Render.renderMenuDashAdmin();
  Render.renderDashAdmin();
}
!token ? window.location.replace("/index.html") : dashboard();
