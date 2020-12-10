const express =require(`express`);
const authorRouter =express.Router();

var authors = [
    {
        title:`Thunchanththu Ezhuthachan`,
        language:`Malayalam`,
        genre:`poem`,
        img:`thunchathu.jpeg`,
        deb:`Thunchaththu Ramanujan Ezhuthachan (Malayalam: തുഞ്ചത്ത് രാമാനുജൻ എഴുത്തച്ഛൻ, Tuñcattŭ Rāmānujan Eḻuttacchan) was an Malayalam devotional poet and linguist from around the 16th century. He is today known as the father of Malayalam language – the principal language of the Indian state of Kerala and the union territory of Lakshadweep – and it's literature.
        Ezhuthachan was born in Trikkantiyur, near the present day Tirur municipality, in south Malabar in an under-privileged sudra caste. After the birth of his daughter, Ezhuthachan became a monk and wandered throughout southern India before finally building his monastery at modern day Chittoor, Palghat.
        Ezhuthachan's contribution to the Malayalam language is widely considered as unparalleled. He brought massive changes and standardisation in the language through his works. He translated the two Hindu epics, the Ramayana and Mahabharata, to Malayalam for the common man with the mingling of the Sanskrit and Dravidian languages`        
        
    },
    {
        title:`Kunjan Nambiar`,
        language:`Malayalam`,
        genre:`poem`,
        img:`kunjan.jpeg`,
        deb:`Kalakkathu Kunchan Nambiar (Malayalam: കുഞ്ചൻ നമ്പ്യാർ, romanized: kuñcan Nambiār) was an early Malayalam poet, performer, satirist and the inventor of local art form of Ottamthullal. Along with Thunchaththu Ezhuthachan and Cherusseri Namboothiri, Nambiar completes the ancient triumvirate of Malayalam poetry. He is considered by many as the master of Malayalam satirist poetry.`
    },
    {
        title:`M. T. Vasudevan Nair`,
        language:`Malayalam `,
        genre:`Novelist , screen play writer `,
        img:`mt.jpg`,
        deb:`Madath Thekkepaattu Vasudevan Nair (born 1933), popularly known as MT, is an Indian author, screenplay writer and film director. He is a prolific and versatile writer in modern Malayalam literature, and is one of the masters of post-Independence Indian literature.`
    },
    {
        title:`Arundhati Roy `,
        language:`English`,
        genre:`Novel `,
        img:`arundathi.jpeg`,
        deb:`Suzanna Arundhati Roy (born 24 November 1961) is an Indian author best known for her novel The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997 and became the best-selling book by a non-expatriate Indian author. She is also a political activist involved in human rights and environmental causes.`
    },

]

authorRouter.get(`/` , function(req,res){
    res.render("authors",
    {
       nav:[{link:`/books`,name:`Books`},{link:`Author`,name:`author`}],
       title:`Library`,
       authors
    });
});

authorRouter.get(`/:ir`,function(req,res){
    const ir = req.params.ir
    res.render(`author`,
    {
        nav:[{link:`/books`,name:`Books`},{link:`Author`,name:`author`}],
        title:`Library`,
        author: authors[ir],
    });
});

module.exports =authorRouter;