import { useEffect, useState } from "react";

const minhaLista = [
	{ id: "1", value: "Fruta" },
	{ id: "2", value: "Legumes" },
	{ id: "3", value: "Carnes" },
];

export default function App() {
	const [produtos, setProdutos] = useState(minhaLista);
	const [pesquisa, setPesquisa] = useState("");

	useEffect(() => {
		if (pesquisa) {
			const novaLista = minhaLista.filter((item) => {
				return item.value.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase());
			});
			setProdutos(novaLista);
		} else {
			setProdutos(minhaLista);
		}
	}, [pesquisa]);

	return (
		<div>
			<h1>Efeitos Colaterais</h1>
			<input
				value={pesquisa}
				onChange={(e) => {setPesquisa(e.target.value);}}
				placeholder="pesquise aqui"
			></input>

			{produtos.map((item) => {
				return (
					<div key={item.id}>
						<h4>{item.value}</h4>
					</div>
				)}
			)}
		</div>
	);
}
