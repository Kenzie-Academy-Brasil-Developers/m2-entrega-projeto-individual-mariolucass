export class Admin {
  static messageError(message, section) {
    section.innerHTML = "";

    const h3 = document.createElement("h3");
    const span = document.createElement("span");

    h3.innerText = `Infelizmente não foi possivel carregar os dados ${message}`;
    span.innerText = "Tente Novamente.";

    section.append(h3, span);
  }
}
