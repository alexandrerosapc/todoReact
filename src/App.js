import { useState } from "react";
import Logo from "./components/Logo";
import AdicionarTarefa from "./components/AdicionarTarefa";
import ListaTarefas from "./components/ListaTarefas";
import styled from "styled-components";
import GlobalStyle from "./css/GlobalStyle";

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
    <Conteudo>
      <GlobalStyle />

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
    </Conteudo>
  );
}

export default App;


const Conteudo = styled.div`
  max-width: 450px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
`