function abrirPopup() {
  document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

function adicionarTarefa(event) {
  event.preventDefault();
  
  const input = document.getElementById("novaTarefa");
  const texto = input.value.trim();
  
  if (texto === "") return;


  const li = document.createElement("li");
  
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.className ="checkbox";
  
  const label = document.createElement("span");
  label.textContent = texto;

  label.className = "spantask";
  
  li.appendChild(label);
  li.appendChild(checkbox);
  
  const lista = document.getElementById("lista-pendentes").querySelector("ul");
  lista.appendChild(li);
  
  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      const listaConcluidas = document.getElementById("lista-concluidas").querySelector("ul");
      listaConcluidas.appendChild(li);
    } else {
      const listaPendentes = document.getElementById("lista-pendentes").querySelector("ul");
      listaPendentes.appendChild(li);
    }
  });

  input.value = "";
  fecharPopup();
}
