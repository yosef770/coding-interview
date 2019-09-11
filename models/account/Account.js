const mongoose = require('mongoose');


const AccountSchema = new mongoose.Schema({
	email: {type: String, required: true, unique: true, dropDups: true },
	name: {type: String},
	age: {type: Number},
}, {timestamps: true});


const accountModel = mongoose.model('accounts', AccountSchema);

const accounts = {};

accounts.getAccByEmail = async function(email){
	try {
		const res = await accountModel.findOne({email}).exec();
		return res ? res._doc : null;
	}catch (e) {
		return null;
	}
};

accounts.createAcc=async function({email, name, age}){
	try {
		const account = new accountModel({email, name, age});
		await account.save();
		return true;
	}
	catch (e) {
		return false;
	}
};

accounts.accountModel = accountModel;

module.exports = accounts;
