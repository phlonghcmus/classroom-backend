const classesModel = require('./classesModel');

exports.list = async (req, res, next)=>
{
    const classes=await classesModel.list()
    res.json(classes)
}
exports.detail = async (req,res,next) =>{
    const classItem= await classesModel.get(req.params.id)
    res.json(classItem)
}
exports.add = async (req,res,next) =>{
    item = {
        name: req.body.name,
        user: req.body.user
    }
    await classesModel.add(item)
    res.redirect("/classes");
}