import { Render } from "../../models/render.js";
import { User } from "./featUser.js";
const token = Render.Usertoken;
async function departaments() {
  Render.renderMenuDashUser();
  Render.renderUser("nameUserBoasVindas", "userLevelWork");
  await User.getCoWorkers();
  await User.getDepartamento();
}

!token ? window.location.replace("/index.html") : departaments();
