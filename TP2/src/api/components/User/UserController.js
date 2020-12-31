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

exports.createOne = (req, res) =>
{
    console.log(req.body);
    const user =
    {
        id : (users.length + 1),
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone,
        creationDate : req.body.creationDate,
        role : req.body.role
    }

    users.push(user);
    res.status(201).json(user);
}