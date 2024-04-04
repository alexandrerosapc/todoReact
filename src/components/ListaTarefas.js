export default function ListaTarefas({ terminadas, setTerminadas, listaTarefas }) {

    function terminarTarefa(t) {
        const novoArray = [...terminadas, t]
        setTerminadas(novoArray)
        alert(`Só  faltam ${listaTarefas.length - novoArray.length} tarefas`)
    }
    
    return (
        <ul className="lista-tarefas">
            {listaTarefas.map((t) => (
                <li onClick={() => terminarTarefa(t)} className={`tarefa ${terminadas.includes(t) ? "finalizada" : ""} `} key={t}>
                    <ion-icon name={terminadas.includes(t) ? "checkmark-circle" : "ellipse-outline"}></ion-icon>
                    {t}
                </li>
            ))}
        </ul>
    )
}