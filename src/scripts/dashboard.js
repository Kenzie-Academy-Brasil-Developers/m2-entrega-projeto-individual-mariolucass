import { Render } from "./models/render.js";

const token = Render.Usertoken;

if (token) {
  window.location.replace("/index.html");
} else {
  Render.renderMenuDash();
  Render.renderLogout();
}
