let users = require('./UserData');

//READ ALL
exports.readAll = (req,res) =>
{
    return res.status(200).json(users);
}

//READ one by Id
exports.readOneById = (req,res) =>
{
    let user = users.find(user => user.id == req.params.id);

    if (!user)
    {
        return res.status(404).json({result: `id ${req.params.id} not found`});
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
    let user = users.find(user => user.id == req.params.id);

    if (!user)
    {
        return res.status(404).json({result: `id ${req.params.id} not found`});
    }
    for(const key in req.body)
        {
            if(user.hasOwnProperty(key))
            {
                if(key != 'id')
                {
                    user[key] = req.body[key];
                }
            }
            
        }
    res.status(200).json(user);
}


exports.deleteOne =  (req, res) =>
{
    let user = users.find(user => user.id == req.params.id);
    if (!user)
    {
        return res.status(404).json({result: `id ${req.params.id} not found`});
    }
    
    users = users.filter(user => user.id != req.params.id)

    res.status(200).json(users);
}