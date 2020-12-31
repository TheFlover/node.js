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
        id : users[users.length - 1].id + 1,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone,
        creationDate : new Date(),
        role : req.body.role
    }

    users.push(user);
    res.status(201).json(user);
}
exports.editOne = (req, res) =>
{
    const user = users.find(user => user.id == req.params.id);

    if (!user)
    {
        res.status(404).json({result: `id ${req.params.id} not found`});
    }
    else
    {
        if(req.body.firstName != null)
        {
            user.firstName = req.body.firstName;
        }
        if(req.body.lastName != null)
        {
            user.lastName = req.body.lastName;
        }
        if(req.body.email != null)
        {
            user.email = req.body.email;
        }
        if(req.body.password != null)
        {
            user.password = req.body.password;
        }
        if(req.body.phone != null)
        {
            user.phone = req.body.phone;
        }
        if(req.body.creationDate != null)
        {
            user.creationDate = req.body.creationDate;
        }
        if(req.body.role != null)
        {
            user.role = req.body.role;
        }

    console.log(req.body);
    res.status(201).json(user);

    }
}


exports.deleteOne =  (req, res) =>
{
    const user = users.find(user => user.id == req.params.id);
    if (!user)
    {
        res.status(404).json({result: `id ${req.params.id} not found`});
    }
    console.log(users[req.params.id - 1])
}