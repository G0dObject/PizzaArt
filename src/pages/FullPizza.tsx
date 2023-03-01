import axios from 'axios';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
	const [pizza, setPizza] = React.useState<{
		imageUrl: string;
		title: string;
		price: number;
	}>();

	const { id } = useParams();
	const navigate = useNavigate();

	React.useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get(
					(process.env.REACT_APP_BASE_API_URL as string) + '/items' + id,
				);

				setPizza(data);
			} catch (error) {
				alert('Ошибка при получении пиццы!');
				navigate('/');
			}
		}

		fetchPizza();
	}, []);

	if (!pizza) {
		return <>Загрузка...</>;
	}

	return (
		<div className="container">
			<img src={pizza.imageUrl} />
			<h2>{pizza.title}</h2>
			<h4>{pizza.price} ₽</h4>
			<Link to="/">
				<button className="button button--outline button--add">
					<span>Назад</span>
				</button>
			</Link>
		</div>
	);
};

export default FullPizza;
