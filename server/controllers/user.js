const User = require("../models/User");

exports.setuser = async (req,res) =>{
    try {
        const {name,email,id,gender,status} = req.body;
        let user = await User.findOne({email});

        if(user)return res.status(200).json({
            message : 'user already exists'
        })
        user = await User.create({name,email,id,gender,status});
        await user.save();
        res.status(200).json({user})

    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

exports.getuser = async (req,res) =>{
    try {

        const user = await User.find({})

        if(!user){
            res.status(200).json({
                "message":"No user Exist"
            });
            return;
        }
        // console.log('bakcend me',user)
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

exports.updateuser = async (req,res) =>{
    try {

        const {oldEmail} = req.body;
       
        const olduser = await User.findOne({email:oldEmail})

        const user = await User.findByIdAndUpdate(olduser._id,{$set : req.body});

        await user.save();
        res.status(200).json(user)
       
    } catch (error) {
        console.log(error)
        res.status(500).json({error : error.message})
    }
}
