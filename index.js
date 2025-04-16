let usuario = null;
let tarefas = [];

function mostrarSecao(id) {
  document.querySelectorAll('.secao').forEach(secao => {
    secao.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';

  if (id === 'tarefas' && usuario) {
    document.getElementById('boasVindas').textContent = `Bem-vindo(a), ${usuario.nome}!`;
  }
}

function cadastrarUsuario(event) {
  event.preventDefault();

  const nome = document.getElementById("nomeUsuario").value.trim();
  const email = document.getElementById("emailUsuario").value.trim();

  if (!nome || !email) return;

  usuario = { nome, email };
  mostrarSecao('tarefas');
}

function abrirPopup() {
  document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

function adicionarTarefa(event) {
  event.preventDefault();

  const titulo = document.getElementById("tituloTarefa").value.trim();
  const descricao = document.getElementById("descricaoTarefa").value.trim();
  const data = document.getElementById("dataTarefa").value;

  if (!titulo) return;

  const nova = {
    id: Date.now(),
    titulo,
    descricao,
    data,
    concluida: false
  };

  tarefas.push(nova);
  renderizarTarefas();
  fecharPopup();

  // limpar campos
  document.getElementById("tituloTarefa").value = "";
  document.getElementById("descricaoTarefa").value = "";
  document.getElementById("dataTarefa").value = "";
}

function renderizarTarefas() {
  const ulPendentes = document.getElementById("lista-pendentes");
  const ulConcluidas = document.getElementById("lista-concluidas");

  ulPendentes.innerHTML = "";
  ulConcluidas.innerHTML = "";

  tarefas.forEach(tarefa => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <strong>${tarefa.titulo}</strong><br/>
        <small>${tarefa.descricao || ""} ${tarefa.data ? " - " + tarefa.data : ""}</small>
      </div>
    `;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.concluida;
    checkbox.onchange = () => {
      tarefa.concluida = checkbox.checked;
      renderizarTarefas();
    };

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "🗑";
    btnRemover.onclick = () => {
      tarefas = tarefas.filter(t => t.id !== tarefa.id);
      renderizarTarefas();
    };

    li.appendChild(checkbox);
    li.appendChild(btnRemover);

    if (tarefa.concluida) {
      ulConcluidas.appendChild(li);
    } else {
      ulPendentes.appendChild(li);
    }
  });
}

