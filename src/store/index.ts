import * as mobx from "mobx";
import { makeAutoObservable } from "mobx";
import { ILogin } from "../Core/Interfaces/Auth/ILogin";
import { IUser } from "../Core/Interfaces/Auth/IUser";
import AuthService from "../Service/AuthService";

export default  class Store {
	constructor() {
		makeAutoObservable(this);
		this.load();
		this.autoSave(this, this.save.bind(this));
	}
	user:IUser = {};
	isAuth = false;

	setAuth(bool: boolean) {
		this.isAuth = bool;
	}
	setUser(user: IUser) {
		this.user = user;
	}

	load() {
		if (localStorage.getItem("store") != null) {
			const data: any = localStorage.getItem("store");
			Object.assign(this, JSON.parse(data));
		}
	}
	autoSave(store: any, save: any) {
		let firstRun = true;
		mobx.autorun(() => {
			const json = JSON.stringify(mobx.toJS(store));
			if (!firstRun) {
				save(json);
			}
			firstRun = false;
		});
	}

	save(json: any) {
		localStorage.setItem("store", json);
	}

	async login(props: ILogin) {		
		try {
			const response = await AuthService.login(props);
			console.log(response)
			if (response.status == 400) {
				console.log(400)
			}
			this.setAuth(true);
			this.setUser(response.data );
			window.location.href = "/admin";
			return response.status
		} catch (e: any) {			
			console.log(e.response?.data?.message);
			return e.response.status
		}
	}
	async logout() {
		try {		
			this.setAuth(false);
			this.setUser({});
			window.location.reload();
		} catch (e: any) {
			console.log(e.response?.data?.message);
		}
	}

	async checkAuth() {
		this.setAuth(true);
	}
}