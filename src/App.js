import { useState } from "react";

function App() {
  const tarefasIniciais = [
    "Jogar Lolzinho",
    "Assistir Narutinho",
    "Comprar cafezinho",
  ];

  const [listaTarefas, setListaTarefas] = useState(tarefasIniciais);

  function adicionarTarefa() {
    const novaTarefa = prompt("Digite uma nova tarefa");
    if (novaTarefa) {
      setListaTarefas([...listaTarefas, novaTarefa]);
    }
  }
  return (
    <div className="conteudo">
      <img src="img/logo.png" alt="logo" />

      <div className="adicionar-tarefa">
        <input type="text" placeholder="Digite a tarefa..." />
        <button onClick={adicionarTarefa} className="botao-adicionar">
          +
        </button>
      </div>

      <ul className="lista-tarefas">
        {tarefasIniciais.map((t) => (
          <li className={`tarefa`}>
            <ion-icon name="ellipse-outline"></ion-icon>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
