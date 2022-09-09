import { Api } from "./models/api.js";
import { Render } from "./models/render.js";
const token = Render.Usertoken;

if (!token) {
  window.location.replace("/index.html");
} else {
  Render.renderUser();
  Render.renderMenuDashUser();
  console.log();
}
