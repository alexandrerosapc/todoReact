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

        <div div className="adicionar-tarefa" >
            <input
                type="text"
                placeholder="Digite a tarefa..."
                onChange={salvarTexto}
                value={textoTarefa}
            />
            <button onClick={adicionarTarefa} className="botao-adicionar">
                +
            </button>
        </div >
    )
}