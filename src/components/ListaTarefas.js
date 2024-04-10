import styled from "styled-components"

export default function ListaTarefas({ terminadas, setTerminadas, listaTarefas }) {

    function terminarTarefa(t) {
        const novoArray = [...terminadas, t]
        setTerminadas(novoArray)
        alert(`Só  faltam ${listaTarefas.length - novoArray.length} tarefas`)
    }

    return (
        <ContainerLista>
            {listaTarefas.map((t) => (
                <Tarefa
                    onClick={() => terminarTarefa(t)}
                    key={t}
                    finalizada={terminadas.includes(t)}
                >
                    <ion-icon name={terminadas.includes(t) ? "checkmark-circle" : "ellipse-outline"}></ion-icon>
                    {t}
                </Tarefa>
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

const Tarefa = styled.li`
    color: ${props => props.finalizada ? "#aaaaaa" : "#303f4e"};
    text-decoration: ${props => props.finalizada ? "line-through" : "none"};
    padding: 22px;
    display: flex;
    align-items: center;
    font-size: 22px;
    cursor: pointer;
    background-color: #f3f3f3;
    &:hover {
        color: #21c0a8;
    }
    &:not(:last-child) {
        border-bottom: 1px solid #e7e7e7;
    }
    ion-icon {
        flex-shrink: 0;
        font-size: 40px;
        margin-right: 16px;
        color: ${props => props.finalizada ? "#78dbad" : ""};
    }
    &:hover ion-icon {
        color: #21c0a8;
    }
`