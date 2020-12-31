const User = require('./models/UserModel');

//READ ALL
exports.readAll = (req,res) =>
{
    User.find()
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(err => {
            return res.status(400).json(err);
        });
}

//READ one by Id
exports.readOneById = (req,res) =>
{
    User.findById(req.params.id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(err => {
            return res.status(400).json(err);
        });
}

exports.createOne = (req, res) =>
{
    const user = new User(req.body);

    user
    .save()
    .then(result => {
        return res.status(201).json(result);
    })
    .catch(err => {
        return res.status(400).json(err);
    });
}

exports.editOne = (req, res) =>
{
    User.findByIdAndUpdate(req.params.id, req.body)
        .exec()
        .then(result => {
            return res.status(200).json("L'utilisateur a été modifié.");
        })
        .catch(err => {
            return res.status(400).json(err);
        })
}


exports.deleteOne =  (req, res) =>
{
    User.findByIdAndDelete(req.params.id)
        .exec()
        .then(result => {
            return res.status(200).json("L'utilisateur a été supprimé.");
        })
        .catch(err => {
            return res.status(400).json(err);
        });
}