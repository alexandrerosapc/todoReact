import { useState } from "react";

function App() {
  const tarefasIniciais = [
    "Jogar Lolzinho",
    "Assistir Narutinho",
    "Comprar cafezinho",
  ];

  const [listaTarefas, setListaTarefas] = useState(tarefasIniciais);
  const [terminadas, setTerminadas] = useState([])
  const [textoTarefa, setTextoTarefa] = useState("")

  function salvarTexto(event) {
    setTextoTarefa(event.target.value)
  }

  function adicionarTarefa() {
    const novoArray = [...listaTarefas,textoTarefa]
    setListaTarefas(novoArray);
    setTextoTarefa("")
  }

  function terminarTarefa(t) {
    const novoArray = [...terminadas, t]
    setTerminadas(novoArray)
    alert(`Só  faltam ${listaTarefas.length - novoArray.length} tarefas`)
  }

  return (
    <div className="conteudo">
      <img src="img/logo.png" alt="logo" />

      <div className="adicionar-tarefa">
        <input 
        type="text" 
        placeholder="Digite a tarefa..." 
        onChange={salvarTexto}
        value={textoTarefa}
        />
        <button onClick={adicionarTarefa} className="botao-adicionar">
          +
        </button>
      </div>

      <ul className="lista-tarefas">
        {listaTarefas.map((t) => (
          <li onClick={() => terminarTarefa(t)} className={`tarefa ${terminadas.includes(t) ? "finalizada" : ""} `} key={t}>
            <ion-icon name={terminadas.includes(t) ? "checkmark-circle" : "ellipse-outline" }></ion-icon>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
