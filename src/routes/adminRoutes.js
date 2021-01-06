const express =require(`express`);
const adminRouter =express.Router();
const Bookdata=require(`../model/Bookdata`);

adminRouter.get(`/`,function(req,res){
    res.render(`addbook`,
        {
            nav:[{link:`/admin`,name:`Add book`},{link:`/admin`,name:`Add Author`}],
            title:`Library` 
         });
     });

adminRouter.get(`/addbook`,function(req,res){
    var item={
        title:req.query.title,
        author:req.query.author,
        genre:req.query.genre,
        image:req.query.image 
    }
 var book = Bookdata(item)
 book.save();
 res.redirect('/books');
})

module.exports =adminRouter;