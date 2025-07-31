
const MOVIES_DATA = {
  "featured": [
    {
      "id": 1,
      "section": "hero",
      "title": "Mann Mayal",
      "genre": "Drama",
      "description": "The story of Manahil and Salahuddin, childhood friends who fall in love and face societal pressures.",
      "image": "https://thesecondangle.com/wp-content/uploads/2021/01/mann-mayal-scaled.jpg",
      "rating": 8.2,
      "type": "TV",
      "length": "24m",
      "date": "2016"
    },
    {
      "id": 2,
      "section": "hero",
      "title": "The Notebook",
      "genre": "Romance",
      "description": "A poor young man and a wealthy young woman fall in love, but are soon separated because of their social differences.",
      "image": "https://m.media-amazon.com/images/M/MV5BMTM1MDM0NDUzOF5BMl5BanBnXkFtZTcwODUxMTg0NA@@._V1_.jpg",
      "rating": 7.8,
      "type": "Movie",
      "length": "2h 3m",
      "date": "2004"
    },
    {
      "id": 3,
      "section": "hero",
      "title": "Me Before You",
      "genre": "Romance",
      "description": "A girl in a small town forms an unlikely bond with a recently-paralyzed man she's taking care of.",
      "image": "https://www.collegefashion.net/wp-content/uploads/2019/01/mebeforeyoujpg.jpg",
      "rating": 7.4,
      "type": "Movie",
      "length": "1h 50m",
      "date": "2016"
    },
    {
      "id": 4,
      "section": "hero",
      "title": "The Fault in Our Stars",
      "genre": "Romance",
      "description": "Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.",
      "image": "https://wallpapercave.com/wp/wp2159349.jpg",
      "rating": 7.7,
      "type": "Movie",
      "length": "2h 6m",
      "date": "2014"
    }
  ],
  "popular": [
    {
      "id": 5,
      "section": "popular",
      "title": "Punjab Nahi Jaungi",
      "genre": "Romance",
      "description": "A modern romantic saga torn between love and cultural boundaries.",
      "image": "https://c7.alamy.com/comp/KF5NB6/punjab-nahi-jaungi-poster-from-left-humayun-saeed-mehwish-hayat-2017-KF5NB6.jpg",
      "rating": 7.2,
      "type": "Movie",
      "length": "2h 38m",
      "date": "2017"
    },
    {
      "id": 6,
      "section": "popular",
      "title": "Ishqiya",
      "genre": "Drama",
      "description": "A gripping tale of love, betrayal, and emotional conflicts.",
      "image": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/1wDDmN9lIPlKNYEcQd3FvAQjWLe.jpg",
      "rating": 7.3,
      "type": "Movie",
      "length": "2h 6m",
      "date": "2010"
    },
    {
      "id": 7,
      "section": "popular",
      "title": "Humsafar",
      "genre": "Drama",
      "description": "A beautifully narrated love story that captured millions of hearts.",
      "image": "https://media.themoviedb.org/t/p/w440_and_h660_face/6zEJBpSl42mCwMghEyzCsloVscZ.jpg",
      "rating": 8.9,
      "type": "TV",
      "length": "30m",
      "date": "2011"
    },
    {
      "id": 8,
      "section": "popular",
      "title": "Anaa",
      "genre": "Drama",
      "description": "A story of pride, ego, and tangled relationships across generations.",
      "image": "https://th.bing.com/th/id/OIP.0bcsew68W0CcMp0BE11uSgHaK5?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "rating": 7.0,
      "type": "TV",
      "length": "35m",
      "date": "2018"
    },
    {
      "id": 9,
      "section": "popular",
      "title": "Meem Se Muhabbat",
      "genre": "Romance",
      "description": "An emotional story revolving around love and family expectations.",
      "image": "https://media.themoviedb.org/t/p/w440_and_h660_face/9QRMz7dmfqbGljM4KpoMjp7OQUp.jpg",
      "rating": 7.1,
      "type": "TV",
      "length": "38m",
      "date": "2018"
    },
    {
      "id": 10,
      "section": "popular",
      "title": "Muhabbat Gumshuda Meri",
      "genre": "Drama",
      "description": "Two young lovers navigate through difficult circumstances to find each other.",
      "image": "https://media.themoviedb.org/t/p/w440_and_h660_face/7ldbCTKO2CVthoPdoeBYQxRG9Db.jpg",
      "rating": 7.6,
      "type": "TV",
      "length": "40m",
      "date": "2023"
    },
    {
      "id": 11,
      "section": "popular",
      "title": "Khaani",
      "genre": "Drama",
      "description": "The story of a strong woman standing up against a powerful and violent man.",
      "image": "https://th.bing.com/th/id/OIP.eMq_BMshFquwU0bz-UTObQHaKk?w=122&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "rating": 8.0,
      "type": "TV",
      "length": "38m",
      "date": "2017"
    },
    {
      "id": 12,
      "section": "popular",
      "title": "Zindagi Gulzar Hai",
      "genre": "Drama",
      "description": "A contrast of two characters from different classes growing together in love.",
      "image": "https://th.bing.com/th/id/OIP.LG9OEHbI7dFdT4qcjfGDYgHaLH?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "rating": 8.6,
      "type": "TV",
      "length": "40m",
      "date": "2012"
    },
    {
      "id": 13,
      "section": "popular",
      "title": "Dil Diyan Gallan",
      "genre": "Romance",
      "description": "A romantic drama about love, family, and misunderstandings.",
      "image": "https://images.kinorium.com/movie/poster/1706228/w1500_38880637.jpg",
      "rating": 7.4,
      "type": "TV",
      "length": "36m",
      "date": "2018"
    },
    {
      "id": 14,
      "section": "popular",
      "title": "Aunn Zara",
      "genre": "Romance",
      "description": "Light-hearted romantic comedy about marriage and relationships.",
      "image": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/qIGWqBB9uIsB5JuLKZRk6qL631u.jpg",
      "rating": 7.5,
      "type": "TV",
      "length": "30m",
      "date": "2013"
    },
    {
      "id": 15,
      "section": "popular",
      "title": "Udaari",
      "genre": "Drama",
      "description": "A social drama highlighting child abuse and women empowerment.",
      "image": "https://upload.wikimedia.org/wikipedia/en/5/56/Title_Screen_of_Hum_TV%27s_Udaari.jpg",
      "rating": 8.7,
      "type": "TV",
      "length": "40m",
      "date": "2016"
    },
    {
      "id": 16,
      "section": "popular",
      "title": "Meri Zaat Zarra-e-Benishan",
      "genre": "Drama",
      "description": "A heartbreaking story of betrayal and forgiveness.",
      "image": "https://upload.wikimedia.org/wikipedia/en/6/61/Merizaatzarra.jpg",
      "rating": 8.4,
      "type": "TV",
      "length": "40m",
      "date": "2009"
    },
    {
      "id": 17,
      "section": "popular",
      "title": "Dastaan",
      "genre": "Drama",
      "description": "A historical drama based on the partition of India.",
      "image": "https://upload.wikimedia.org/wikipedia/en/9/90/Hum_TV_drama_Dastaan_by_Haissam_Hussain.jpg",
      "rating": 8.6,
      "type": "TV",
      "length": "38m",
      "date": "2010"
    },
    {
      "id": 18,
      "section": "popular",
      "title": "Shehr-e-Zaat",
      "genre": "Drama",
      "description": "A spiritual journey of self-discovery and love.",
      "image": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/4qxWWYZ9z28lJZAuYRuwZBoCrDP.jpgg",
      "rating": 8.3,
      "type": "TV",
      "length": "38m",
      "date": "2012"
    },
    {
      "id": 19,
      "section": "popular",
      "title": "Ranjha Ranjha Kardi",
      "genre": "Drama",
      "description": "A moving story about societal taboos and personal strength.",
      "image": "https://image.tmdb.org/t/p/original/4NrGLM6rKL13wKST7C1D9YmiNXJ.jpg",
      "rating": 8.5,
      "type": "TV",
      "length": "40m",
      "date": "2018"
    },
    {
      "id": 20,
      "section": "popular",
      "title": "Alif",
      "genre": "Drama",
      "description": "A profound tale exploring spirituality and human connection.",
      "image": "https://image.tmdb.org/t/p/original/gdNytcms9fONO3KRYw9dW9FAA9a.jpg",
      "rating": 8.7,
      "type": "TV",
      "length": "38m",
      "date": "2019"
    }
  ]
};

const ALL_MOVIES = [...MOVIES_DATA.featured, ...MOVIES_DATA.popular];