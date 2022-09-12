import { Admin } from "./featAdmin.js";
import { Render } from "../../models/render.js";
const token = localStorage.getItem("@Hashy:admin");
async function departamentos() {
  Render.renderMenuDashAdmin();
  Admin.createDepartamento();
  Admin.getDepartamentos();
}

!token ? window.location.replace("/index.html") : departamentos();
