import { PizzaBlockProps } from '../../../components';

const Item = (props?: PizzaBlockProps) => {
	return (
		<div className="item">
			<img src={props?.imageUrl}></img>
			<button
				onClick={() => {
					navigator.clipboard.writeText(props?.imageUrl as string);
				}}
				className="image-link">
				<a href={props?.imageUrl}>{props?.imageUrl}</a>
			</button>
			<button className="image-delete">Удалить</button>
		</div>
	);
};

export default Item;
