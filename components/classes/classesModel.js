const {db}=require('../../database/database');
const ObjectId= require('mongodb').ObjectId;
let classes;
exports.list=async()=>{
    console.log("Hello")
    console.log(db())
    const classesCollection=db().collection('classes');
    classes=await classesCollection.find().toArray();
    console.log(classes)
    return classes;
}
exports.get=async(id)=>{
    const classesCollection=db().collection('classes');
    classItem=await classesCollection.findOne({_id:ObjectId(id)});
    return classItem;
}
exports.add=async(item) =>
{
    const classesCollection=db().collection('classes');
    await classesCollection.insertOne(item);
}