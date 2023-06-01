import axios from 'axios';
import { useEffect, useState } from 'react';
import { IOrder } from '../../../Core/Interfaces/Auth/IOrder';
import './_Orders.scss';

const Orders = () => {
	const [orders, setorders] = useState<IOrder[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			let temp = await axios.get<IOrder[]>(process.env.REACT_APP_BASE_API_URL + 'order/', {});
			setorders(temp.data);
		};
		fetchData();
	}, []);

	return (
		<>
			<div className="setting-wrapper">
				<div className="setting-inner">
					<table className="styled-table">
						<thead>
							<tr>
								<th>Имя</th>
								<th>Значение</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Токен Бота</td>
								<td className="setting-input">
									<input></input>
								</td>
							</tr>
							<tr className="active-row">
								<td>Id оператора</td>
								<div className="setting-input">
									<input></input>
								</div>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Orders;
