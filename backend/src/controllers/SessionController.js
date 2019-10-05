const User = require('../models/User');

// index, show, store, update, destroy
module.exports = {
    async store(req, res) {
        const { email } = req.body;
        let user = await User.find({ email })

        if (!user || !user.length) {
            user = await User.create({ email });
        }

        return res.json(user)
    }
}