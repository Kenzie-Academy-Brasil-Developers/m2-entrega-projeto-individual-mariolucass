import { Admin } from "./featAdmin.js";
import { Render } from "../../models/render.js";
const token = localStorage.getItem("@Hashy:admin");
async function funcionarios() {
  Render.renderMenuDashAdmin();
  Admin.getFuncionariosOffWork();
  Admin.getAllUsersForEdit();
  Admin.selectUsers();
  Admin.deleteUser();
}

!token ? window.location.replace("/index.html") : funcionarios();
