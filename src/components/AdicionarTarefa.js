import styled from "styled-components";

export default function AdicionarTarefa({ listaTarefas, textoTarefa, setListaTarefas, setTextoTarefa }) {

    function adicionarTarefa() {
        const novoArray = [...listaTarefas, textoTarefa]
        setListaTarefas(novoArray);
        setTextoTarefa("")
    }

    function salvarTexto(event) {
        setTextoTarefa(event.target.value)
    }
    return (

        <ContainerAdicionarTarefa >
            <input
                type="text"
                placeholder="Digite a tarefa..."
                onChange={salvarTexto}
                value={textoTarefa}
            />
            <BotaoAdicionar
                onClick={adicionarTarefa} >
                +
            </BotaoAdicionar>
        </ContainerAdicionarTarefa >
    )
}

const ContainerAdicionarTarefa = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    input{
        width: calc(100% - 10px);
        padding: 20px;
        border: none;
        background-color: #f3f3f3;
        color: #555;
        border-top-left-radius: 9px;
        border-bottom-left-radius: 9px;
        font-size: 18px;
        &::placeholder {
            color: #aaa;
        }
    }
`

const BotaoAdicionar = styled.button`
    background-color: #21c0a8;
    border: none;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
    color: white;
    padding: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
    transition: all ease 0.15s;
    &:hover {
        background-color: #56daaf;
    }
`