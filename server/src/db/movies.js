const moviesDb = [
  {
    actors: [
      {
        name: "Jim Varney",
      },
      {
        name: "Tim Allen",
      },
      {
        name: "Tom Hanks",
      },
      {
        name: "Don Rickles",
      },
    ],
    tmdbId: "862",
    plot:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    genres: [
      {
        name: "Adventure",
      },
      {
        name: "Animation",
      },
      {
        name: "Children",
      },
      {
        name: "Comedy",
      },
      {
        name: "Fantasy",
      },
    ],
    directors: [
      {
        name: "John Lasseter",
      },
    ],
    imdbRating: 8.3,
    title: "Toy Story",
    released: "1995-11-22",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
  },
  {
    actors: [
      {
        name: "Robin Williams",
      },
      {
        name: "Bradley Pierce",
      },
      {
        name: "Kirsten Dunst",
      },
      {
        name: "Jonathan Hyde",
      },
    ],
    tmdbId: "8844",
    plot:
      "When two kids find and play a magical board game, they release a man trapped for decades in it and a host of dangers that can only be stopped by finishing the game.",
    genres: [
      {
        name: "Adventure",
      },
      {
        name: "Children",
      },
      {
        name: "Fantasy",
      },
    ],
    directors: [
      {
        name: "Joe Johnston",
      },
    ],
    imdbRating: 6.9,
    title: "Jumanji",
    released: "1995-12-15",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg",
  },
  {
    actors: [
      {
        name: "Walter Matthau",
      },
      {
        name: "Ann-Margret",
      },
      {
        name: "Jack Lemmon",
      },
      {
        name: "Sophia Loren",
      },
    ],
    tmdbId: "15602",
    plot:
      "John and Max resolve to save their beloved bait shop from turning into an Italian restaurant, just as its new female owner catches Max's attention.",
    genres: [
      {
        name: "Comedy",
      },
      {
        name: "Romance",
      },
    ],
    directors: [
      {
        name: "Howard Deutch",
      },
    ],
    imdbRating: 6.6,
    title: "Grumpier Old Men",
    released: "1995-12-22",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/1FSXpj5e8l4KH6nVFO5SPUeraOt.jpg",
  },
  {
    actors: [
      {
        name: "Whitney Houston",
      },
      {
        name: "Lela Rochon",
      },
      {
        name: "Angela Bassett",
      },
      {
        name: "Loretta Devine",
      },
    ],
    tmdbId: "31357",
    plot:
      "Based on Terry McMillan's novel, this film follows four very different African-American women and their relationships with the male gender.",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Drama",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Forest Whitaker",
      },
    ],
    imdbRating: 5.6,
    title: "Waiting to Exhale",
    released: "1995-12-22",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/4wjGMwPsdlvi025ZqR4rXnFDvBz.jpg",
  },
  {
    actors: [
      {
        name: "Steve Martin",
      },
      {
        name: "Kimberly Williams-Paisley",
      },
      {
        name: "Diane Keaton",
      },
      {
        name: "Martin Short",
      },
    ],
    tmdbId: "11862",
    plot:
      "In this sequel, George Banks deals not only with the pregnancy of his daughter, but also with the unexpected pregnancy of his wife.",
    genres: [
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Charles Shyer",
      },
    ],
    imdbRating: 5.9,
    title: "Father of the Bride Part II",
    released: "1995-12-08",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/lf9RTErt8BSLQy98aSFblElvsCQ.jpg",
  },
  {
    actors: [
      {
        name: "Al Pacino",
      },
      {
        name: "Robert De Niro",
      },
      {
        name: "Val Kilmer",
      },
      {
        name: "Jon Voight",
      },
    ],
    tmdbId: "949",
    plot:
      "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.",
    genres: [
      {
        name: "Action",
      },
      {
        name: "Crime",
      },
      {
        name: "Thriller",
      },
    ],
    directors: [
      {
        name: "Michael Mann",
      },
    ],
    imdbRating: 8.2,
    title: "Heat",
    released: "1995-12-15",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/lbf2ueoiEfKIJr2qlT01zIEckbC.jpg",
  },
  {
    actors: [
      {
        name: "Julia Ormond",
      },
      {
        name: "Harrison Ford",
      },
      {
        name: "Nancy Marchand",
      },
      {
        name: "Greg Kinnear",
      },
    ],
    tmdbId: "11860",
    plot:
      "An ugly duckling having undergone a remarkable change, still harbors feelings for her crush: a carefree playboy, but not before his business-focused brother has something to say about it.",
    genres: [
      {
        name: "Comedy",
      },
      {
        name: "Romance",
      },
    ],
    directors: [
      {
        name: "Sydney Pollack",
      },
    ],
    imdbRating: 6.2,
    title: "Sabrina",
    released: "1995-12-15",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/z1oNjotUI7D06J4LWQFQzdIuPnf.jpg",
  },
  {
    actors: [
      {
        name: "Jonathan Taylor Thomas",
      },
      {
        name: "Brad Renfro",
      },
      {
        name: "Eric Schweig",
      },
      {
        name: "Charles Rocket",
      },
    ],
    tmdbId: "45325",
    plot:
      "Tom and Huck witness Injun Joe's killing of Doc Robinson one night at the graveyard. When an innocent man is accused of killing the Doc, Tom steps up as a witness, not respecting the promise made to Huck to lay low.",
    genres: [
      {
        name: "Children",
      },
      {
        name: "Adventure",
      },
    ],
    directors: [
      {
        name: "Peter Hewitt",
      },
    ],
    imdbRating: 5.6,
    title: "Tom and Huck",
    released: "1995-12-22",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/vIG8hWOa7DyLMRiurzKwVAnIYoU.jpg",
  },
  {
    actors: [
      {
        name: "Jean-Claude Van Damme",
      },
      {
        name: "Powers Boothe",
      },
      {
        name: "Raymond J. Barry",
      },
      {
        name: "Whittni Wright",
      },
    ],
    tmdbId: "9091",
    plot:
      "A former fireman takes on a group of terrorists holding the Vice President and others hostage during the seventh game of the NHL Stanley Cup finals.",
    genres: [
      {
        name: "Action",
      },
    ],
    directors: [
      {
        name: "Peter Hyams",
      },
    ],
    imdbRating: 5.7,
    title: "Sudden Death",
    released: "1995-12-22",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/4Snihptli0we9I4W5QfufOdHSeV.jpg",
  },
  {
    actors: [
      {
        name: "Pierce Brosnan",
      },
      {
        name: "Famke Janssen",
      },
      {
        name: "Sean Bean",
      },
      {
        name: "Izabella Scorupco",
      },
    ],
    tmdbId: "710",
    plot:
      "James Bond teams up with the lone survivor of a destroyed Russian research center to stop the hijacking of a nuclear space weapon by a fellow agent formerly believed to be dead.",
    genres: [
      {
        name: "Adventure",
      },
      {
        name: "Action",
      },
      {
        name: "Thriller",
      },
    ],
    directors: [
      {
        name: "Martin Campbell",
      },
    ],
    imdbRating: 7.2,
    title: "GoldenEye",
    released: "1995-11-17",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/bFzjdy6ucvNlXmJwoSoYfufV6lP.jpg",
  },
  {
    actors: [
      {
        name: "Martin Sheen",
      },
      {
        name: "Michael J. Fox",
      },
      {
        name: "Michael Douglas",
      },
      {
        name: "Annette Bening",
      },
    ],
    tmdbId: "9087",
    plot:
      "Comedy-drama about a widowed U.S. president and a lobbyist who fall in love. It's all above-board, but politics is perception and sparks fly anyway.",
    genres: [
      {
        name: "Comedy",
      },
      {
        name: "Romance",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Rob Reiner",
      },
    ],
    imdbRating: 6.8,
    title: "American President, The",
    released: "1995-11-17",
    thumbnail: "https://image.tmdb.org/t/p/w154/yObOAYFIHXHkFPQ3jhgkN2ezaD.jpg",
  },
  {
    actors: [
      {
        name: "Peter MacNicol",
      },
      {
        name: "Leslie Nielsen",
      },
      {
        name: "Steven Weber",
      },
      {
        name: "Amy Yasbeck",
      },
    ],
    tmdbId: "12110",
    plot:
      "Mel Brooks' parody of the classic vampire story and its famous film adaptations.",
    genres: [
      {
        name: "Comedy",
      },
      {
        name: "Horror",
      },
    ],
    directors: [
      {
        name: "Mel Brooks",
      },
    ],
    imdbRating: 5.8,
    title: "Dracula: Dead and Loving It",
    released: "1995-12-22",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/4rRfZz8YnHNRr16t3CFcJrPdXHi.jpg",
  },
  {
    actors: [
      {
        name: "Kevin Bacon",
      },
      {
        name: "Bob Hoskins",
      },
      {
        name: "Jim Cummings",
      },
      {
        name: "Bridget Fonda",
      },
    ],
    tmdbId: "21032",
    plot:
      "An outcast half-wolf risks his life to prevent a deadly epidemic from ravaging Nome, Alaska.",
    genres: [
      {
        name: "Children",
      },
      {
        name: "Adventure",
      },
      {
        name: "Animation",
      },
    ],
    directors: [
      {
        name: "Simon Wells",
      },
    ],
    imdbRating: 7.1,
    title: "Balto",
    released: "1995-12-22",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/tpoaKJMRjOZl9cbZRR2aiKikyRC.jpg",
  },
  {
    actors: [
      {
        name: "Ed Harris",
      },
      {
        name: "Anthony Hopkins",
      },
      {
        name: "Powers Boothe",
      },
      {
        name: "Joan Allen",
      },
    ],
    tmdbId: "10858",
    plot:
      "A biographical story of former U.S. president Richard Milhous Nixon, from his days as a young boy to his eventual presidency which ended in shame.",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Oliver Stone",
      },
    ],
    imdbRating: 7.1,
    title: "Nixon",
    released: "1996-01-05",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/yzMSdrThWAyDehVGjiAkKS2IGSa.jpg",
  },
  {
    actors: [
      {
        name: "Geena Davis",
      },
      {
        name: "Frank Langella",
      },
      {
        name: "Matthew Modine",
      },
      {
        name: "Maury Chaykin",
      },
    ],
    tmdbId: "1408",
    plot:
      "A female pirate and her companion race against their rivals to find a hidden island that contains a fabulous treasure.",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Adventure",
      },
      {
        name: "Action",
      },
    ],
    directors: [
      {
        name: "Renny Harlin",
      },
    ],
    imdbRating: 5.6,
    title: "Cutthroat Island",
    released: "1995-12-22",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/hYdeBZ4BFXivdouxLfQGWNE6zRx.jpg",
  },
  {
    actors: [
      {
        name: "Robert De Niro",
      },
      {
        name: "Joe Pesci",
      },
      {
        name: "Sharon Stone",
      },
      {
        name: "James Woods",
      },
    ],
    tmdbId: "524",
    plot:
      "Greed, deception, money, power, and murder occur between two mobster best friends and a trophy wife over a gambling empire.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Crime",
      },
    ],
    directors: [
      {
        name: "Martin Scorsese",
      },
    ],
    imdbRating: 8.2,
    title: "Casino",
    released: "1995-11-22",
    thumbnail: "https://image.tmdb.org/t/p/w154/4TS5O1IP42bY2BvgMxL156EENy.jpg",
  },
  {
    actors: [
      {
        name: "James Fleet",
      },
      {
        name: "Kate Winslet",
      },
      {
        name: "Tom Wilkinson",
      },
      {
        name: "Harriet Walter",
      },
    ],
    tmdbId: "4584",
    plot:
      "Rich Mr. Dashwood dies, leaving his second wife and her three daughters poor by the rules of inheritance. The two eldest daughters are the titular opposites.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Romance",
      },
    ],
    directors: [
      {
        name: "Ang Lee",
      },
    ],
    imdbRating: 7.7,
    title: "Sense and Sensibility",
    released: "1996-01-26",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/cBK2yL3HqhFvIVd7lLtazWlRZPR.jpg",
  },
  {
    actors: [
      {
        name: "Amanda De Cadenet",
      },
      {
        name: "Valeria Golino",
      },
      {
        name: "Madonna",
      },
      {
        name: "Sammi Davis",
      },
    ],
    tmdbId: "5",
    plot:
      "Four interlocking tales that take place in a fading hotel on New Year's Eve.",
    genres: [
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: " Quentin Tarantino",
      },
      {
        name: " Robert Rodriguez",
      },
      {
        name: " Alexandre Rockwell",
      },
      {
        name: "Allison Anders",
      },
    ],
    imdbRating: 6.7,
    title: "Four Rooms",
    released: "1995-12-25",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/xhU6hPDnk4s8iWWKoq4oEmNI600.jpg",
  },
  {
    actors: [
      {
        name: "Jim Carrey",
      },
      {
        name: "Ian McNeice",
      },
      {
        name: "Simon Callow",
      },
      {
        name: "Maynard Eziashi",
      },
    ],
    tmdbId: "9273",
    plot:
      "Ace Ventura, Pet Detective, returns from a spiritual quest to investigate the disappearance of a rare white bat, the sacred animal of a tribe in Africa.",
    genres: [
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Steve Oedekerk",
      },
    ],
    imdbRating: 6.3,
    title: "Ace Ventura: When Nature Calls",
    released: "1995-11-10",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/wcinCf1ov2D6M3P7BBZkzQFOiIb.jpg",
  },
  {
    actors: [
      {
        name: "Wesley Snipes",
      },
      {
        name: "Robert Blake",
      },
      {
        name: "Woody Harrelson",
      },
      {
        name: "Jennifer Lopez",
      },
    ],
    tmdbId: "11517",
    plot:
      "A vengeful New York transit cop decides to steal a trainload of subway fares; his foster brother, a fellow cop, tries to protect him.",
    genres: [
      {
        name: "Crime",
      },
      {
        name: "Comedy",
      },
      {
        name: "Thriller",
      },
      {
        name: "Drama",
      },
      {
        name: "Action",
      },
    ],
    directors: [
      {
        name: "Joseph Ruben",
      },
    ],
    imdbRating: 5.6,
    title: "Money Train",
    released: "1995-11-22",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/jWBDz6Mf9aQVBiUS76JQsEhvoJl.jpg",
  },
  {
    actors: [
      {
        name: "Danny DeVito",
      },
      {
        name: "Gene Hackman",
      },
      {
        name: "Rene Russo",
      },
      {
        name: "John Travolta",
      },
    ],
    tmdbId: "8012",
    plot:
      "A mobster travels to Hollywood to collect a debt and discovers that the movie business is much the same as his current job.",
    genres: [
      {
        name: "Thriller",
      },
      {
        name: "Crime",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Barry Sonnenfeld",
      },
    ],
    imdbRating: 6.9,
    title: "Get Shorty",
    released: "1995-10-20",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/5XSVAyHmTCFOWaqEQ0LUHh3yssB.jpg",
  },
  {
    actors: [
      {
        name: "Sigourney Weaver",
      },
      {
        name: "Holly Hunter",
      },
      {
        name: "Dermot Mulroney",
      },
      {
        name: "William McNamara",
      },
    ],
    tmdbId: "1710",
    plot:
      "An agoraphobic psychologist and a female detective must work together to take down a serial killer who copies serial killers from the past.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Horror",
      },
      {
        name: "Mystery",
      },
      {
        name: "Thriller",
      },
      {
        name: "Crime",
      },
    ],
    directors: [
      {
        name: "Jon Amiel",
      },
    ],
    imdbRating: 6.6,
    title: "Copycat",
    released: "1995-10-27",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/sch1NNy1q6O50qaUG0MqoU8z9GD.jpg",
  },
  {
    actors: [
      {
        name: "Sylvester Stallone",
      },
      {
        name: "Anatoli Davydov",
      },
      {
        name: "Antonio Banderas",
      },
      {
        name: "Julianne Moore",
      },
    ],
    tmdbId: "9691",
    plot:
      "Professional hit-man Robert Rath wants to fulfill a few more contracts before retiring but unscrupulous ambitious newcomer hit-man Miguel Bain keeps killing Rath's targets.",
    genres: [
      {
        name: "Action",
      },
      {
        name: "Crime",
      },
      {
        name: "Thriller",
      },
    ],
    directors: [
      {
        name: "Richard Donner",
      },
    ],
    imdbRating: 6.3,
    title: "Assassins",
    released: "1995-10-06",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/5Ldj3h0ReTsKlKLyLxaD3mW2ZIQ.jpg",
  },
  {
    actors: [
      {
        name: "Mary Steenburgen",
      },
      {
        name: "Jeff Goldblum",
      },
      {
        name: "Lance Henriksen",
      },
      {
        name: "Sean Patrick Flanery",
      },
    ],
    tmdbId: "12665",
    plot:
      "A young bald albino boy with unique powers shakes up the rural community he lives in.",
    genres: [
      {
        name: "Sci-Fi",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Victor Salva",
      },
    ],
    imdbRating: 6.5,
    title: "Powder",
    released: "1995-10-27",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/kImKATjY4EsK5MDgrmpJdGbQEbq.jpg",
  },
  {
    actors: [
      {
        name: "Nicolas Cage",
      },
      {
        name: "Elisabeth Shue",
      },
      {
        name: "Julian Sands",
      },
      {
        name: "Richard Lewis",
      },
    ],
    tmdbId: "451",
    plot:
      "Ben Sanderson, an alcoholic Hollywood screenwriter who lost everything because of his drinking, arrives in Las Vegas to drink himself to death. There, he meets and forms an uneasy friendship and non-interference pact with prostitute Sera.",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Mike Figgis",
      },
    ],
    imdbRating: 7.6,
    title: "Leaving Las Vegas",
    released: "1996-02-09",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/etUYWIg81fFkXRZKMAOOEXrdcp9.jpg",
  },
  {
    actors: [
      {
        name: "Irène Jacob",
      },
      {
        name: "Laurence Fishburne",
      },
      {
        name: "Kenneth Branagh",
      },
      {
        name: "Nathaniel Parker",
      },
    ],
    tmdbId: "16420",
    plot:
      "The evil Iago pretends to be friend of Othello in order to manipulate him to serve his own end in the film version of this Shakespeare classic.",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Oliver Parker",
      },
    ],
    imdbRating: 7,
    title: "Othello",
    released: "1996-01-19",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/nNP3FDHUIyztw5eq5AejZKzqXbz.jpg",
  },
  {
    actors: [
      {
        name: "Melanie Griffith",
      },
      {
        name: "Thora Birch",
      },
      {
        name: "Rosie O'Donnell",
      },
      {
        name: "Christina Ricci",
      },
    ],
    tmdbId: "9263",
    plot:
      "Four 12-year-old girls grow up together during an eventful small-town summer in 1970.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Children",
      },
    ],
    directors: [
      {
        name: "Lesli Linka Glatter",
      },
    ],
    imdbRating: 6.7,
    title: "Now and Then",
    released: "1995-10-20",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/yQ8xP1WOfatqgUp4e3X8n73itJc.jpg",
  },
  {
    actors: [
      {
        name: "Amanda Root",
      },
      {
        name: "Susan Fleetwood",
      },
      {
        name: "Ciarán Hinds",
      },
      {
        name: "Corin Redgrave",
      },
    ],
    tmdbId: "17015",
    plot:
      "Eight years earlier, Anne Elliot, the daughter of a financially troubled aristocratic family, was persuaded to break off her engagement to Frederick Wentworth, a young seaman, who, though ...",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Roger Michell",
      },
    ],
    imdbRating: 7.7,
    title: "Persuasion",
    released: "1995-09-27",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/tYOFCtgLb4hfuwhXKBWwAobWhwS.jpg",
  },
  {
    actors: [
      {
        name: "Ron Perlman",
      },
      {
        name: "Judith Vittet",
      },
      {
        name: "Daniel Emilfork",
      },
      {
        name: "Dominique Pinon",
      },
    ],
    tmdbId: "902",
    plot:
      "A scientist in a surrealist society kidnaps children to steal their dreams, hoping that they slow his aging process.",
    genres: [
      {
        name: "Adventure",
      },
      {
        name: "Drama",
      },
      {
        name: "Fantasy",
      },
      {
        name: "Mystery",
      },
      {
        name: "Sci-Fi",
      },
    ],
    directors: [
      {
        name: "Marc Caro",
      },
      {
        name: " Jean-Pierre Jeunet",
      },
    ],
    imdbRating: 7.7,
    title: "City of Lost Children, The (Cité des enfants perdus, La)",
    released: "1995-12-15",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/xQrp6wxaNMXVd259235d1X0LBsw.jpg",
  },
  {
    actors: [
      {
        name: "Li Gong",
      },
      {
        name: "Wang Xiaoxiao",
      },
      {
        name: "Baotian Li",
      },
      {
        name: "Xuejian Li",
      },
    ],
    tmdbId: "37557",
    plot:
      "A provincial boy related to a Shanghai crime family is recruited by his uncle into cosmopolitan Shanghai in the 1930s to be a servant to a ganglord's mistress.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Crime",
      },
    ],
    directors: [
      {
        name: "Yimou Zhang",
      },
    ],
    imdbRating: 7.2,
    title: "Shanghai Triad (Yao a yao yao dao waipo qiao)",
    released: "1995-12-22",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/6mexZlP0XhcXpK7jOwTfcCF9jOT.jpg",
  },
  {
    actors: [
      {
        name: "Michelle Pfeiffer",
      },
      {
        name: "Robin Bartlett",
      },
      {
        name: "George Dzundza",
      },
      {
        name: "Courtney B. Vance",
      },
    ],
    tmdbId: "9909",
    plot:
      "An ex-Marine turned teacher struggles to connect with her students in an inner city school.",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "John N. Smith",
      },
    ],
    imdbRating: 6.4,
    title: "Dangerous Minds",
    released: "1995-08-11",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/y2iKziYm1rG5AWfL3el7HgxhoIp.jpg",
  },
  {
    actors: [
      {
        name: "Bruce Willis",
      },
      {
        name: "Jon Seda",
      },
      {
        name: "Michael Chance",
      },
      {
        name: "Joseph Melito",
      },
    ],
    tmdbId: "63",
    plot:
      "In a future world devastated by disease, a convict is sent back in time to gather information about the man-made virus that wiped out most of the human population on the planet.",
    genres: [
      {
        name: "Mystery",
      },
      {
        name: "Sci-Fi",
      },
      {
        name: "Thriller",
      },
    ],
    directors: [
      {
        name: "Terry Gilliam",
      },
    ],
    imdbRating: 8.1,
    title: "Twelve Monkeys (a.k.a. 12 Monkeys)",
    released: "1996-01-05",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/170VKibfqMR1k0eaR2pIj830MgW.jpg",
  },
  {
    actors: [
      {
        name: "Hugo Weaving",
      },
      {
        name: "Christine Cavanaugh",
      },
      {
        name: "Danny Mann",
      },
      {
        name: "Miriam Margolyes",
      },
    ],
    tmdbId: "9598",
    plot:
      "Babe, a pig raised by sheepdogs, learns to herd sheep with a little help from Farmer Hoggett.",
    genres: [
      {
        name: "Children",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Chris Noonan",
      },
    ],
    imdbRating: 6.8,
    title: "Babe",
    released: "1995-08-04",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/zKuQMtnbVTz9DsOnOJmlW71v4qH.jpg",
  },
  {
    actors: [
      {
        name: "Steven Waddington",
      },
      {
        name: "Emma Thompson",
      },
      {
        name: "Samuel West",
      },
      {
        name: "Jonathan Pryce",
      },
    ],
    tmdbId: "47018",
    plot:
      "The platonic relationship between artist Dora Carrington and writer Lytton Strachey in the early 20th century.",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Christopher Hampton",
      },
    ],
    imdbRating: 6.9,
    title: "Carrington",
    released: "1995-11-10",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/8NmeBTkC4UQa8XT2GGsBN2R8Bqo.jpg",
  },
  {
    actors: [
      {
        name: "Susan Sarandon",
      },
      {
        name: "Raymond J. Barry",
      },
      {
        name: "Robert Prosky",
      },
      {
        name: "Sean Penn",
      },
    ],
    tmdbId: "687",
    plot:
      "A nun, while comforting a convicted killer on death row, empathizes with both the killer and his victim's families.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Crime",
      },
    ],
    directors: [
      {
        name: "Tim Robbins",
      },
    ],
    imdbRating: 7.6,
    title: "Dead Man Walking",
    released: "1996-02-02",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/wQmmJi5ypfHH2boXrQBmsep7qb2.jpg",
  },
  {
    actors: [
      {
        name: "Victor Steinbach",
      },
      {
        name: "Peter Reznick",
      },
      {
        name: "John McDonough",
      },
      {
        name: "Avi Hoffman",
      },
    ],
    tmdbId: "139405",
    plot:
      "A young Russian boy, Thomas Minton, travels to New York as a passenger on a Russian freighter. Close to Ellis Island he gets off and thus starts his journey to America the same way as all ...",
    genres: [
      {
        name: "IMAX",
      },
      {
        name: "Documentary",
      },
    ],
    directors: [
      {
        name: "Stephen Low",
      },
    ],
    imdbRating: 6.6,
    title: "Across the Sea of Time",
    released: "1995-10-20",
    thumbnail: "null",
  },
  {
    actors: [
      {
        name: "Kirstie Alley",
      },
      {
        name: "Steve Guttenberg",
      },
      {
        name: "Mary-Kate Olsen",
      },
      {
        name: "Ashley Olsen",
      },
    ],
    tmdbId: "33689",
    plot:
      "Alyssa (a rich girl) and Amanda (an orphan) are two little girls who are identical, but complete strangers, that accidentally meet one day. In an attempt to stop Alyssa's father from ...",
    genres: [
      {
        name: "Comedy",
      },
      {
        name: "Children",
      },
    ],
    directors: [
      {
        name: "Andy Tennant",
      },
    ],
    imdbRating: 5.7,
    title: "It Takes Two",
    released: "1995-11-17",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/hD6UwR1KrzY7yX4ENjeDDJkl0h5.jpg",
  },
  {
    actors: [
      {
        name: "Alicia Silverstone",
      },
      {
        name: "Paul Rudd",
      },
      {
        name: "Brittany Murphy",
      },
      {
        name: "Stacey Dash",
      },
    ],
    tmdbId: "9603",
    plot:
      "A rich high school student tries to boost a new pupil's popularity, but reckons without affairs of the heart getting in the way.",
    genres: [
      {
        name: "Comedy",
      },
      {
        name: "Romance",
      },
    ],
    directors: [
      {
        name: "Amy Heckerling",
      },
    ],
    imdbRating: 6.8,
    title: "Clueless",
    released: "1995-07-19",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/71RW4lkES2Dt7vSLSXvekGYNskG.jpg",
  },
  {
    actors: [
      {
        name: "James Earl Jones",
      },
      {
        name: "Vusi Kunene",
      },
      {
        name: "Richard Harris",
      },
      {
        name: "Charles S. Dutton",
      },
    ],
    tmdbId: "34615",
    plot:
      "A South-African preacher goes to search for his wayward son who has committed a crime in the big city.",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Darrell Roodt",
      },
    ],
    imdbRating: 6.9,
    title: "Cry, the Beloved Country",
    released: "1995-12-15",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/kGPsBswFOCjiGzXq4OZwzEAAODa.jpg",
  },
  {
    actors: [
      {
        name: "Ian McKellen",
      },
      {
        name: "Jim Broadbent",
      },
      {
        name: "Annette Bening",
      },
      {
        name: "Robert Downey Jr.",
      },
    ],
    tmdbId: "31174",
    plot:
      "The classic Shakespearean play about a murderously scheming king staged in an alternative fascist England setting.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "War",
      },
    ],
    directors: [
      {
        name: "Richard Loncraine",
      },
    ],
    imdbRating: 7.5,
    title: "Richard III",
    released: "1995-12-29",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/zPRZUNzy7ywbqpnzfXW05JoGsFG.jpg",
  },
  {
    actors: [
      {
        name: "Larenz Tate",
      },
      {
        name: "Freddy Rodríguez",
      },
      {
        name: "Chris Tucker",
      },
      {
        name: "Keith David",
      },
    ],
    tmdbId: "11443",
    plot:
      "A Vietnam vet adjusts to life after the war while trying to support his family, but the chance of a better life may involve crime and bloodshed.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Action",
      },
      {
        name: "Crime",
      },
    ],
    directors: [
      {
        name: "Albert Hughes",
      },
      {
        name: " Allen Hughes",
      },
    ],
    imdbRating: 6.8,
    title: "Dead Presidents",
    released: "1995-10-06",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/eGfsSXizR11tTHVo0kuOOFPAxZt.jpg",
  },
  {
    actors: [
      {
        name: "Sam Neill",
      },
      {
        name: "David Thewlis",
      },
      {
        name: "Robert Downey Jr.",
      },
      {
        name: "Polly Walker",
      },
    ],
    tmdbId: "35196",
    plot:
      "The exiled royal physician to King Charles II devotes himself to helping Londoners suffering from the plague, and in the process falls in love with an equally poor woman.",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Michael Hoffman",
      },
    ],
    imdbRating: 6.7,
    title: "Restoration",
    released: "1996-02-02",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/pIC5x5ure6YIZH820rAHS7Tysg8.jpg",
  },
  {
    actors: [
      {
        name: "Christopher Lambert",
      },
      {
        name: "Linden Ashby",
      },
      {
        name: "Robin Shou",
      },
      {
        name: "Cary-Hiroyuki Tagawa",
      },
    ],
    tmdbId: "9312",
    plot:
      "Three unknowing martial artists are summoned to a mysterious island to compete in a tournament whose outcome will decide the fate of the world.",
    genres: [
      {
        name: "Adventure",
      },
      {
        name: "Action",
      },
      {
        name: "Fantasy",
      },
    ],
    directors: [
      {
        name: "Paul W.S. Anderson",
      },
    ],
    imdbRating: 5.8,
    title: "Mortal Kombat",
    released: "1995-08-18",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/fcK7tzSSXMYiMN8E9KlZJL1BYyp.jpg",
  },
  {
    actors: [
      {
        name: "Joaquin Phoenix",
      },
      {
        name: "Matt Dillon",
      },
      {
        name: "Casey Affleck",
      },
      {
        name: "Nicole Kidman",
      },
    ],
    tmdbId: "577",
    plot:
      "Suzanne Stone is an aspiring TV personality who will do anything to be in the spotlight, including enlisting three teenagers to kill her husband.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Thriller",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Gus Van Sant",
      },
    ],
    imdbRating: 6.8,
    title: "To Die For",
    released: "1995-10-06",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/c3ZBLDzc3OvZoUResg2UN79gnYa.jpg",
  },
  {
    actors: [
      {
        name: "Adam Baldwin",
      },
      {
        name: "Sara Craddick",
      },
      {
        name: "Kate Capshaw",
      },
      {
        name: "Kaelynn Craddick",
      },
    ],
    tmdbId: "11861",
    plot:
      "Bride-to-be Finn Dodd hears tales of romance and sorrow from her elders as they construct a quilt.",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Jocelyn Moorhouse",
      },
    ],
    imdbRating: 6.2,
    title: "How to Make an American Quilt",
    released: "1995-10-06",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/vwYRaERccwXWCYrTzeWRZRarJOo.jpg",
  },
  {
    actors: [
      {
        name: "Morgan Freeman",
      },
      {
        name: "Brad Pitt",
      },
      {
        name: "Andrew Kevin Walker",
      },
      {
        name: "Daniel Zacapa",
      },
    ],
    tmdbId: "807",
    plot:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his modus operandi.",
    genres: [
      {
        name: "Mystery",
      },
      {
        name: "Thriller",
      },
    ],
    directors: [
      {
        name: "David Fincher",
      },
    ],
    imdbRating: 8.6,
    title: "Seven (a.k.a. Se7en)",
    released: "1995-09-22",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/6yoghtyTpznpBik8EngEmJskVUO.jpg",
  },
  {
    actors: [
      {
        name: "Mel Gibson",
      },
      {
        name: "Irene Bedard",
      },
      {
        name: "David Ogden Stiers",
      },
      {
        name: "Judy Kuhn",
      },
    ],
    tmdbId: "10530",
    plot:
      "An English soldier and the daughter of an Algonquin chief share a romance when English colonists invade seventeenth-century Virginia.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Musical",
      },
      {
        name: "Animation",
      },
      {
        name: "Children",
      },
      {
        name: "Romance",
      },
    ],
    directors: [
      {
        name: " Eric Goldberg",
      },
      {
        name: "Mike Gabriel",
      },
    ],
    imdbRating: 6.6,
    title: "Pocahontas",
    released: "1995-06-23",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/kZ1ft0QZ4e3zDUPMBftEkwI9ftd.jpg",
  },
  {
    actors: [
      {
        name: "Henry Czerny",
      },
      {
        name: "Rachael Crawford",
      },
      {
        name: "David Fox",
      },
      {
        name: "Pascale Bussières",
      },
    ],
    tmdbId: "8391",
    plot:
      "An uptight and conservative woman, working on tenure as a literacy professor at a large urban university, finds herself strangely attracted to a free-spirited, liberal woman who works at a local carnival that comes to town.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Romance",
      },
    ],
    directors: [
      {
        name: "Patricia Rozema",
      },
    ],
    imdbRating: 6.8,
    title: "When Night Is Falling",
    released: "1995-11-17",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/f9edMkT6bLXVvZICn47ARnQ1Iu5.jpg",
  },
  {
    actors: [
      {
        name: "Gabriel Byrne",
      },
      {
        name: "Stephen Baldwin",
      },
      {
        name: "Benicio Del Toro",
      },
      {
        name: "Kevin Pollak",
      },
    ],
    tmdbId: "629",
    plot:
      "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which begin when five criminals meet at a seemingly random police lineup.",
    genres: [
      {
        name: "Thriller",
      },
      {
        name: "Mystery",
      },
      {
        name: "Crime",
      },
    ],
    directors: [
      {
        name: "Bryan Singer",
      },
    ],
    imdbRating: 8.6,
    title: "Usual Suspects, The",
    released: "1995-09-15",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/bUPmtQzrRhzqYySeiMpv7GurAfm.jpg",
  },
  {
    actors: [
      {
        name: "Rene Ceballos",
      },
      {
        name: "Elie Chaib",
      },
      {
        name: "George De La Pena",
      },
      {
        name: "Pamela Blair",
      },
    ],
    tmdbId: "11448",
    plot:
      "When he discovers his adopted son is a genius, a New York sportswriter seeks out the boy's birth mother: a prostitute.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Comedy",
      },
      {
        name: "Romance",
      },
    ],
    directors: [
      {
        name: "Woody Allen",
      },
    ],
    imdbRating: 7.1,
    title: "Mighty Aphrodite",
    released: "1995-11-10",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/m0MZabFBNtMuFn3oNcq45M1Jws3.jpg",
  },
  {
    actors: [
      {
        name: "Enrico Lo Verso",
      },
      {
        name: "Carmelo Di Mazzarelli",
      },
      {
        name: "Piro Milkani",
      },
      {
        name: "Michele Placido",
      },
    ],
    tmdbId: "49133",
    plot:
      "Two Italian racketeers come to Albania just after the fall of the communists to set up a fictive firm and pocket the grants. They need a stooge. They choose an old one in a jail : Spiro. ...",
    genres: [
      {
        name: "Adventure",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Gianni Amelio",
      },
    ],
    imdbRating: 7.6,
    title: "Lamerica",
    released: "1995-10-04",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/nnLpA4mqb3gvhNJQZ00cOyBmeq3.jpg",
  },
  {
    actors: [
      {
        name: "Olivia d'Abo",
      },
      {
        name: "Jay O. Sanders",
      },
      {
        name: "Steve Guttenberg",
      },
      {
        name: "John Terry",
      },
    ],
    tmdbId: "26441",
    plot:
      "Another Disney underdog sports team of misfit kids (soccer this time) learns to play a new sport and become champions, while building self-esteem, making friends and solving a variety of ...",
    genres: [
      {
        name: "Children",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Holly Goldberg Sloan",
      },
    ],
    imdbRating: 5.4,
    title: "Big Green, The",
    released: "1995-09-29",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/qaNHxJjY7zBzHfkIOoGfBBnLoHr.jpg",
  },
  {
    actors: [
      {
        name: "Jennifer Jason Leigh",
      },
      {
        name: "Max Perlich",
      },
      {
        name: "Mare Winningham",
      },
      {
        name: "Ted Levine",
      },
    ],
    tmdbId: "97406",
    plot:
      "Sadie is desperately looking up to her older sister Georgia who is a famous C&W artist. Sadie wants to be a famous artist like her sister, but is always doing everything wrong. Her ...",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Ulu Grosbard",
      },
    ],
    imdbRating: 6.4,
    title: "Georgia",
    released: "1995-12-08",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/uXjfK404xo7SiVlFcAoRyaFqXR4.jpg",
  },
  {
    actors: [
      {
        name: "Holly Hunter",
      },
      {
        name: "Charles Durning",
      },
      {
        name: "Robert Downey Jr.",
      },
      {
        name: "Anne Bancroft",
      },
    ],
    tmdbId: "9089",
    plot:
      "After losing her job, making out with her soon-to-be former boss and finding out that her daughter plans to spend Thanksgiving with her boyfriend, Claudia Larson faces spending the holiday with her family.",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Jodie Foster",
      },
    ],
    imdbRating: 6.6,
    title: "Home for the Holidays",
    released: "1995-11-03",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/a8MslR6deQQVe8JR542XDSwHiPB.jpg",
  },
  {
    actors: [
      {
        name: "Philippe Noiret",
      },
      {
        name: "Renato Scarpa",
      },
      {
        name: "Maria Grazia Cucinotta",
      },
      {
        name: "Massimo Troisi",
      },
    ],
    tmdbId: "11010",
    plot:
      "Simple Italian postman learns to love poetry while delivering mail to a famous poet; he uses this to woo local beauty Beatrice.",
    genres: [
      {
        name: "Comedy",
      },
      {
        name: "Romance",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Michael Radford",
      },
    ],
    imdbRating: 7.8,
    title: "Postman, The (Postino, Il)",
    released: "1996-03-22",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/cUaCpjVDefYShKyLmkcDsiPaBHn.jpg",
  },
  {
    actors: [
      {
        name: "Patrick Goyette",
      },
      {
        name: "Jean-Louis Millette",
      },
      {
        name: "Kristin Scott Thomas",
      },
      {
        name: "Lothaire Bluteau",
      },
    ],
    tmdbId: "99040",
    plot:
      "The year is 1952, in Quebec City. Rachel, 16, unmarried, and pregnant, works in the church. Filled with shame, she unburdens her guilt to a young priest, under the confidentiality of the ...",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Mystery",
      },
    ],
    directors: [
      {
        name: "Robert Lepage",
      },
    ],
    imdbRating: 7.6,
    title: "Confessional, The (Confessionnal, Le)",
    released: "1996-08-16",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/9ApR0PwQdlnvc76NmlbUWkeAK9i.jpg",
  },
  {
    actors: [
      {
        name: "Hal Scardino",
      },
      {
        name: "Litefoot",
      },
      {
        name: "Lindsay Crouse",
      },
      {
        name: "Richard Jenkins",
      },
    ],
    tmdbId: "11359",
    plot:
      "On his ninth birthday a boy receives many presents. Two of them first seem to be less important: an old cupboard from his brother and a little Indian figure made of plastic from his best ...",
    genres: [
      {
        name: "Fantasy",
      },
      {
        name: "Adventure",
      },
      {
        name: "Children",
      },
    ],
    directors: [
      {
        name: "Frank Oz",
      },
    ],
    imdbRating: 5.9,
    title: "Indian in the Cupboard, The",
    released: "1995-07-14",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/6jxwjs285L16lO3XAX7FzfQpREb.jpg",
  },
  {
    actors: [
      {
        name: "Sally Field",
      },
      {
        name: "Ed Harris",
      },
      {
        name: "Olivia Burnette",
      },
      {
        name: "Alexandra Kyle",
      },
    ],
    tmdbId: "17182",
    plot:
      "When the courts fail to keep behind bars the man who raped and murdered her daughter, a woman seeks her own form of justice.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Thriller",
      },
    ],
    directors: [
      {
        name: "John Schlesinger",
      },
    ],
    imdbRating: 6.1,
    title: "Eye for an Eye",
    released: "1996-01-12",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/y2lZSdJ1o0VvLegTw3ad6KFtxra.jpg",
  },
  {
    actors: [
      {
        name: "Jay Thomas",
      },
      {
        name: "Glenne Headly",
      },
      {
        name: "Olympia Dukakis",
      },
      {
        name: "Richard Dreyfuss",
      },
    ],
    tmdbId: "2054",
    plot:
      "A frustrated composer finds fulfillment as a high school music teacher.",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Stephen Herek",
      },
    ],
    imdbRating: 7.3,
    title: "Mr. Holland's Opus",
    released: "1996-01-19",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/kBmwWeSN3ajnYHZ3dSybEobxEPI.jpg",
  },
  {
    actors: [
      {
        name: "Chris Spencer",
      },
      {
        name: "Tracey Cherelle Jones",
      },
      {
        name: "Marlon Wayans",
      },
      {
        name: "Shawn Wayans",
      },
    ],
    tmdbId: "10607",
    plot:
      "Don't Be a Menace to South Central While Drinking your Juice in the Hood is a parody of several U.S. films about being in the 'Hood', for instance Boyz n the Hood, South Central, ...",
    genres: [
      {
        name: "Comedy",
      },
      {
        name: "Crime",
      },
    ],
    directors: [
      {
        name: "Paris Barclay",
      },
    ],
    imdbRating: 6.6,
    title:
      "Don't Be a Menace to South Central While Drinking Your Juice in the Hood",
    released: "1996-01-12",
    thumbnail: "https://image.tmdb.org/t/p/w154/HZQBF7JDd2e9p4rPSbSHuWHaCC.jpg",
  },
  {
    actors: [
      {
        name: "Denis Leary",
      },
      {
        name: "Sandra Bullock",
      },
      {
        name: "Stephen Dillane",
      },
      {
        name: "Yaphet Kotto",
      },
    ],
    tmdbId: "19760",
    plot:
      "Frank O'Brien, a petty thief, and his 7-year-long girlfriend Roz want to put an end to their unsteady lifestyle and just do that _last_ job, which involves stealing a valuable painting. ...",
    genres: [
      {
        name: "Comedy",
      },
      {
        name: "Romance",
      },
    ],
    directors: [
      {
        name: "Bill Bennett",
      },
    ],
    imdbRating: 5.2,
    title: "Two if by Sea",
    released: "1996-01-12",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/kvQl6sJyplWRQ0BGp0E8kBUQKO8.jpg",
  },
  {
    actors: [
      {
        name: "William Atherton",
      },
      {
        name: "Denise Dowse",
      },
      {
        name: "Dara Tomanovich",
      },
      {
        name: "Kevin West",
      },
    ],
    tmdbId: "9536",
    plot:
      "Moronic best friends get themselves locked inside the Bio-Dome, a science experiment, along with a group of environmental scientists for one year.",
    genres: [
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Jason Bloom",
      },
    ],
    imdbRating: 4.3,
    title: "Bio-Dome",
    released: "1996-01-12",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/pjSkGZAvksrbO6tGain8PJ3rfC7.jpg",
  },
  {
    actors: [
      {
        name: "Patrick Bergin",
      },
      {
        name: "Matt Frewer",
      },
      {
        name: "Ely Pouget",
      },
      {
        name: "Austin O'Brien",
      },
    ],
    tmdbId: "11525",
    plot:
      "Jobe is resuscitated by Jonathan Walker. He wants Jobe to create a special computer chip that would connect all the computers in the world into one network, which Walker would control and ...",
    genres: [
      {
        name: "Thriller",
      },
      {
        name: "Sci-Fi",
      },
      {
        name: "Action",
      },
    ],
    directors: [
      {
        name: "Farhad Mann",
      },
    ],
    imdbRating: 2.4,
    title: "Lawnmower Man 2: Beyond Cyberspace",
    released: "1996-01-12",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/2Zp26DfI6pTqiyHUkL7bMjv28tG.jpg",
  },
  {
    actors: [
      {
        name: "Ticky Holgado",
      },
      {
        name: "Alain Chabat",
      },
      {
        name: "Josiane Balasko",
      },
      {
        name: "Victoria Abril",
      },
    ],
    tmdbId: "4482",
    plot:
      "After learning of her husband's infidelities, a housewife invites an itinerant lesbian to move in with them. None of their lives will ever be the same again.",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Josiane Balasko",
      },
    ],
    imdbRating: 6.4,
    title: "French Twist (Gazon maudit)",
    released: "1996-01-19",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/xlLnHizshGBwMiNrnop2kg2nYzE.jpg",
  },
  {
    actors: [
      {
        name: "Tommy 'Tiny' Lister",
      },
      {
        name: "Nia Long",
      },
      {
        name: "Chris Tucker",
      },
      {
        name: "Ice Cube",
      },
    ],
    tmdbId: "10634",
    plot:
      "Two homies, Smokey and Craig, smoke a dope dealer's weed and try to figure a way to get the $200 they owe to the dealer by ten p.m. that same night. In that time, they smoke more weed, get jacked, and they get shot at in a drive-by.",
    genres: [
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "F. Gary Gray",
      },
    ],
    imdbRating: 7.3,
    title: "Friday",
    released: "1995-04-26",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/eqD0jCDIEJ65CmyG63Jaay6bHDp.jpg",
  },
  {
    actors: [
      {
        name: "George Clooney",
      },
      {
        name: "Quentin Tarantino",
      },
      {
        name: "Harvey Keitel",
      },
      {
        name: "Juliette Lewis",
      },
    ],
    tmdbId: "755",
    plot:
      "Two criminals and their hostages unknowingly seek temporary refuge in an establishment populated by vampires, with chaotic results.",
    genres: [
      {
        name: "Thriller",
      },
      {
        name: "Action",
      },
      {
        name: "Comedy",
      },
      {
        name: "Horror",
      },
    ],
    directors: [
      {
        name: "Robert Rodriguez",
      },
    ],
    imdbRating: 7.3,
    title: "From Dusk Till Dawn",
    released: "1996-01-19",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/sV3kIAmvJ9tPz4Lq5fuf9LLMxte.jpg",
  },
  {
    actors: [
      {
        name: "William Baldwin",
      },
      {
        name: "Christopher McDonald",
      },
      {
        name: "Steven Berkoff",
      },
      {
        name: "Cindy Crawford",
      },
    ],
    tmdbId: "11859",
    plot:
      "Max Kirkpatrick is a cop who protects Kate McQuean, a civil law attorney, from a renegade KGB team out to terminate her.",
    genres: [
      {
        name: "Action",
      },
    ],
    directors: [
      {
        name: "Andrew Sipes",
      },
    ],
    imdbRating: 4.1,
    title: "Fair Game",
    released: "1995-11-03",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/qcxsWOzBaF7MZNNThtRQWQ9Wrdk.jpg",
  },
  {
    actors: [
      {
        name: "Josh Hamilton",
      },
      {
        name: "Jonathan Baumbach",
      },
      {
        name: "Samuel Gould",
      },
      {
        name: "Catherine Kellner",
      },
    ],
    tmdbId: "28387",
    plot:
      "Following graduation, a handful of college students do nothing and talk about it wittily.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Noah Baumbach",
      },
    ],
    imdbRating: 7.1,
    title: "Kicking and Screaming",
    released: "1995-10-06",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/186brkmaBmopqcM0dPs71tj9BfM.jpg",
  },
  {
    actors: [
      {
        name: "Jean-Paul Belmondo",
      },
      {
        name: "Michel Boujenah",
      },
      {
        name: "Alessandra Martines",
      },
      {
        name: "Salomé Lelouch",
      },
    ],
    tmdbId: "48750",
    plot:
      "Henri Fortin is poor and iliterate former boxer. Ziman is rich Jewish lawyer from Paris. During WWII they meet when Fortin agrees to drive Ziman's family to Switzerland. Intrigued by Victor...",
    genres: [
      {
        name: "War",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Claude Lelouch",
      },
    ],
    imdbRating: 7.5,
    title: "Misérables, Les",
    released: "1995-11-03",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/ct1T56BbeE60CsoFhUB4Qmq8kkf.jpg",
  },
  {
    actors: [
      {
        name: "Christian Slater",
      },
      {
        name: "Mary Stuart Masterson",
      },
      {
        name: "Josh Brolin",
      },
      {
        name: "Pamela Adlon",
      },
    ],
    tmdbId: "20927",
    plot:
      "Romantic drama about a young career girl who is swept off her feet by a shy florist, who fell in love with her after one glimpse through a shadowy window.",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Michael Goldenberg",
      },
    ],
    imdbRating: 6,
    title: "Bed of Roses",
    released: "1996-01-26",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/nLRio5v1QHW0Dw4VLmMhC1FZEJc.jpg",
  },
  {
    actors: [
      {
        name: "Peter Weller",
      },
      {
        name: "Andrew Lauer",
      },
      {
        name: "Jennifer Rubin",
      },
      {
        name: "Roy Dupuis",
      },
    ],
    tmdbId: "9102",
    plot:
      "(SIRIUS 6B, Year 2078) On a distant mining planet ravaged by a decade of war, scientists have created the perfect weapon: a blade-wielding, self-replicating race of killing devices known as...",
    genres: [
      {
        name: "Action",
      },
      {
        name: "Sci-Fi",
      },
      {
        name: "Thriller",
      },
    ],
    directors: [
      {
        name: "Christian Duguay",
      },
    ],
    imdbRating: 6.4,
    title: "Screamers",
    released: "1996-01-26",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/oDGJGbzBkNXhCZfZMR6gjtKkKkI.jpg",
  },
  {
    actors: [
      {
        name: "Edith Boulogne",
      },
      {
        name: "Christian Päffgen",
      },
      {
        name: "Tina Aumont",
      },
      {
        name: "Nico",
      },
    ],
    tmdbId: "124626",
    plot:
      "A look into the many lives of Christa Päffgen, otherwise known as Nico; from cutie German mädchen to the first of the supermodels, to glamorous diva of the Velvet Underground, to cult item,...",
    genres: [
      {
        name: "Documentary",
      },
    ],
    directors: [
      {
        name: "Susanne Ofteringer",
      },
    ],
    imdbRating: 7.3,
    title: "Nico Icon",
    released: "1995-11-16",
    thumbnail: "null",
  },
  {
    actors: [
      {
        name: "Jack Nicholson",
      },
      {
        name: "Anjelica Huston",
      },
      {
        name: "David Morse",
      },
      {
        name: "Robin Wright",
      },
    ],
    tmdbId: "27526",
    plot:
      "Freddie Gale is a seedy jeweler who has sworn to kill the drunk driver who killed his little girl.",
    genres: [
      {
        name: "Action",
      },
      {
        name: "Crime",
      },
      {
        name: "Drama",
      },
      {
        name: "Thriller",
      },
    ],
    directors: [
      {
        name: "Sean Penn",
      },
    ],
    imdbRating: 6.4,
    title: "Crossing Guard, The",
    released: "1995-11-16",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/kogaCIIylHmWQo2gJrrdq8Br8b8.jpg",
  },
  {
    actors: [
      {
        name: "Alec Baldwin",
      },
      {
        name: "Demi Moore",
      },
      {
        name: "Anne Heche",
      },
      {
        name: "Joseph Gordon-Levitt",
      },
    ],
    tmdbId: "9623",
    plot:
      "When Annie Laird is selected as a juror in a big Mafia trial, she is forced by someone known as The Teacher to persuade the other jurors to vote not guilty. He threatens to kill her son...",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Thriller",
      },
    ],
    directors: [
      {
        name: "Brian Gibson",
      },
    ],
    imdbRating: 5.6,
    title: "Juror, The",
    released: "1996-02-02",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/i1EXzLNc4c9Xd0xjCmGavb0Hz9k.jpg",
  },
  {
    actors: [
      {
        name: "Anna Borkowska",
      },
      {
        name: "Aida Mohammadkhani",
      },
      {
        name: "Mohsen Kafili",
      },
      {
        name: "Fereshteh Sadre Orafaiy",
      },
    ],
    tmdbId: "46785",
    plot:
      "Several people try to take advantage of a little girl's innocence to hustle money her mom gave to her to buy a goldfish with.",
    genres: [
      {
        name: "Children",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Jafar Panahi",
      },
    ],
    imdbRating: 7.8,
    title: "White Balloon, The (Badkonake sefid)",
    released: "1995-11-27",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/8UDknhokRx4vySTcbVzqAS5PsLM.jpg",
  },
  {
    actors: [
      {
        name: "Andy Garcia",
      },
      {
        name: "Bill Nunn",
      },
      {
        name: "Christopher Lloyd",
      },
      {
        name: "William Forsythe",
      },
    ],
    tmdbId: "400",
    plot:
      "Five different criminals face imminent death after botching a job quite badly.",
    genres: [
      {
        name: "Crime",
      },
      {
        name: "Drama",
      },
      {
        name: "Romance",
      },
    ],
    directors: [
      {
        name: "Gary Fleder",
      },
    ],
    imdbRating: 6.8,
    title: "Things to Do in Denver When You're Dead",
    released: "1995-12-01",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/kATmorfxsxbS0GSKOVJe4qvPLh5.jpg",
  },
  {
    actors: [
      {
        name: "Veerle van Overloop",
      },
      {
        name: "Els Dottermans",
      },
      {
        name: "Dora van der Groen",
      },
      {
        name: "Willeke van Ammelrooy",
      },
    ],
    tmdbId: "880",
    plot:
      "A Dutch matron establishes and, for several generations, oversees a close-knit, matriarchal community where feminism and liberalism thrive.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Marleen Gorris",
      },
    ],
    imdbRating: 7.5,
    title: "Antonia's Line (Antonia)",
    released: "1996-02-02",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/nUCVi6bBIL7LGC61nYaCqikAhIA.jpg",
  },
  {
    actors: [
      {
        name: "Al Freeman Jr.",
      },
      {
        name: "Leon",
      },
      {
        name: "Phylicia Rashad",
      },
      {
        name: "Paula Kelly",
      },
    ],
    tmdbId: "146599",
    plot:
      "A narrator tells the story of his childhood years in a tightly knit Afro-American community in the deep south under racial segregation.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Romance",
      },
    ],
    directors: [
      {
        name: "Tim Reid",
      },
    ],
    imdbRating: 7.3,
    title: "Once Upon a Time... When We Were Colored",
    released: "1996-01-26",
    thumbnail: "null",
  },
  {
    actors: [
      {
        name: "Victoria Foyt",
      },
      {
        name: "Jon Robin Baitz",
      },
      {
        name: "Viveca Lindfors",
      },
      {
        name: "Savannah Smith Boucher",
      },
    ],
    tmdbId: "188588",
    plot:
      "Filmed entirely on location in East Hampton, Long Island, Last Summer in the Hamptons concerns a large theatrical family spending the last weekend of their summer together at the ...",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Henry Jaglom",
      },
    ],
    imdbRating: 6.1,
    title: "Last Summer in the Hamptons",
    released: "1996-09-15",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/qVCkkiAoxh5e1UIKJ4Uo6ILV8qA.jpg",
  },
  {
    actors: [
      {
        name: "Patsy Kensit",
      },
      {
        name: "Kristin Scott Thomas",
      },
      {
        name: "Mark Rylance",
      },
      {
        name: "Jeremy Kemp",
      },
    ],
    tmdbId: "8447",
    plot:
      "In the 1800s a naturalist marries into a family of British country gentry.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Romance",
      },
    ],
    directors: [
      {
        name: "Philip Haas",
      },
    ],
    imdbRating: 7,
    title: "Angels and Insects",
    released: "1996-01-26",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/qScw5w5NTkmcVvRmrfWmQW4JHpe.jpg",
  },
  {
    actors: [
      {
        name: "Jeff Bridges",
      },
      {
        name: "Scott Wolf",
      },
      {
        name: "John Savage",
      },
      {
        name: "Caroline Goodall",
      },
    ],
    tmdbId: "10534",
    plot:
      "Teenage boys discover discipline and camaraderie on an ill-fated sailing voyage.",
    genres: [
      {
        name: "Action",
      },
      {
        name: "Drama",
      },
      {
        name: "Adventure",
      },
    ],
    directors: [
      {
        name: "Ridley Scott",
      },
    ],
    imdbRating: 6.6,
    title: "White Squall",
    released: "1996-02-02",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/5xF4qy44Lvv68glS7eHWH7laTqt.jpg",
  },
  {
    actors: [
      {
        name: "Jason Alexander",
      },
      {
        name: "Faye Dunaway",
      },
      {
        name: "Rupert Everett",
      },
      {
        name: "Eric Lloyd",
      },
    ],
    tmdbId: "17414",
    plot: "Young boy befriends larcenous orangutan in luxury hotel.",
    genres: [
      {
        name: "Comedy",
      },
      {
        name: "Children",
      },
    ],
    directors: [
      {
        name: "Ken Kwapis",
      },
    ],
    imdbRating: 5.2,
    title: "Dunston Checks In",
    released: "1996-01-12",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/kn0iqDYsWN4b6u9zmhQCIZg19yR.jpg",
  },
  {
    actors: [
      {
        name: "Chris Farley",
      },
      {
        name: "Christine Ebersole",
      },
      {
        name: "Tim Matheson",
      },
      {
        name: "David Spade",
      },
    ],
    tmdbId: "13997",
    plot:
      "A gubernatorial candidate hires a wormy special assistant whose only job is to make sure the candidate's well-meaning but incompetent brother doesn't ruin the election.",
    genres: [
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Penelope Spheeris",
      },
    ],
    imdbRating: 6.2,
    title: "Black Sheep",
    released: "1996-02-02",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/bV9SCk4QXCi9p1kdDBiYejcMQwK.jpg",
  },
  {
    actors: [
      {
        name: "Christopher Walken",
      },
      {
        name: "Courtney Chase",
      },
      {
        name: "Charles S. Dutton",
      },
      {
        name: "Johnny Depp",
      },
    ],
    tmdbId: "2086",
    plot:
      "An unimpressive, every-day man is forced into a situation where he is told to kill a politician to save his kidnapped daughter.",
    genres: [
      {
        name: "Action",
      },
      {
        name: "Thriller",
      },
    ],
    directors: [
      {
        name: "John Badham",
      },
    ],
    imdbRating: 6.3,
    title: "Nick of Time",
    released: "1995-11-22",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/A1FJwUVg84sQSjHVz5jVMXQvifJ.jpg",
  },
  {
    actors: [
      {
        name: "Julia Roberts",
      },
      {
        name: "George Cole",
      },
      {
        name: "Michael Gambon",
      },
      {
        name: "John Malkovich",
      },
    ],
    tmdbId: "9095",
    plot:
      "A housemaid falls in love with Dr. Jekyll and his darkly mysterious counterpart, Mr. Hyde.",
    genres: [
      {
        name: "Horror",
      },
      {
        name: "Thriller",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Stephen Frears",
      },
    ],
    imdbRating: 5.8,
    title: "Mary Reilly",
    released: "1996-02-23",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/eAOPWQdwytdRaLK3VXi7JFJFqmj.jpg",
  },
  {
    actors: [
      {
        name: "Eddie Murphy",
      },
      {
        name: "Kadeem Hardison",
      },
      {
        name: "Angela Bassett",
      },
      {
        name: "Allen Payne",
      },
    ],
    tmdbId: "12158",
    plot:
      "Maximillian is the only survivor from a race of vampires on a Caribbean Island, and as a vampire, he must find a mate to keep the line from ending. He knows that a child had been born to a ...",
    genres: [
      {
        name: "Comedy",
      },
      {
        name: "Horror",
      },
      {
        name: "Romance",
      },
    ],
    directors: [
      {
        name: "Wes Craven",
      },
    ],
    imdbRating: 4.5,
    title: "Vampire in Brooklyn",
    released: "1995-10-27",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/i8ZD5LsBjwF45MsZ1nCClpvaOcn.jpg",
  },
  {
    actors: [
      {
        name: "Annabeth Gish",
      },
      {
        name: "Matt Dillon",
      },
      {
        name: "Lauren Holly",
      },
      {
        name: "Noah Emmerich",
      },
    ],
    tmdbId: "9283",
    plot:
      "A piano player at a crossroads in his life returns home to his friends and their own problems with life and love.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Romance",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Ted Demme",
      },
    ],
    imdbRating: 7.2,
    title: "Beautiful Girls",
    released: "1996-02-09",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/sHcx1fBmrtZYvFmUywU0d5cvIFd.jpg",
  },
  {
    actors: [
      {
        name: "John Travolta",
      },
      {
        name: "Christian Slater",
      },
      {
        name: "Samantha Mathis",
      },
      {
        name: "Delroy Lindo",
      },
    ],
    tmdbId: "9208",
    plot:
      "Terrorists steal nuclear warheads from the U.S. military but don't count on a pilot and park ranger spoiling their plans.",
    genres: [
      {
        name: "Adventure",
      },
      {
        name: "Action",
      },
      {
        name: "Thriller",
      },
    ],
    directors: [
      {
        name: "John Woo",
      },
    ],
    imdbRating: 6,
    title: "Broken Arrow",
    released: "1996-02-09",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/iBPMwYYJFvdCBkXrwV75peo5Lz2.jpg",
  },
  {
    actors: [
      {
        name: "Nicholas Farrell",
      },
      {
        name: "Richard Briers",
      },
      {
        name: "Joan Collins",
      },
      {
        name: "Hetta Charnley",
      },
    ],
    tmdbId: "40154",
    plot:
      "Out of work actor Joe volunteers to help try and save his sister's local church for the community by putting on a Christmas production of Hamlet, somewhat against the advice of his agent ...",
    genres: [
      {
        name: "Comedy",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Kenneth Branagh",
      },
    ],
    imdbRating: 7.3,
    title: "In the Bleak Midwinter",
    released: "1996-02-16",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/cl5WtKNYL7porHGCroRTAKCGlTM.jpg",
  },
  {
    actors: [
      {
        name: "Vincent Cassel",
      },
      {
        name: "Abdel Ahmed Ghili",
      },
      {
        name: "Saïd Taghmaoui",
      },
      {
        name: "Hubert Koundé",
      },
    ],
    tmdbId: "406",
    plot:
      "24 hours in the lives of three young men in the French suburbs the day after a violent riot.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Crime",
      },
    ],
    directors: [
      {
        name: "Mathieu Kassovitz",
      },
    ],
    imdbRating: 8.1,
    title: "Hate (Haine, La)",
    released: "1996-02-23",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/bW4tXG8kZ89ZCurPnzDDSzJbeF5.jpg",
  },
  {
    actors: [
      {
        name: "Fraser James",
      },
      {
        name: "Sean Pertwee",
      },
      {
        name: "Jude Law",
      },
      {
        name: "Sadie Frost",
      },
    ],
    tmdbId: "45549",
    plot:
      "You've run out of options, no school, no job. Steal a car, smash a shop with a heavy car and reap the proceeds!. This movie is about underground England. The causes, the benefits, and the result of a life of 'crash and carry'.",
    genres: [
      {
        name: "Thriller",
      },
      {
        name: "Action",
      },
    ],
    directors: [
      {
        name: "Paul W.S. Anderson",
      },
    ],
    imdbRating: 5.4,
    title: "Shopping",
    released: "1996-02-09",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/sE6oLJg2c9Wc9Ra7Yf5j7OArjYk.jpg",
  },
  {
    actors: [
      {
        name: "Nick Broomfield",
      },
      {
        name: "Corinne Bohrer",
      },
      {
        name: "Madam Alex",
      },
      {
        name: "Mike Brambles",
      },
    ],
    tmdbId: "63076",
    plot:
      "A documentary crew from the BBC arrives in L.A. intent on interviewing Heidi Fleiss, a year after her arrest for running a brothel but before her trial. Several months elapse before the ...",
    genres: [
      {
        name: "Documentary",
      },
    ],
    directors: [
      {
        name: "Nick Broomfield",
      },
    ],
    imdbRating: 6.6,
    title: "Heidi Fleiss: Hollywood Madam",
    released: "1996-02-09",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/laPSb9I8TuYslOh1OcgaTByWKnw.jpg",
  },
  {
    actors: [
      {
        name: "Al Pacino",
      },
      {
        name: "John Cusack",
      },
      {
        name: "Bridget Fonda",
      },
      {
        name: "Danny Aiello",
      },
    ],
    tmdbId: "11062",
    plot:
      "The accidental shooting of a boy in New York leads to an investigation by the Deputy Mayor, and unexpectedly far-reaching consequences.",
    genres: [
      {
        name: "Thriller",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Harold Becker",
      },
    ],
    imdbRating: 6.2,
    title: "City Hall",
    released: "1996-02-16",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/g6JjdkmdElHIoNVaEso0BmjRDQT.jpg",
  },
  {
    actors: [
      {
        name: "Owen Wilson",
      },
      {
        name: "Luke Wilson",
      },
      {
        name: "Ned Dowd",
      },
      {
        name: "Shea Fowler",
      },
    ],
    tmdbId: "13685",
    plot:
      "Focusing on a trio of friends and their elaborate plan to pull off a simple robbery and go on the run.",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Crime",
      },
      {
        name: "Comedy",
      },
      {
        name: "Adventure",
      },
    ],
    directors: [
      {
        name: "Wes Anderson",
      },
    ],
    imdbRating: 7.1,
    title: "Bottle Rocket",
    released: "1996-02-21",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/wOPiNYt9V3Cbr9Izeddwj7nU8RT.jpg",
  },
  {
    actors: [
      {
        name: "Dean Stockwell",
      },
      {
        name: "Joan Cusack",
      },
      {
        name: "Bill Pullman",
      },
      {
        name: "Ellen DeGeneres",
      },
    ],
    tmdbId: "47475",
    plot:
      "A single and lonely woman finds the seemingly perfect man to date, but soon regrets it when his deranged and possessive other personality emerges and worst still, she cannot convince anyone else of his Jekyll/Hyde true nature.",
    genres: [
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Nick Castle",
      },
    ],
    imdbRating: 3.7,
    title: "Mr. Wrong",
    released: "1996-02-16",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/yGbPzJ5hib2TFi0Rkb6JH8webaL.jpg",
  },
  {
    actors: [
      {
        name: "Ray Liotta",
      },
      {
        name: "Linda Fiorentino",
      },
      {
        name: "Peter Coyote",
      },
      {
        name: "Christopher McDonald",
      },
    ],
    tmdbId: "2045",
    plot:
      "Unsuccessfully framed for his wife's murder, Dr. David Krane attempts to find the real culprit by utilizing a new drug that allows him to experience the memories of other people first-hand....",
    genres: [
      {
        name: "Thriller",
      },
      {
        name: "Sci-Fi",
      },
      {
        name: "Mystery",
      },
    ],
    directors: [
      {
        name: "John Dahl",
      },
    ],
    imdbRating: 6,
    title: "Unforgettable",
    released: "1996-02-23",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/500Ne3EDn3HHpuCQWwGKR74r0cB.jpg",
  },
  {
    actors: [
      {
        name: "Adam Sandler",
      },
      {
        name: "Christopher McDonald",
      },
      {
        name: "Frances Bay",
      },
      {
        name: "Julie Bowen",
      },
    ],
    tmdbId: "9614",
    plot:
      "A rejected hockey player puts his skills to the golf course to save his grandmother's house.",
    genres: [
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Dennis Dugan",
      },
    ],
    imdbRating: 7,
    title: "Happy Gilmore",
    released: "1996-02-16",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/4RnCeRzvI1xk5tuNWjpDKzSnJDk.jpg",
  },
  {
    actors: [
      {
        name: "Clint Eastwood",
      },
      {
        name: "Meryl Streep",
      },
      {
        name: "Annie Corley",
      },
      {
        name: "Victor Slezak",
      },
    ],
    tmdbId: "688",
    plot:
      "Photographer Robert Kincaid wanders into the life of housewife Francesca Johnson, for four days in the 1960s.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Romance",
      },
    ],
    directors: [
      {
        name: "Clint Eastwood",
      },
    ],
    imdbRating: 7.5,
    title: "Bridges of Madison County, The",
    released: "1995-06-02",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/8TfLAfIh5Qxp2J4ZjOafHYhWtDb.jpg",
  },
  {
    actors: [
      {
        name: "Tim Curry",
      },
      {
        name: "Billy Connolly",
      },
      {
        name: "Jennifer Saunders",
      },
      {
        name: "Kevin Bishop",
      },
    ],
    tmdbId: "10874",
    plot: "The Muppets' twist on the classic tale.",
    genres: [
      {
        name: "Children",
      },
      {
        name: "Comedy",
      },
      {
        name: "Musical",
      },
      {
        name: "Adventure",
      },
    ],
    directors: [
      {
        name: "Brian Henson",
      },
    ],
    imdbRating: 6.9,
    title: "Muppet Treasure Island",
    released: "1996-02-16",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/8UL6EcZGO1ssD60azzOtUPjnOZI.jpg",
  },
  {
    actors: [
      {
        name: "Christy Turlington",
      },
      {
        name: "Giorgio Armani",
      },
      {
        name: "Azzedine Alaïa",
      },
      {
        name: "Nadja Auermann",
      },
    ],
    tmdbId: "89333",
    plot:
      "A camera follows model Christy Turlington through the spring fashion shows in Milan, Paris, and New York one year in the early 1990s, probably 1992. She and others dash from one designer's ...",
    genres: [
      {
        name: "Documentary",
      },
    ],
    directors: [
      {
        name: "Robert Leacock",
      },
    ],
    imdbRating: 6.4,
    title: "Catwalk",
    released: "1996-05-16",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/sQ2dk0qd3rhfT1776GcFnLj4s1U.jpg",
  },
  {
    actors: [
      {
        name: "James Robinson",
      },
      {
        name: "Sandy Nelson",
      },
      {
        name: "Sean Lawlor",
      },
      {
        name: "James Cosmo",
      },
    ],
    tmdbId: "197",
    plot:
      "When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace begins a revolt against King Edward I of England.",
    genres: [
      {
        name: "War",
      },
      {
        name: "Drama",
      },
      {
        name: "Action",
      },
    ],
    directors: [
      {
        name: "Mel Gibson",
      },
    ],
    imdbRating: 8.4,
    title: "Braveheart",
    released: "1995-05-24",
    thumbnail: "https://image.tmdb.org/t/p/w154/or1gBugydmjToAEq7OZY0owwFk.jpg",
  },
  {
    actors: [
      {
        name: "Diahnne Abbott",
      },
      {
        name: "Gino Ardito",
      },
      {
        name: "Frank Adu",
      },
      {
        name: "Victor Argo",
      },
    ],
    tmdbId: "103",
    plot:
      "A mentally unstable Vietnam war veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
    genres: [
      {
        name: "Thriller",
      },
      {
        name: "Drama",
      },
      {
        name: "Crime",
      },
    ],
    directors: [
      {
        name: "Martin Scorsese",
      },
    ],
    imdbRating: 8.3,
    title: "Taxi Driver",
    released: "1976-02-08",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
  },
  {
    actors: [
      {
        name: "Bill Tung",
      },
      {
        name: "Anita Mui",
      },
      {
        name: "Françoise Yip",
      },
      {
        name: "Jackie Chan",
      },
    ],
    tmdbId: "33542",
    plot:
      "A young man visiting and helping his uncle in New York City finds himself forced to fight a street gang and the mob with his martial art skills.",
    genres: [
      {
        name: "Crime",
      },
      {
        name: "Comedy",
      },
      {
        name: "Adventure",
      },
      {
        name: "Action",
      },
    ],
    directors: [
      {
        name: "Stanley Tong",
      },
    ],
    imdbRating: 6.7,
    title: "Rumble in the Bronx (Hont faan kui)",
    released: "1996-02-23",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/1nAfchiXHQB3iyhK8fCJJEnNs5A.jpg",
  },
  {
    actors: [
      {
        name: "Meryl Streep",
      },
      {
        name: "Julia Weldon",
      },
      {
        name: "Edward Furlong",
      },
      {
        name: "Liam Neeson",
      },
    ],
    tmdbId: "43566",
    plot:
      "Two parents deal with the effects when their son is accused of murdering his girlfriend.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Mystery",
      },
    ],
    directors: [
      {
        name: "Barbet Schroeder",
      },
    ],
    imdbRating: 6.1,
    title: "Before and After",
    released: "1996-02-23",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/uopIJpEI7yAxpnD4SR26VfKQgHJ.jpg",
  },
  {
    actors: [
      {
        name: "Helena Bonham Carter",
      },
      {
        name: "Craig Anthony Olejnik",
      },
      {
        name: "Clive Russell",
      },
      {
        name: "Kate Nelligan",
      },
    ],
    tmdbId: "71754",
    plot:
      "Margaret MacNiel, a girl living in a Cape Breton coal mining town, finds her life changing when she meets Neil Currie, a cheerful bagpipe-playing dishwasher. Unfortunately, neither of them are able to escape the industry around them.",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Mort Ransen",
      },
    ],
    imdbRating: 7.3,
    title: "Margaret's Museum",
    released: "1996-01-26",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/is6iFhO7kBUPrGqJYSdpWsJyYls.jpg",
  },
  {
    actors: [
      {
        name: "Kenneth Branagh",
      },
      {
        name: "Glenn Close",
      },
      {
        name: "Janny Brandes-Brilslijper",
      },
      {
        name: "Rose De Liema",
      },
    ],
    tmdbId: "51352",
    plot:
      "Using previously unreleased archival material in addition to contemporary interviews, this academy award-winning documentary tells the story of the Frank family and presents the first ...",
    genres: [
      {
        name: "Documentary",
      },
    ],
    directors: [
      {
        name: "Jon Blair",
      },
    ],
    imdbRating: 8.2,
    title: "Anne Frank Remembered",
    released: "1995-08-31",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/6nyhzrSGimCbdxiY8DEO7kI7xx4.jpg",
  },
  {
    actors: [
      {
        name: "Tobias Arnold",
      },
      {
        name: "Roger Lloyd Pack",
      },
      {
        name: "Ruth Sheen",
      },
      {
        name: "Hugh O'Conor",
      },
    ],
    tmdbId: "16934",
    plot:
      "This film is based on a true story about a British teenager who allegedly poisoned family, friends, and co-workers. Graham is highly intelligent, but completely amoral. He becomes ...",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Crime",
      },
    ],
    directors: [
      {
        name: "Benjamin Ross",
      },
    ],
    imdbRating: 7.1,
    title: "Young Poisoner's Handbook, The",
    released: "1996-02-23",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/rM6yyxj77tZBL7JBkPCkXMSnAhs.jpg",
  },
  {
    actors: [
      {
        name: "Ben Stiller",
      },
      {
        name: "Sarah Jessica Parker",
      },
      {
        name: "Eric Schaeffer",
      },
      {
        name: "Elle Macpherson",
      },
    ],
    tmdbId: "10324",
    plot:
      "Joe and Lucy are roommates and best friends. Lucy, whose love life is embarrassingly dull, convinces Joe, who is infatuated with a neighbor he's never met, that if they don't have stable ...",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Eric Schaeffer",
      },
    ],
    imdbRating: 4.9,
    title: "If Lucy Fell",
    released: "1996-03-08",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/ig5LhLEnlt7QCyYjgui082fO4ih.jpg",
  },
  {
    actors: [
      {
        name: "Andy Garcia",
      },
      {
        name: "Rachel Ticotin",
      },
      {
        name: "Alan Arkin",
      },
      {
        name: "Joe Pantoliano",
      },
    ],
    tmdbId: "78406",
    plot:
      "Ruben and Robby are twin brothers, adopted by Mona, one of the wealthiest - and most eccentric - women in Santa Barbara. Ruben is devoted to Mona, but Robby is more devoted to her money. So...",
    genres: [
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Andrew Davis",
      },
    ],
    imdbRating: 4.8,
    title: "Steal Big, Steal Little",
    released: "1995-09-29",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/tCtsiQwW9iRs36OML5z9nmPFci0.jpg",
  },
  {
    actors: [
      {
        name: "Philip Dinn",
      },
      {
        name: "Brian Dooley",
      },
      {
        name: "Johnny Morina",
      },
      {
        name: "Henry Czerny",
      },
    ],
    tmdbId: "32119",
    plot:
      "The true story of boys being sexually abused at their orphanage ran by a religious community in Newfoundland.",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "John N. Smith",
      },
    ],
    imdbRating: 7.8,
    title: "Boys of St. Vincent, The",
    released: "1992-12-06",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/3jVid7Zjte2iDTa9I3e4LrRoaD1.jpg",
  },
  {
    actors: [
      {
        name: "Eddie Murphy",
      },
      {
        name: "Halle Berry",
      },
      {
        name: "Robin Givens",
      },
      {
        name: "David Alan Grier",
      },
    ],
    tmdbId: "11066",
    plot:
      "A successful executive and womanizer finds his lifestyle choices have turned back on him when his new female boss turns out to be an even bigger deviant than he is.",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Reginald Hudlin",
      },
    ],
    imdbRating: 5.4,
    title: "Boomerang",
    released: "1992-07-01",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/cc9YAZq5NXiIEJsHjW7p2FaHQkp.jpg",
  },
  {
    actors: [
      {
        name: "Brigitte Lin",
      },
      {
        name: "Tony Chiu Wai Leung",
      },
      {
        name: "Takeshi Kaneshiro",
      },
      {
        name: "Faye Wong",
      },
    ],
    tmdbId: "11104",
    plot:
      "Two melancholy Hong Kong policemen fall in love: one with a mysterious female underworld figure, the other with a beautiful and ethereal server at a late-night restaurant he frequents.",
    genres: [
      {
        name: "Mystery",
      },
      {
        name: "Drama",
      },
      {
        name: "Romance",
      },
    ],
    directors: [
      {
        name: "Kar-Wai Wong",
      },
    ],
    imdbRating: 8.1,
    title: "Chungking Express (Chung Hing sam lam)",
    released: "1996-03-08",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/8LZ7eoGI9TJtrRGB6U0RfSiLDm1.jpg",
  },
  {
    actors: [
      {
        name: "Sergio Castellitto",
      },
      {
        name: "Franco Scaldati",
      },
      {
        name: "Tiziana Lodato",
      },
      {
        name: "Leopoldo Trieste",
      },
    ],
    tmdbId: "37975",
    plot: "A photographer and the types of people he encounters.",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Giuseppe Tornatore",
      },
    ],
    imdbRating: 7.3,
    title: "Star Maker, The (Uomo delle stelle, L')",
    released: "1996-03-08",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/wousyAPimHw7RQVjlvzA8BSr2pt.jpg",
  },
  {
    actors: [
      {
        name: "Mary Tyler Moore",
      },
      {
        name: "Téa Leoni",
      },
      {
        name: "Patricia Arquette",
      },
      {
        name: "Ben Stiller",
      },
    ],
    tmdbId: "2074",
    plot:
      "A young man, his wife, and his incompetent case worker travel across country to find his birth parents.",
    genres: [
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "David O. Russell",
      },
    ],
    imdbRating: 6.8,
    title: "Flirting With Disaster",
    released: "1996-04-12",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/sRRdVLuxk8OLCDRd4u4xDrDdwv7.jpg",
  },
  {
    actors: [
      {
        name: "Jack Black",
      },
      {
        name: "Melody Kay",
      },
      {
        name: "Carole Finn",
      },
      {
        name: "Jason James Richter",
      },
    ],
    tmdbId: "27793",
    plot:
      "A young boy must restore order when a group of bullies steal the magical book that acts as a portal between Earth and the imaginary world of Fantasia.",
    genres: [
      {
        name: "Fantasy",
      },
      {
        name: "Children",
      },
      {
        name: "Adventure",
      },
    ],
    directors: [
      {
        name: "Peter MacDonald",
      },
    ],
    imdbRating: 3.1,
    title: "NeverEnding Story III, The",
    released: "1994-10-27",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/o75HHfr23sgeqIeUPwjKY0V9Ppi.jpg",
  },
  {
    actors: [
      {
        name: "Josh Charles",
      },
      {
        name: "Christine Lahti",
      },
      {
        name: "Anne Heche",
      },
      {
        name: "John Goodman",
      },
    ],
    tmdbId: "110972",
    plot:
      "A whimsical saga of a young man whose two life-consuming passions are unraveling traffic gridlock and an avant-garde dancer. A romantic comedy.",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Bryan Gordon",
      },
    ],
    imdbRating: 5.9,
    title: "Pie in the Sky",
    released: "1996-02-09",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/iZs2BzP1nbrcHCDX3QEHa3Nn0y4.jpg",
  },
  {
    actors: [
      {
        name: "John Ventimiglia",
      },
      {
        name: "Anna Levine",
      },
      {
        name: "Charlotte Eve Blythe",
      },
      {
        name: "Miranda Rhyne",
      },
    ],
    tmdbId: "32622",
    plot:
      "A ten year old girl named Angela leads her six year old sister, Ellie, through various regimens of 'purification' in an attempt to rid themselves of their evil, which she believes to be the...",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Rebecca Miller",
      },
    ],
    imdbRating: 6.4,
    title: "Angela",
    released: "1995-01-01",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/1UxqC7TS1o1hzaPkc1Q0LsW0yUS.jpg",
  },
  {
    actors: [
      {
        name: "Gabriel Byrne",
      },
      {
        name: "Niall Toibin",
      },
      {
        name: "Owen Roe",
      },
      {
        name: "Corban Walker",
      },
    ],
    tmdbId: "73067",
    plot:
      "This is a story of a man (Walker), suffering from dwarfism, who writes an autobiographical account of his life. In flashbacks, we see how he was conceived to a woman (Parillaud) at the end ...",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Romance",
      },
    ],
    directors: [
      {
        name: "Michael Lindsay-Hogg",
      },
    ],
    imdbRating: 6.7,
    title: "Frankie Starlight",
    released: "1995-11-22",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/6v3VxWhFsr2Qx8qIQkG4WL3f76X.jpg",
  },
  {
    actors: [
      {
        name: "David Caruso",
      },
      {
        name: "Chazz Palminteri",
      },
      {
        name: "Linda Fiorentino",
      },
      {
        name: "Richard Crenna",
      },
    ],
    tmdbId: "11863",
    plot:
      "A bright assistant D.A. investigates a gruesome hatchet murder and hides a clue he found at the crime scene. Under professional threats and an attempt on his life, he goes on heartbroken because evidence point to the woman he still loves.",
    genres: [
      {
        name: "Thriller",
      },
    ],
    directors: [
      {
        name: "William Friedkin",
      },
    ],
    imdbRating: 5.1,
    title: "Jade",
    released: "1995-10-13",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/lPkDrz6e5DWkKailsx3mIjtq0GF.jpg",
  },
  {
    actors: [
      {
        name: "Lauren Holly",
      },
      {
        name: "Kelsey Grammer",
      },
      {
        name: "Harry Dean Stanton",
      },
      {
        name: "Rob Schneider",
      },
    ],
    tmdbId: "9101",
    plot:
      "Lt. Cmdr. Tom Dodge is assigned as Captain to the USS Stingray, an old diesel driven submarine that has seen better days. With a crew that consists only of weird guys (and a gal), he's ...",
    genres: [
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "David S. Ward",
      },
    ],
    imdbRating: 6,
    title: "Down Periscope",
    released: "1996-03-01",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/tYdGWz9oncuhqxn5eAK5CpjCiYo.jpg",
  },
  {
    actors: [
      {
        name: "Vivian Paxton",
      },
      {
        name: "Michael Ornstein",
      },
      {
        name: "Claudette Sutherland",
      },
      {
        name: "Cal Bartlett",
      },
    ],
    tmdbId: "5757",
    plot:
      "Mockumentary look at Playgirl Magazine centerfold and 1992 Man of the Year, Dirk Shafer, who kept it a secret from the magazine that he is gay. Most of the film is a fictionalized retelling...",
    genres: [
      {
        name: "Documentary",
      },
    ],
    directors: [
      {
        name: "Dirk Shafer",
      },
    ],
    imdbRating: 6.1,
    title: "Man of the Year",
    released: "1996-03-15",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/jVO3Gvsdqe5C9Jr7cE1fSOtW2Op.jpg",
  },
  {
    actors: [
      {
        name: "Robert Redford",
      },
      {
        name: "Michelle Pfeiffer",
      },
      {
        name: "Stockard Channing",
      },
      {
        name: "Joe Mantegna",
      },
    ],
    tmdbId: "9302",
    plot:
      "An ambitious young woman, determined to build a career in TV journalism, gets good advice from her first boss, and they fall in love.",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Jon Avnet",
      },
    ],
    imdbRating: 6.1,
    title: "Up Close and Personal",
    released: "1996-03-01",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/2yf1pCiQk6JMy4k5zxf39YXQxGB.jpg",
  },
  {
    actors: [
      {
        name: "Nathan Lane",
      },
      {
        name: "Dianne Wiest",
      },
      {
        name: "Robin Williams",
      },
      {
        name: "Gene Hackman",
      },
    ],
    tmdbId: "11000",
    plot:
      "A gay cabaret owner and his drag queen companion agree to put up a false straight front so that their son can introduce them to his fiancée's right-wing moralistic parents.",
    genres: [
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Mike Nichols",
      },
    ],
    imdbRating: 6.9,
    title: "Birdcage, The",
    released: "1996-03-08",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/bEyK1K1EgWapeKgkcOLC1ejl9nj.jpg",
  },
  {
    actors: [
      {
        name: "Shari Albert",
      },
      {
        name: "Maxine Bahns",
      },
      {
        name: "Catharine Bolz",
      },
      {
        name: "Connie Britton",
      },
    ],
    tmdbId: "16388",
    plot:
      "Three Irish Catholic brothers from Long Island struggle to deal with love, marriage, and infidelity.",
    genres: [
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Edward Burns",
      },
    ],
    imdbRating: 6.6,
    title: "Brothers McMullen, The",
    released: "1995-08-09",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/6oWsOJP0ed5gs8n2UywcailoxFN.jpg",
  },
  {
    actors: [
      {
        name: "Michael Taliferro",
      },
      {
        name: "Lisa Boyle",
      },
      {
        name: "Martin Lawrence",
      },
      {
        name: "Will Smith",
      },
    ],
    tmdbId: "9737",
    plot:
      "Two hip detectives protect a murder witness while investigating a case of stolen heroin.",
    genres: [
      {
        name: "Thriller",
      },
      {
        name: "Drama",
      },
      {
        name: "Crime",
      },
      {
        name: "Action",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Michael Bay",
      },
    ],
    imdbRating: 6.8,
    title: "Bad Boys",
    released: "1995-04-07",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/x1ygBecKHfXX4M2kRhmFKWfWbJc.jpg",
  },
  {
    actors: [
      {
        name: "Wang Fei",
      },
      {
        name: "Stephen Lang",
      },
      {
        name: "Yi Ding",
      },
      {
        name: "Ryan Slater",
      },
    ],
    tmdbId: "30765",
    plot:
      "A young American boy visiting in China helps his zoologist father rescue a panda cub from unscrupulous poachers while his panda reserve is threatened with closure from officious bureaucrats.",
    genres: [
      {
        name: "Children",
      },
      {
        name: "Adventure",
      },
    ],
    directors: [
      {
        name: "Christopher Cain",
      },
    ],
    imdbRating: 5.8,
    title: "Amazing Panda Adventure, The",
    released: "1995-08-25",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/tIK40vCE9i8g4VhyJ3LLr5y1ROJ.jpg",
  },
  {
    actors: [
      {
        name: "Leonardo DiCaprio",
      },
      {
        name: "Marilyn Sokol",
      },
      {
        name: "Lorraine Bracco",
      },
      {
        name: "James Madio",
      },
    ],
    tmdbId: "10474",
    plot:
      "Film adaptation of street tough Jim Carroll's epistle about his kaleidoscopic free fall into the harrowing world of drug addiction. As a member of a seemingly unbeatable high school ...",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Scott Kalvert",
      },
    ],
    imdbRating: 7.3,
    title: "Basketball Diaries, The",
    released: "1995-04-21",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/AhvO1GGDPIgN0hOqZEgaFCbswMK.jpg",
  },
  {
    actors: [
      {
        name: "Alan Rickman",
      },
      {
        name: "Alun Armstrong",
      },
      {
        name: "Georgina Cates",
      },
      {
        name: "Hugh Grant",
      },
    ],
    tmdbId: "22279",
    plot:
      "Set right after World War II, a naive teenage girl joins a shabby theatre troupe in Liverpool. During a winter production of Peter Pan, the play quickly turns into a dark metaphor for youth...",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Mike Newell",
      },
    ],
    imdbRating: 6.1,
    title: "Awfully Big Adventure, An",
    released: "1995-07-21",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/i7ufwiXoFaf8eIk4rS4U2IBZk3b.jpg",
  },
  {
    actors: [
      {
        name: "Isabelle Huppert",
      },
      {
        name: "Martin Donovan",
      },
      {
        name: "Elina Löwensohn",
      },
      {
        name: "Damian Young",
      },
    ],
    tmdbId: "30157",
    plot:
      "Isabelle is an ex-nun waiting for her special mission from God. In the meantime, she is making a living writing pornography. She meets Thomas, a sweet, confused amnesiac who cannot remember...",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Thriller",
      },
      {
        name: "Crime",
      },
    ],
    directors: [
      {
        name: "Hal Hartley",
      },
    ],
    imdbRating: 7,
    title: "Amateur",
    released: "1995-05-19",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/vUgcNFptpK2YgotwhZJ8HmsvbKZ.jpg",
  },
  {
    actors: [
      {
        name: "Bill Paxton",
      },
      {
        name: "Kevin Bacon",
      },
      {
        name: "Tom Hanks",
      },
      {
        name: "Gary Sinise",
      },
    ],
    tmdbId: "568",
    plot:
      "NASA must devise a strategy to return Apollo 13 to Earth safely after the spacecraft undergoes massive internal damage putting the lives of the three astronauts on board in jeopardy.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Adventure",
      },
      {
        name: "IMAX",
      },
    ],
    directors: [
      {
        name: "Ron Howard",
      },
    ],
    imdbRating: 7.6,
    title: "Apollo 13",
    released: "1995-06-30",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/jokiCLdNS58eJTALfNcerQRhwAo.jpg",
  },
  {
    actors: [
      {
        name: "Liam Neeson",
      },
      {
        name: "Jessica Lange",
      },
      {
        name: "John Hurt",
      },
      {
        name: "Tim Roth",
      },
    ],
    tmdbId: "11780",
    plot:
      "In the highlands of Scotland in the 1700s, Rob Roy tries to lead his small town to a better future, by borrowing money from the local nobility to buy cattle to herd to market. When the ...",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Drama",
      },
      {
        name: "Action",
      },
      {
        name: "War",
      },
    ],
    directors: [
      {
        name: "Michael Caton-Jones",
      },
    ],
    imdbRating: 6.9,
    title: "Rob Roy",
    released: "1995-04-14",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/oyOR8EygIDY7s2ubQyajulWsj9D.jpg",
  },
  {
    actors: [
      {
        name: "Lili Taylor",
      },
      {
        name: "Christopher Walken",
      },
      {
        name: "Annabella Sciorra",
      },
      {
        name: "Edie Falco",
      },
    ],
    tmdbId: "34996",
    plot:
      "A New York philosophy grad student turns into a vampire after getting bitten by one, and then tries to come to terms with her new lifestyle and frequent craving for human blood.",
    genres: [
      {
        name: "Horror",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Abel Ferrara",
      },
    ],
    imdbRating: 6.4,
    title: "Addiction, The",
    released: "1995-10-06",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/ps0vYKN5YQz5zTLZac6FayUaHbg.jpg",
  },
  {
    actors: [
      {
        name: "Nicole Kidman",
      },
      {
        name: "Jim Carrey",
      },
      {
        name: "Tommy Lee Jones",
      },
      {
        name: "Val Kilmer",
      },
    ],
    tmdbId: "414",
    plot:
      "Batman must battle Two-Face and The Riddler with help of an amourous psychologist and a young circus acrobat who becomes his sidekick, Robin.",
    genres: [
      {
        name: "Action",
      },
      {
        name: "Adventure",
      },
      {
        name: "Comedy",
      },
      {
        name: "Crime",
      },
    ],
    directors: [
      {
        name: "Joel Schumacher",
      },
    ],
    imdbRating: 5.4,
    title: "Batman Forever",
    released: "1995-06-16",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/k6EQ2OewzjF8TcPgok9wxpPAgXW.jpg",
  },
  {
    actors: [
      {
        name: "Catherine Deneuve",
      },
      {
        name: "Jean Sorel",
      },
      {
        name: "Michel Piccoli",
      },
      {
        name: "Geneviève Page",
      },
    ],
    tmdbId: "649",
    plot:
      "A frigid young housewife decides to spend her midweek afternoons as a prostitute.",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Luis Buñuel",
      },
    ],
    imdbRating: 7.8,
    title: "Beauty of the Day (Belle de jour)",
    released: "1968-04-10",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/jiz91yDheKGIE3tubFnXzYxTyhh.jpg",
  },
  {
    actors: [
      {
        name: "Spalding Gray",
      },
      {
        name: "Patricia Arquette",
      },
      {
        name: "Frances McDormand",
      },
      {
        name: "U Aung Ko",
      },
    ],
    tmdbId: "1873",
    plot:
      "Laura is trying to pick up the pieces of her life after the murder of her husband and son, and goes on vacation with her sister to Burma. After losing her passport at a political rally, she...",
    genres: [
      {
        name: "War",
      },
      {
        name: "Drama",
      },
      {
        name: "Adventure",
      },
    ],
    directors: [
      {
        name: "John Boorman",
      },
    ],
    imdbRating: 6.6,
    title: "Beyond Rangoon",
    released: "1995-08-25",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/aVYw8aQs9599aWzoSswQvgNoCat.jpg",
  },
  {
    actors: [
      {
        name: "Michael J. Fox",
      },
      {
        name: "Mel Gorham",
      },
      {
        name: "Roseanne Barr",
      },
      {
        name: "Lou Reed",
      },
    ],
    tmdbId: "5894",
    plot:
      "Wayne Wang's follow-up movie to Smoke presents a series of improvisational situations strung together to form a pastiche of Brooklyn's diverse ethnicity, offbeat humor, and essential ...",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Paul Auster",
      },
      {
        name: " Wayne Wang",
      },
      {
        name: " Harvey Wang",
      },
    ],
    imdbRating: 6.7,
    title: "Blue in the Face",
    released: "1995-10-13",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/yBFNJA95MNiasdNUPCU6otdtJE8.jpg",
  },
  {
    actors: [
      {
        name: "John Candy",
      },
      {
        name: "Alan Alda",
      },
      {
        name: "Rhea Perlman",
      },
      {
        name: "Kevin Pollak",
      },
    ],
    tmdbId: "1775",
    plot:
      "The U.S. President, low in the opinion polls, gets talked into raising his popularity by trying to start a cold war against Canada.",
    genres: [
      {
        name: "War",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Michael Moore",
      },
    ],
    imdbRating: 5.9,
    title: "Canadian Bacon",
    released: "1995-09-22",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/bzK2aQ8xUB67kwCR5LHTSY99HtT.jpg",
  },
  {
    actors: [
      {
        name: "Chauncey Leopardi",
      },
      {
        name: "Cathy Moriarty",
      },
      {
        name: "Malachi Pearson",
      },
      {
        name: "Spencer Vrooman",
      },
    ],
    tmdbId: "8839",
    plot:
      "A paranormal expert and his daughter bunk in an abandoned house populated by 3 mischievous ghosts and one friendly one.",
    genres: [
      {
        name: "Children",
      },
      {
        name: "Adventure",
      },
    ],
    directors: [
      {
        name: "Brad Silberling",
      },
    ],
    imdbRating: 6,
    title: "Casper",
    released: "1995-05-26",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/2ah8fNJFZVU3vcXhU5xfAYi2eym.jpg",
  },
  {
    actors: [
      {
        name: "Harvey Keitel",
      },
      {
        name: "Delroy Lindo",
      },
      {
        name: "John Turturro",
      },
      {
        name: "Mekhi Phifer",
      },
    ],
    tmdbId: "20649",
    plot:
      "Young drug pushers in the projects of Brooklyn live hard dangerous lives, trapped between their drug bosses and the detectives out to stop them.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Mystery",
      },
      {
        name: "Crime",
      },
    ],
    directors: [
      {
        name: "Spike Lee",
      },
    ],
    imdbRating: 6.9,
    title: "Clockers",
    released: "1995-09-13",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/c79uqLJleho2a7OQayfrW5Ypphf.jpg",
  },
  {
    actors: [
      {
        name: "Tim Curry",
      },
      {
        name: "Laura Linney",
      },
      {
        name: "Dylan Walsh",
      },
      {
        name: "Ernie Hudson",
      },
    ],
    tmdbId: "10329",
    plot:
      "When an expedition to the African Congo ends in disaster, a new team is assembled to find out what went wrong.",
    genres: [
      {
        name: "Adventure",
      },
      {
        name: "Action",
      },
      {
        name: "Sci-Fi",
      },
      {
        name: "Mystery",
      },
    ],
    directors: [
      {
        name: "Frank Marshall",
      },
    ],
    imdbRating: 5,
    title: "Congo",
    released: "1995-06-09",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/9mqMitlulCpsttWr2fVzXFlbPKm.jpg",
  },
  {
    actors: [
      {
        name: "Denzel Washington",
      },
      {
        name: "Gene Hackman",
      },
      {
        name: "Matt Craven",
      },
      {
        name: "George Dzundza",
      },
    ],
    tmdbId: "8963",
    plot:
      "On a US nuclear missile sub, a young first officer stages a mutiny to prevent his trigger happy captain from launching his missiles before confirming his orders to do so.",
    genres: [
      {
        name: "Thriller",
      },
      {
        name: "Drama",
      },
      {
        name: "War",
      },
    ],
    directors: [
      {
        name: "Tony Scott",
      },
    ],
    imdbRating: 7.3,
    title: "Crimson Tide",
    released: "1995-05-12",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/21nqRJ6ofEgVvEl68J4O9V26Xzy.jpg",
  },
  {
    actors: [
      {
        name: "Aline Kominsky",
      },
      {
        name: "Robert Crumb",
      },
      {
        name: "Maxon Crumb",
      },
      {
        name: "Charles Crumb",
      },
    ],
    tmdbId: "26564",
    plot:
      "An intimate portrait of the controversial cartoonist and his traumatized family.",
    genres: [
      {
        name: "Documentary",
      },
    ],
    directors: [
      {
        name: "Terry Zwigoff",
      },
    ],
    imdbRating: 8,
    title: "Crumb",
    released: "1995-04-28",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/q3fFSO9jZkbLVjMtw47nAdOftnd.jpg",
  },
  {
    actors: [
      {
        name: "Antonio Banderas",
      },
      {
        name: "Cheech Marin",
      },
      {
        name: "Joaquim de Almeida",
      },
      {
        name: "Salma Hayek",
      },
    ],
    tmdbId: "8068",
    plot: "A gunslinger is embroiled in a war with a local drug runner.",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Action",
      },
      {
        name: "Western",
      },
    ],
    directors: [
      {
        name: "Robert Rodriguez",
      },
    ],
    imdbRating: 7.2,
    title: "Desperado",
    released: "1995-08-25",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/e3gwpBeXpvGZsxUya9zNym5QXrw.jpg",
  },
  {
    actors: [
      {
        name: "Denzel Washington",
      },
      {
        name: "Jennifer Beals",
      },
      {
        name: "Tom Sizemore",
      },
      {
        name: "Don Cheadle",
      },
    ],
    tmdbId: "8512",
    plot:
      "An African American man is hired to find a woman and gets mixed up in a murderous political scandal.",
    genres: [
      {
        name: "Mystery",
      },
      {
        name: "Film-Noir",
      },
      {
        name: "Thriller",
      },
      {
        name: "Crime",
      },
    ],
    directors: [
      {
        name: "Carl Franklin",
      },
    ],
    imdbRating: 6.7,
    title: "Devil in a Blue Dress",
    released: "1995-09-29",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/t1U5mJv7vQSlfJNOjXWRgmaGMhz.jpg",
  },
  {
    actors: [
      {
        name: "Bruce Willis",
      },
      {
        name: "Samuel L. Jackson",
      },
      {
        name: "Jeremy Irons",
      },
      {
        name: "Graham Greene",
      },
    ],
    tmdbId: "1572",
    plot:
      "John McClane and a Harlem store owner are targeted by German terrorist Simon Gruber in New York City, where he plans to rob the Federal Reserve Building.",
    genres: [
      {
        name: "Crime",
      },
      {
        name: "Thriller",
      },
      {
        name: "Action",
      },
    ],
    directors: [
      {
        name: "John McTiernan",
      },
    ],
    imdbRating: 7.6,
    title: "Die Hard: With a Vengeance",
    released: "1995-05-19",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/sOqB9iMEcbGhAgH70dbs8U58UW5.jpg",
  },
  {
    actors: [
      {
        name: "Rose McGowan",
      },
      {
        name: "Johnathon Schaech",
      },
      {
        name: "Cress Williams",
      },
      {
        name: "James Duval",
      },
    ],
    tmdbId: "13552",
    plot:
      "Jordan White and Amy Blue, two troubled teens, pick up an adolescent drifter, Xavier Red. Together, the threesome embark on a sex and violence-filled journey through an America of psychos and quickiemarts.",
    genres: [
      {
        name: "Drama",
      },
      {
        name: "Crime",
      },
      {
        name: "Comedy",
      },
    ],
    directors: [
      {
        name: "Gregg Araki",
      },
    ],
    imdbRating: 5.9,
    title: "Doom Generation, The",
    released: "1995-10-27",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/mcISIatRSaP30WZQh1G4ZqLVWQA.jpg",
  },
  {
    actors: [
      {
        name: "Embeth Davidtz",
      },
      {
        name: "James Purefoy",
      },
      {
        name: "Tom Bell",
      },
      {
        name: "Gemma Jones",
      },
    ],
    tmdbId: "259209",
    plot:
      "After an abandoned young woman in late 19th Century England is taken in by a rural couple with three handsome sons, tragic consequences result.",
    genres: [
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Christopher Menaul",
      },
    ],
    imdbRating: 6.4,
    title: "Feast of July",
    released: "1995-10-13",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/inUPybROcLlzdG4EQeDIShfFjsD.jpg",
  },
  {
    actors: [
      {
        name: "Sean Connery",
      },
      {
        name: "Julia Ormond",
      },
      {
        name: "Richard Gere",
      },
      {
        name: "Ben Cross",
      },
    ],
    tmdbId: "6520",
    plot:
      "Lancelot falls in love with Guinevere, who is due to be married to King Arthur. Meanwhile, a violent warlord tries to seize power from Arthur and his Knights of the Round Table.",
    genres: [
      {
        name: "Romance",
      },
      {
        name: "Action",
      },
      {
        name: "Drama",
      },
    ],
    directors: [
      {
        name: "Jerry Zucker",
      },
    ],
    imdbRating: 5.9,
    title: "First Knight",
    released: "1995-07-07",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/hedLC2ayCktOBKi1KP0x65GisHU.jpg",
  },
  {
    actors: [
      {
        name: "Francis Capra",
      },
      {
        name: "Mary Kate Schellhardt",
      },
      {
        name: "August Schellenberg",
      },
      {
        name: "Jason James Richter",
      },
    ],
    tmdbId: "9073",
    plot:
      "Jesse becomes reunited with Willy three years after the whale's jump to freedom as the teenager tries to rescue the killer whale and other orcas from an oil spill.",
    genres: [
      {
        name: "Adventure",
      },
      {
        name: "Drama",
      },
      {
        name: "Children",
      },
    ],
    directors: [
      {
        name: "Dwight H. Little",
      },
    ],
    imdbRating: 4.9,
    title: "Free Willy 2: The Adventure Home",
    released: "1995-07-19",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/dmf2us4DEouKac7nIRfvonz1mFt.jpg",
  },
  {
    actors: [
      {
        name: "Jesse Bradford",
      },
      {
        name: "Jonny Lee Miller",
      },
      {
        name: "Matthew Lillard",
      },
      {
        name: "Angelina Jolie",
      },
    ],
    tmdbId: "10428",
    plot:
      "A young boy is arrested by the U.S. Secret Service for writing a computer virus and is banned from using a computer until his 18th birthday. Years later, he and his new-found friends ...",
    genres: [
      {
        name: "Action",
      },
      {
        name: "Adventure",
      },
      {
        name: "Crime",
      },
      {
        name: "Thriller",
      },
    ],
    directors: [
      {
        name: "Iain Softley",
      },
    ],
    imdbRating: 6.2,
    title: "Hackers",
    released: "1995-09-15",
    thumbnail:
      "https://image.tmdb.org/t/p/w154/qfx2EENW1sOpKNVKLzr7VOhlxkt.jpg",
  },
];

export default moviesDb;
