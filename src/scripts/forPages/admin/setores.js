import { Admin } from "./featAdmin.js";
import { Render } from "../../models/render.js";
const token = localStorage.getItem("@Hashy:admin");
async function setores() {
  Render.renderMenuDashAdmin();
  Admin.getSetores();
}

!token ? window.location.replace("/index.html") : setores();
