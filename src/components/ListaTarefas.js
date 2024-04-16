import styled from "styled-components"
import Tarefa from "./Tarefa"
import { useState } from "react"

export default function ListaTarefas({ listaTarefas }) {
    const [terminadas, setTerminadas] = useState([])

    function terminarTarefa(t) {
        const novoArray = [...terminadas, t]
        setTerminadas(novoArray)
        // alert(`Só  faltam ${listaTarefas.length - novoArray.length} tarefas`)
    }

    return (
        <ContainerLista>
            {listaTarefas.map((t) => (
                <Tarefa
                    key={t}
                    finalizada={terminadas.includes(t)}
                    t={t}
                    terminarTarefa={terminarTarefa}
                />
            ))}
        </ContainerLista>
    )
}

const ContainerLista = styled.ul`
    display: flex;
    flex-direction: column;
    border-radius: 9px;
    overflow: hidden;
`

