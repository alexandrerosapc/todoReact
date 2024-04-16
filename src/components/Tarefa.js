import styled from "styled-components";

export default function Tarefa({terminarTarefa,t, finalizada}) {
    return (
        <ItemTarefa
            onClick={() => terminarTarefa(t)}
            key={t}
            finalizada={finalizada}
        >
            <ion-icon name={finalizada ? "checkmark-circle" : "ellipse-outline"}></ion-icon>
            {t}
        </ItemTarefa>
    )
}

const ItemTarefa = styled.li`
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