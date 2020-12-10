const express =require(`express`);
const loginRouter =express.Router();



loginRouter.get(`/login` , function(req,res){
    res.render("login",
    {
        title:`signin`
    })
})



module.exports =loginRouter;
