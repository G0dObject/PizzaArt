import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { IProduct } from '../../../Core/Interfaces/Auth/IProduct';
import { SendProduct } from '../../../Core/Interfaces/Auth/SendProduct';
import Item from './Item';
import './_Add.scss';
const Add = () => {
	const [isvisible, setvisible] = useState(false);
	const [pizza, setPizza] = useState<IProduct[]>([]);

	useEffect(() => {
		fetchData();
	}, []);

	const addProduct = (product: IProduct) => {
		let temp = pizza;
		temp.push(product);
		setPizza(temp);
	};

	const fetchData = async () => {
		let temp = await axios.get<IProduct[]>(process.env.REACT_APP_BASE_API_URL + 'menu/', {});
		setPizza(temp.data);
		console.log('set');
	};

	const input = useRef<any>(null);

	return (
		<>
			{isvisible ? <Modal callback={addProduct} setvisible={setvisible} /> : <></>}
			<div className="item-wrapper">
				<div className="item-inner">
					<div className="item-header">
						<button
							className="upload"
							onClick={() => {
								setvisible(!isvisible);
							}}>
							<div>Добавить пиццу</div>

							<input
								ref={input}
								accept="image/png,  image/jpeg"
								type="file"
								className="avatar__inner__action__form hide"></input>
						</button>
					</div>
					<div className="item-body">
						<div className="item-container">
							{pizza!.map((a) => {
								return (
									<Item
										id={a.id}
										title={a.title}
										imageUrl={a.imageUrl}
										price={a.price}></Item>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const Modal = (props: {
	callback: (product: IProduct) => void;
	setvisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const title = useRef<HTMLInputElement>(null);
	const sizes = useRef<HTMLInputElement>(null);
	const types = useRef<HTMLInputElement>(null);
	const category = useRef<HTMLInputElement>(null);
	const imageUrl = useRef<HTMLInputElement>(null);
	const price = useRef<HTMLInputElement>(null);
	const rating = useRef<HTMLInputElement>(null);

	const sendPizza = () => {
		let sizesstring = sizes!.current?.value as string;
		let typessstring = sizes!.current?.value as string;

		let gonesizes = sizesstring.split(',').map(function (item) {
			return parseInt(item, 10);
		});

		let gonetypes = typessstring.split(',');

		const data: SendProduct = {
			title: title!.current!.value,
			sizes: gonesizes,
			types: gonetypes,
			category: Number(category!.current?.value),
			imageUrl: imageUrl!.current?.value as string,
			price: Number(price!.current?.value),
			rating: Number(rating!.current?.value),
		};
		axios.post(process.env.REACT_APP_BASE_API_URL + 'menu/', { ...data });
		axios.get<number>(process.env.REACT_APP_BASE_API_URL + 'menu/lastid', {}).then((res) => {
			props.callback({
				title: data.title,
				price: data.price,
				imageUrl: data.imageUrl,
				id: res.data + 1,
			});
		});
	};

	return (
		<>
			<div className="form-wrapper">
				<div className="dark-form">
					<div
						className="fa fa-times"
						onClick={() => {
							props.setvisible(false);
						}}></div>
					<label>Название:</label>
					<input
						ref={title}
						type="text"
						id="title"
						name="title"
						defaultValue="Пицулечка"
						placeholder="Введите название..."></input>

					<label>Размер:</label>
					<input
						ref={sizes}
						type="text"
						id="size"
						name="size"
						defaultValue={'25,35,40'}
						placeholder="В формате '30,40,50'"></input>

					<label>Тип в формате "Мясные, Гриль":</label>
					<input
						ref={types}
						type="text"
						id="type"
						name="type"
						defaultValue={'Мясные, Гриль'}
						placeholder="Мясные, Гриль"></input>

					<label>Категория:</label>
					<input
						ref={category}
						type="text"
						id="category"
						name="category"
						defaultValue={1}
						placeholder="Введите категорию 1-5 "></input>

					<label>Image URL:</label>
					<input
						ref={imageUrl}
						type="text"
						id="imageUrl"
						name="imageUrl"
						placeholder="Ссылка на фото"
						defaultValue={
							'https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?w=740&t=st=1685698435~exp=1685699035~hmac=da9219fbb5fa0f52064f5259050beb2f3163f1fceb126fd612a693ae3a416c74'
						}></input>

					<label>Price:</label>
					<input
						ref={price}
						type="text"
						id="price"
						name="price"
						defaultValue={555}
						placeholder="Enter price..."></input>

					<label>Rating:</label>
					<input
						ref={rating}
						type="text"
						id="rating"
						name="rating"
						placeholder="Enter rating..."
						defaultValue="5"></input>

					<input onClick={sendPizza} type="submit" value="Добавление"></input>
				</div>
			</div>
		</>
	);
};

export default Add;
