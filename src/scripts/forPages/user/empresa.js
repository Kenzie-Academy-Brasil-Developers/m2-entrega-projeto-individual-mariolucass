import { User } from "./featUser.js";
import { Render } from "../../models/render.js";
const token = Render.Usertoken;
async function empresa() {
  Render.renderMenuDashUser();
  Render.renderUser("nameUserBoasVindas", "userLevelWork");
  await User.getEmpresa();
}

!token ? window.location.replace("/index.html") : empresa();
