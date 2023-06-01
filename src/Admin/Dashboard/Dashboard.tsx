import { useState } from 'react';

import './_Dashboard.scss';
import Add from './Add/Add';
import Orders from './Orders/Orders';

const Dashboard = () => {
	const [mode, setMode] = useState(0);

	const selectMode = () => {
		switch (mode) {
			case 0:
				return <Add></Add>;
			case 1:
				return <Orders></Orders>;

			default:
				break;
		}
	};

	return (
		<>
			<div className="area">{selectMode()}</div>
			<nav className="main-menu">
				<ul>
					<li>
						<button
							className={`trans ${mode == 0 ? 'selectedmenu' : ''}`}
							onClick={() => setMode(0)}>
							<i className="fa fa-sitemap fa-2x	"></i>
							<span className="nav-text">Товары</span>
						</button>
					</li>
					<li>
						<button
							className={`trans ${mode == 1 ? 'selectedmenu' : ''}`}
							onClick={() => setMode(1)}>
							<i className="fa fa-comment fa-2x"></i>
							<span className="nav-text">Заказы</span>
						</button>
					</li>
				</ul>

				<ul className="logout">
					<button className="trans">
						<i className="fa fa-power-off fa-2x"></i>
						<span className="nav-text">Logout</span>
					</button>
				</ul>
			</nav>
		</>
	);
};

export default Dashboard;
