import { User } from "./featUser.js";
import { Render } from "../../models/render.js";
const token = Render.Usertoken;
async function editInfos() {
  Render.renderMenuDashUser();
  Render.renderUser("nameUserBoasVindas", "userLevelWork");
  User.EditUser();
}

!token ? window.location.replace("/index.html") : editInfos();
