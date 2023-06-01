import { useRef, useState } from 'react';
import Item from './Item';
import './_Add.scss';
const Add = () => {
	const [isvisible, setvisible] = useState(false);
	const [pizza, setPizza] = useState([1, 2, 34, 5]);

	// useEffect(() => {
	// 	ImageService.get().then((f) => setImages(f.data));
	// }, []);
	const input = useRef<any>(null);

	return (
		<>
			{isvisible ? <Modal setvisible={setvisible} /> : <></>}
			<div className="images-wrapper">
				<div className="images-inner">
					<div className="images-header">
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
					<div className="images-body">
						<div className="images-container">
							{pizza!.map((a) => {
								return (
									<Item
										{...{
											id: 'string',
											title: 'string',
											price: 1,
											imageUrl: 'string',
											sizes: [1, 2],
											types: [1, 2],
											rating: 5,
										}}></Item>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const Modal = (props: { setvisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
	return (
		<>
			<div className="form-wrapper">
				<div className="dark-form">
					<div
						className="fa fa-times"
						onClick={() => {
							props.setvisible(false);
						}}></div>
					<label>Title:</label>
					<input type="text" id="title" name="title" placeholder="Enter title..."></input>

					<label>Size:</label>
					<input type="text" id="size" name="size" placeholder="Enter size..."></input>

					<label>Type:</label>
					<input type="text" id="type" name="type" placeholder="Enter type..."></input>

					<label>Category:</label>
					<input
						type="text"
						id="category"
						name="category"
						placeholder="Enter category..."></input>

					<label>Image URL:</label>
					<input
						type="text"
						id="imageUrl"
						name="imageUrl"
						placeholder="Enter Image URL..."></input>

					<label>Price:</label>
					<input type="text" id="price" name="price" placeholder="Enter price..."></input>

					<label>Rating:</label>
					<input
						type="text"
						id="rating"
						name="rating"
						placeholder="Enter rating..."></input>

					<input type="submit" value="Добавление"></input>
				</div>
			</div>
		</>
	);
};

export default Add;
