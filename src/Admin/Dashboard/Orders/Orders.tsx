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
								<th>Номер</th>
								<th>Сумма</th>
								<th>Количество товаров</th>
								<th>ID товаров {}</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((res) => {
								console.log(res);

								return (
									<>
										<tr key={Math.random()} className="active-row">
											<td>{res.customerNumber}</td>
											<td>{res.total}</td>
											<td>{res.amount}</td>
											<td>{res.productsId}</td>
										</tr>
									</>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Orders;
