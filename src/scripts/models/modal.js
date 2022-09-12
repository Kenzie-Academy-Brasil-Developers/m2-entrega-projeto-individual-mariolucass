export class Modal {
  static async empresasporSetor(lista) {
    await lista;
    const modal = document.querySelector(".modal");
    modal.innerHTML = "";
    const ul = document.createElement("ul");
    const closeModal = document.createElement("span");

    closeModal.innerText = "X";
    closeModal.id = "closeModal";
    closeModal.addEventListener("click", () => {
      modal.classList.toggle("hidden");
    });
    ul.append(closeModal);

    function listarEmpresas() {
      lista.forEach((element) => {
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        const span = document.createElement("span");
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        const span3 = document.createElement("span");

        h2.innerText = element.name;
        span1.innerText = "Descrição da empresa:";
        span.innerText = element.description;
        span.style.fontWeight = "600";
        span3.innerText = "Horário de funcionamento:";
        span2.innerText = element.opening_hours;
        span2.style.fontWeight = "600";
        li.append(h2, span1, span, span3, span2);
        ul.append(li);
      });
      modal.append(ul);
    }

    function naoTemEmpresas() {
      const li = document.createElement("li");
      const h2 = document.createElement("h2");
      const span = document.createElement("span");

      h2.innerText = "Não há empresas pra esse setor";
      span.innerText = "Tente outro setor.";

      li.append(h2, span);
      ul.append(li);
      modal.append(ul);
    }

    lista.length ? listarEmpresas() : naoTemEmpresas();
  }

  static async editDepartamento() {}

  static async deleteDepartamento() {}

  static async editFuncionario() {}

  static async deleteFuncionario() {}
}
