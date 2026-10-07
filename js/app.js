const amigos = [];

function adicionar() {
  // TODO ler validar guardar e atualizar
}

function sortear() {
  // TODO validar escolher e exibir
}

function reiniciar(evento) {
  // TODO impedir a navegação e restaurar o estado
}

function adicionar() {
  const input = document.getElementById('nome-amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  amigos.push(nome);
  atualizarLista();

  input.value = '';
  input.focus();
}

function atualizarLista() {
  const lista = document.getElementById('lista-amigos');
  lista.textContent = amigos.join(', ');
}