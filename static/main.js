class Profile {
	constructor({
		username,
		name: {firstName, lastName},
		password
	}) {
		this.username = username;
		this.name = {firstName, lastName};
		this.password = password;
	}