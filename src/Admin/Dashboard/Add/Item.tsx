import axios from 'axios';
import { IProduct } from '../../../Core/Interfaces/Auth/IProduct';
import './_Add.scss';
const Item = (props: IProduct) => {
	const fetchdelete = (): void => {
		axios
			.delete(process.env.REACT_APP_BASE_API_URL + `menu?id=${props.id}`, {})
			.then(() => window.location.reload());
	};

	return (
		<div className="item">
			<img src={props?.imageUrl}></img>
			<button
				onClick={() => {
					navigator.clipboard.writeText(props?.imageUrl as string);
				}}
				className="item-link">
				<p>{props?.imageUrl}</p>
			</button>
			<div className="item-title">{props.title}</div>
			<div className="item-price">{props.price} ₽</div>
			<button onClick={fetchdelete} className="item-delete">
				Удалить
			</button>
		</div>
	);
};

export default Item;
