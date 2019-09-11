const notifications = require('../../models/account/notification');
const express = require('express');
const router = express.Router();


router.post('/', async function (req, res, next) {
    try {
        const {accountId, name, color} = req.body;
        await notifications.createNotificaton({accountId, name, color});
        console.log('create new notification with the data: ', JSON.stringify(req.body, null, 4));
        return res.send({message: 'success'})
    }
    catch (error) {
        return res.send({error})
    }

});

router.get('/', async function (req, res, next) {
    try {
        const { accountId } = req.query;
        const notifiList = await notifications.getNotificationsByAccountId(accountId);
        return res.send(notifiList);
    }catch (error) {
        return res.send({error});
    }
});

router.delete('/', async function (req, res, next) {
    try {
        const { accountId, color } = req.query;
        const result = await notifications.removeNotificationsByAccountIdAndColor(accountId, color);
        return res.send({message: `success, delete ${result.deletedCount} documents`});
    }catch (error) {
        return res.send({error});
    }
});


module.exports = router;