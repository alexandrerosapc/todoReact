import { useState } from "react";
import Logo from "./components/Logo";
import AdicionarTarefa from "./components/AdicionarTarefa";
import ListaTarefas from "./components/ListaTarefas";

function App() {
  const tarefasIniciais = [
    "Jogar Lolzinho",
    "Assistir Narutinho",
    "Comprar cafezinho",
  ];

  const [listaTarefas, setListaTarefas] = useState(tarefasIniciais);
  const [terminadas, setTerminadas] = useState([])
  const [textoTarefa, setTextoTarefa] = useState("")


  return (
    <div className="conteudo">
      <Logo />
      <AdicionarTarefa
        listaTarefas={listaTarefas}
        textoTarefa={textoTarefa}
        setListaTarefas={setListaTarefas}
        setTextoTarefa={setTextoTarefa}
      />
      <ListaTarefas
        setTerminadas={setTerminadas}
        terminadas={terminadas}
        listaTarefas={listaTarefas}
      />
    </div>
  );
}

export default App;
