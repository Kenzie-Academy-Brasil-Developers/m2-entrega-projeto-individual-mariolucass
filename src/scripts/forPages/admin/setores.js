import { Admin } from "./featAdmin.js";
import { Render } from "../../models/render.js";
const token = Render.Usertoken;
async function setores() {}

!token ? window.location.replace("/index.html") : setores();
