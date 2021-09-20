const router = require("express").Router();
const User = require("../models/User");

//UPDATE
router.put("/:id", async(req,res) => {
    try{
        
    } catch(err){
        res.status(500).json(err);  //something is wrong with mongoDB or Express server
    }
})

//DELETE

module.exports = router