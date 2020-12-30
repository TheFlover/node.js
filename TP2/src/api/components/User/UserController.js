let users = require('./UserData');

//READ ALL
exports.readAll = (req,res) =>
{
    return res.status(200).json(users);
}

//READ one by Id
exports.readOneById = (req,res) =>
{
    const user = users.find(user => user.id == req.params.id);

    if (!user)
    {
        res.status(404).json({result: `id ${req.params.id} not found`});
    }

    res.status(200).json(user);
}