export default class User {
	constructor({ role, username, password, spec}) {
		this.role = role;
		this.username = username;
		this.password = password;
		this.spec = spec, undefined;
	}
}

//module.exports = User;
//exports.default = User;