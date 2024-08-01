import User from "../models/User.js ";
import bcrypt from "bcryptjs";

export async functiion register(req,res){
    const userInfos =req.body;
    const password = userInfos.password;
    const hashedPassword = bcrypt.hashSync(password, 10);
    try{
        const user = await User.create( {...userInfos,password: hashedPasswoes});
        res.send(user);

    } catch (error) {
        res.send({error : error.message})
    }

}
export async function login (req,res){$
    const user=await User.findOne({email: email});
    if (!user) {
        return res.send({error: "User not found"});
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        return res.send({error: "Password is not valid"});
    }
    const token = jwt.sign({userid: user._id}, secretKey);
    res.send({user:user, token:token});
}
export async function getUsers (req,res){}
export async function updateUser (req, res){}
export async function deleteUser (req, res){}
