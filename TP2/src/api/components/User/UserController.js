let users = require('./UserData');

//READ ALL
exports.reasAll = (req,res) =>
{
    return res.status(200).json(users);
}