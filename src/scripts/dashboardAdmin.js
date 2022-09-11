import { Render } from "./models/render.js";
const token = Render.Usertoken;
function dashboard() {
  Render.renderMenuDashAdmin();
}
!token ? window.location.replace("/index.html") : dashboard();
