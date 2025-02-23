//hospital apis
const epxress=require("express");
const Hospital=require("../models/Hospital");
const router=epxress.Router();
router.get("/",async(req,res)=>{
    try{
        const hospitals=await Hospital.find();
        res.json(hospitals);
    }catch(err){
        res.status(500).json({error:err.message});
    }
});
router.post("/",async(req,res)=>{
    const{name,location}=req.body;
    if(!name || !location){
        return res.status(400).json({error:"Provide Name and Location"});
    }
    try{
        const newHospital=new Hospital({name,location});
        await newHospital.save();
        res.status(201).json(bewHospital);
    }catch(err){
        res.status(500).json({error:err.message})
    }
});
module.exports=router;