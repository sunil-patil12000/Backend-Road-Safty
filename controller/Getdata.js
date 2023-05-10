
const Register = require('../Model/RegisterSech')

module.exports= async (req,res)=>{



    const uname = await Register.findOne({ _id: req.body.id });

    if(uname){
        res.status(200).json(uname)
    }
    else{

        res.status(401).send("data not fond")
    }


}