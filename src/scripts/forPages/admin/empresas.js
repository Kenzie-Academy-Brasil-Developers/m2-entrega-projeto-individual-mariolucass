import { Admin } from "./featAdmin.js";
import { Render } from "../../models/render.js";
const token = localStorage.getItem("@Hashy:admin");
async function empresas() {
  Render.renderMenuDashAdmin();
}

!token ? window.location.replace("/index.html") : empresas();
