const express =require(`express`);
const adminRouter =express.Router();

adminRouter.get(`/`,function(req,res){
    res.render(`addbook`,
        {
            nav:[{link:`/signup`,name:`Account`},{link:`/admin`,name:`Add book`},{link:`/books`,name:`Books`},{link:`/author`,name:`Author`}],
            title:`Library` 
         });
     });

module.exports =adminRouter;