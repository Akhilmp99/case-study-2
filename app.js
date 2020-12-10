const express =require(`express`);
const app = express();
const port = process.env.PORT  || 2000;
const booksRouter =require(`./src/routes/bookRoutes`)
const authorRouter =require(`./src/routes/authorRoutes`);
const loginRouter = require("./src/routes/loginRoutes");
const adminRouter = require("./src/routes/adminRoutes");



app.use(express.static(`./public`));

app.set(`view engine`,`ejs`);
app.set(`views`,`./src/views`);
app.use(`/Books` ,booksRouter);
app.use(`/Author`,authorRouter);
app.use(`/login`,loginRouter);
app.use(`/admin`,adminRouter);





app.get('/signup', function(req,res){
    res.render("signup",
    {
       title:`signup` 
    })
})


app.get(`/` , function(req,res){
    res.render("index",
    {
       nav:[{link:`/signup`,name:`Account`},{link:`/admin`,name:`Add book`},{link:`/books`,name:`Books`},{link:`/author`,name:`Author`}],
       title:`Library` 
    });
});

app.get(`/login`, function(req,res){
    res.render("login",
    {
        title:`signin`
    });
});



app.listen(port,()=>{console.log("server Ready at" + port)});

