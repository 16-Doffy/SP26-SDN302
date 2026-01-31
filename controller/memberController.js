const Member = require('../models/member');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
exports.login = async (req,res) => {
    try {
        const {username, password} = req.body;
        const jwtSecret = process.env.JWT_SECRET
        const findAcc = await Member.findOne({
            username
        })
        if(!findAcc) {
            return res.status(400).json({status:false, message:'User not found'})
        }
        const isMatch = await bcrypt.compare(password, findAcc.password)
        if(!isMatch) {return res.status(400).json({status:false, message:'Password is not match'})}
        const accessToken = jwt.sign({
            memberId: findAcc._id,
            username: findAcc.username
        }, jwtSecret, {expiresIn: '1h'})
        res.json({status:true, accessToken})
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}