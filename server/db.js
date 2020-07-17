const db = [
    {
        id: "5xc1",
        username: "mbolton",
        email: "mbolton@initech.com",
        password: "abc123",
        tvshows: [
                {
                  "id": "usc000lv5e",
                  "name": "Under the Dome",
                  "genres": [
                    "Drama",
                    "Science-Fiction",
                    "Thriller"
                  ],
                  "premiered": "2013-06-24",
                  "status": "Ended",
                  "rating":{"average":6.9}
                },
                {
                    "id": "2",
                    "name": "Person of Interest",
                    "genres": [
                      "Action",
                      "Crime",
                      "Science-Fiction"
                    ],
                    "premiered": "2011-09-22",
                    "status": "Ended",
                    "rating":{"average":6.7}

                  },
        ]
    },
    {
        id: "5xc2",
        username: "blumbergh",
        email: "wlumbergh@initech.com",
        password: "bossman1",
        tvshows: [
            {
                "id": "3",
                "name": "Bitten",
                "genres": [
                  "Drama",
                  "Horror",
                  "Romance"
                ],
                "premiered": "2014-01-11",
                "status": "Ended",
                "rating":{"average":6.8}

              },
        ]
    },
    
    {
        id: "5xc3",
        username: "mwaddams",
        email: "mwaddams@zmail.com",
        password: "swingline1",
        tvshows: []
    }
  
]

module.exports = db
