const Accounts = require('../../models/account/Account');
const express = require('express');
const router = express.Router();
//task 1
//we creating route to "post only"  that way all the rest can not go threw
//


router.post('/', async function (req, res, next) {
	try {
		const {email, name, age} = req.body;
		const existAcc = await Accounts.getAccByEmail(email);
		if(existAcc){
			return res.send({"error": "email already exists"});
		}
		await Accounts.createAcc({email, name, age});
		console.log('create new account with the data: ', JSON.stringify(req.body, null, 4));
		return res.send({message: 'success'})
		}
	catch (error) {
		const message = error.message;
		if(/email_\d+ dup key/.test(message)){
			return res.send({"error": "email already exists"})
		}
		else{
			return res.send({"error": message})
		}
	}

});


module.exports = router;