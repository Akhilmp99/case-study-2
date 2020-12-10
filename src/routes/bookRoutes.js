const express =require(`express`);
const booksRouter =express.Router();


var books = [
    {
        title:`Nimona`,
        author:`Noelle stevenson`,
        genre:`Graphic Novels`,
        img:`nimona.jpg`,
        dec:`Nimona is a fantasy webcomic by the American comics writer and artist Noelle Stevenson. Stevenson started Nimona while a student at Maryland Institute College of Art. The webcomic began publication in June 2012 and doubled as Stevenson's senior thesis. Nimona was published as a graphic novel by HarperCollins in 2015. The comic has won an Eisner Award, a Cybils Award, and a Cartoonist Studio Prize. It was adapted into an audiobook in 2016. An animated feature film adaptation, produced by Blue Sky Studios, was announced in 2015 and is scheduled to be released in January 14, 2022.`        
        
    },
    {
        title:`Fun Home`,
        author:`Alison Bechdel`,
        genre:`Nonfiction Graphic`,
        img:`fun.jpg`,
        dec:`In this graphic memoir, Alison Bechdel charts her fraught relationship with her late father.

        Distant and exacting, Bruce Bechdel was an English teacher and director of the town funeral home, which Alison and her family referred to as the Fun Home. It was not until college that Alison, who had recently come out as a lesbian, discovered that her father was also gay. A few weeks after this revelation, he was dead, leaving a legacy of mystery for his daughter to resolve.`
    },
    {
        title:`The Mermaid from Jeju`,
        author:`Sumi Hahn `,
        genre:`fiction `,
        img:`mermaid.jpg`,
        dec:`In the tradition of Yangsze Choo's Night Tiger and Min Jin Lee's Pachinko comes a magical saga that explores what it really means to love.

        In the aftermath of World War II, Goh Junja is a girl just coming into her own. She is the latest successful deep sea diver in a family of strong haenyeo. Confident she is a woman now, Junja urges her mother to allow her to make the Goh family's annual trip to Mt. Halla, where they trade abalone and other sea delicacies for pork. Junja, a sea village girl, has never been to the mountains, where it smells like mushrooms and earth, and it is there she falls in love with a mountain boy Yang Suwol, who rescues her after a particularly harrowing journey. But when Junja returns one day later, it is just in time to see her mother take her last breath, beaten by the waves during a dive she was taking in Junja's place.
        
        Spiraling in grief, Junja sees her younger siblings sent to live with their estranged father, Suwol is gone, the ghost of her mother haunts their home--from the meticulously tended herb garden that has now begun to sprout weeds, to the field where their bed sheets are beaten. She has only her grandmother and herself. But the world moves on without Junja.
        
        The political climate is perilous. Still reeling from Japan's forced withdrawal from the peninsula, Korea is forced to accommodate the rapid establishment of US troops, and her grandmother, who lived through the Japanese invasion that led to Korea's occupation understands the signs of danger all too well. When Suwol is arrested for working with and harboring communists, and the perils of post-WWII overtake her homelands, Junja must learn to navigate a tumultuous world unlike anything she's ever known.`
    },
    {
        title:`Alice’s Adventures in Wonderland `,
        author:`Lewis Carroll`,
        genre:`Fantasy `,
        img:`alice.jpg`,
        dec:`Alice's Adventures in Wonderland is an 1865 novel by English author Lewis Carroll. It tells of a young girl named Alice, who falls through a rabbit hole into a subterranean fantasy world populated by peculiar, anthropomorphic creatures. It is considered to be one of the best examples of the literary nonsense genre.`
    },

    {
        title:`The Hobbit`,
        author:`J.R.R. Tolkien `,
        genre:`fantasy `,
        img:`hobbit.jpg`,
        dec:` Hobbits, a race of small humanlike creatures, characteristically value peace, simplicity, and cozy homes yet are capable of incredible feats of courage and resourcefulness. The unwilling hero of The Hobbit, Bilbo Baggins, is persuaded to join Thorin and his 12 dwarfs to recover their stolen treasure, which is being guarded by the dragon Smaug. During the expedition, Bilbo finds a magical ring that renders the wearer invisible, which figures prominently in The Lord of the Rings. The Hobbit is the story of Bilbo’s maturing from a seeker of warmth and comforts to a fighter, however humble, for the greater good.

        The Hobbit was adapted in various forms, notably as an animated television movie (1977) and as a series of live-action films (2012, 2013) helmed by New Zealand director Peter Jackson. Jackson’s earlier cinematic renderings of The Lord of the Rings (2001, 2002, 2003) were widely regarded as masterful.`
    }
]

booksRouter.get(`/` , function(req,res){
    res.render("Books",
    {
       nav:[{link:`/books`,name:`Books`},{link:`Author`,name:`author`}],
       title:`Library`,
       books
    });
});



booksRouter.get(`/:id`,function(req,res){
    const id = req.params.id
    res.render(`Book`,
    {
        nav:[{link:`/books`,name:`Books`},{link:`Author`,name:`author`}],
        title:`Library`,
        book: books[id],
    });
});

module.exports =booksRouter;