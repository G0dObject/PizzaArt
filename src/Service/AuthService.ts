
import axios from 'axios';
import { ILogin } from '../Core/Interfaces/Auth/ILogin';
import { IUser } from '../Core/Interfaces/Auth/IUser';


export default class AuthService {
	static async login(props: ILogin /*email: string, password: string*/) {	

		 return await axios.post<IUser>(process.env.REACT_APP_BASE_API_URL  + 'login/login', { username:props.username, password : props.password });
	}
}
