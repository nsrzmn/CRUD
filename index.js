const sequelize = require("./util/database");

const Users = require("./models/user");

(async () => {
	await Users.sync();
	console.log("working");

	const data = {
		name: "nasi2r",
		password: "pakistan3@",
		contact: 12345,
		email: "nsrzmn@gmail.com",
	};

	const { name, password } = data;
	console.log("name is ", name);
	console.log("password is ", password);

	const nameRegex = /^[a-zA-Z\s]+$/;

	if (nameRegex.test(name)) {
		console.log("Name is valid.");
	} else {
		return throw new Error("invalid")
		console.log("Name contains invalid characters.");
	}

	// Regular expression to check if password contains at least 8 characters,
	// at least 1 number, and at least 1 special character
	const passwordRegex =
		/^(?=.*[A-Za-z].*[A-Za-z].*[A-Za-z].*[A-Za-z].*[A-Za-z].*[A-Za-z].*[A-Za-z].*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+}{":;'?/><,.\[\]\\\/]).{8,}$/;

	if (passwordRegex.test(password)) {
		console.log("Password is valid.");
	} else {
		console.log("Password does not meet the criteria.");
	}

	const dataf = Users.create({
		...data,
	});
	return dataf;
})();
