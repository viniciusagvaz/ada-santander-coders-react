import { useEffect, useState } from "react";

function App() {
	const [tarefas, setTarefas] = useState([]);

	useEffect(() => {
		async function buscarDados() {
			const resultado = await fetch("https://jsonplaceholder.typicode.com/todos");
			const resultadoFinal = await resultado.json();
			return resultadoFinal;
		}
		buscarDados().then((res) => setTarefas(res));
	}, []);

	return (
		<div>
			<h1>Buscando Dados</h1>
			<ol>
				{tarefas.map((tarefa) => {
					return <li key={tarefa.id}>{tarefa.title}</li>;
				})}
			</ol>
		</div>
	);
}

export default App;
