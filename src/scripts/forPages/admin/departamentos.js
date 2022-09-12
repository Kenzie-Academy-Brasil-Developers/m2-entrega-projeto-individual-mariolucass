import { Admin } from "./featAdmin.js";
import { Render } from "../../models/render.js";
const token = localStorage.getItem("@Hashy:admin");
async function departamentos() {
  Render.renderMenuDashAdmin();
  Admin.createDepartamento();
  Admin.getDepartamentos();
  Admin.selectDepartamento();
}

!token ? window.location.replace("/index.html") : departamentos();
