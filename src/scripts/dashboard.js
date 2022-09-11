import { Api } from "./models/api.js";
import { Render } from "./models/render.js";
const token = Render.Usertoken;
function dashboard() {
  Render.renderUser("nameUserBoasVindas");
  Render.renderLevel("userLevelWork");
  Render.renderMenuDashUser();
  console.log();
}

!token ? window.location.replace("/index.html") : dashboard();
