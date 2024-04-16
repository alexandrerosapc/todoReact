import { useState } from "react";
import Logo from "./Logo";
import AdicionarTarefa from "./AdicionarTarefa"
import ListaTarefas from "./ListaTarefas";
import styled from "styled-components";
import GlobalStyle from "../style/GlobalStyle";

export default function ToDoMain() {
    const tarefasIniciais = [
        "Jogar Lolzinho",
        "Assistir Narutinho",
        "Comprar cafezinho",
    ];

    const [listaTarefas, setListaTarefas] = useState(tarefasIniciais);

    return (
        <Conteudo>
            <GlobalStyle />
            <Logo />
            <AdicionarTarefa
                listaTarefas={listaTarefas}
                setListaTarefas={setListaTarefas}
            />
            <ListaTarefas
                listaTarefas={listaTarefas}
            />
        </Conteudo>
    )
}

const Conteudo = styled.div`
  max-width: 450px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
`