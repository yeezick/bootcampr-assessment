import user from "../models/user.js"


export const emailController=async (req,res)=>{
    
  const { email } = req.body;
    if(!email){
        return ;
    }
      try{
          const verifyEmail = await user.findOne({email:email})
          if(verifyEmail){
            res.status(401).json("This Email is already registered")
          }else{
            res.status(201).json('Email can register')
          }
      }catch(err){
          res.status(500).json('Internal Server Error',err)
      }

}