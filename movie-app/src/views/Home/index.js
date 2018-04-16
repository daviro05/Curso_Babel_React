import React from 'react'
import Movie from '../../components/Movie'

const Home = () => (
    <section className="container main home">
        <header className="row">
            <div className="col-12">
                <h1>Coming Soon</h1>
            </div>
        </header>
        <div className="row movie-list-wrapper">
            {movieList.map((movie, i) => {
                return (
                    <Movie
                        key={i}
                        {...movie}
                    />
                )
            })}
        </div>
    </section>
)

export default Home

const movieList = [
    {
      "vote_count": 1084,
      "id": 333339,
      "video": false,
      "vote_average": 8,
      "title": "Ready Player One",
      "popularity": 177.999682,
      "poster_path": "/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
      "original_language": "en",
      "original_title": "Ready Player One",
      "genre_ids": [
        12,
        878,
        28
      ],
      "backdrop_path": "/q7fXcrDPJcf6t3rzutaNwTzuKP1.jpg",
      "adult": false,
      "overview": "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
      "release_date": "2018-03-28"
    },
    {
      "vote_count": 316,
      "id": 447332,
      "video": false,
      "vote_average": 7.4,
      "title": "A Quiet Place",
      "popularity": 126.976483,
      "poster_path": "/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
      "original_language": "en",
      "original_title": "A Quiet Place",
      "genre_ids": [
        18,
        27,
        53,
        878
      ],
      "backdrop_path": "/roYyPiQDQKmIKUEhO912693tSja.jpg",
      "adult": false,
      "overview": "A family is forced to live in silence while hiding from creatures that hunt by sound.",
      "release_date": "2018-04-05"
    },
    {
      "vote_count": 0,
      "id": 299536,
      "video": false,
      "vote_average": 0,
      "title": "Avengers: Infinity War",
      "popularity": 82.904746,
      "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      "original_language": "en",
      "original_title": "Avengers: Infinity War",
      "genre_ids": [
        12,
        878,
        14,
        28
      ],
      "backdrop_path": "/xmgAsda5sPNpx5ghJibJ80S7Pfx.jpg",
      "adult": false,
      "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      "release_date": "2018-04-25"
    },
    {
      "vote_count": 292,
      "id": 429351,
      "video": false,
      "vote_average": 4.9,
      "title": "12 Strong",
      "popularity": 58.113204,
      "poster_path": "/j18021qCeRi3yUBtqd2UFj1c0RQ.jpg",
      "original_language": "en",
      "original_title": "12 Strong",
      "genre_ids": [
        10752,
        18,
        36
      ],
      "backdrop_path": "/wacEk5YSNE41QeKseilyytksXmv.jpg",
      "adult": false,
      "overview": "A team of CIA agents and special forces head into Afghanistan in the aftermath of the September 11th attacks in an attempt to dismantle the Taliban.",
      "release_date": "2018-01-18"
    },
    {
      "vote_count": 602,
      "id": 396371,
      "video": false,
      "vote_average": 6.9,
      "title": "Molly's Game",
      "popularity": 56.945824,
      "poster_path": "/in43bQ7k0ttr666IPP94IlbQbTR.jpg",
      "original_language": "en",
      "original_title": "Molly's Game",
      "genre_ids": [
        80,
        18
      ],
      "backdrop_path": "/yvbXGWjg30sj7rohEZvSe90jSJC.jpg",
      "adult": false,
      "overview": "Molly Bloom, a young skier and former Olympic hopeful becomes a successful entrepreneur (and a target of an FBI investigation) when she establishes a high-stakes, international poker game.",
      "release_date": "2017-12-21"
    },
    {
      "vote_count": 19,
      "id": 427641,
      "video": false,
      "vote_average": 5.6,
      "title": "Rampage",
      "popularity": 48.505613,
      "poster_path": "/30oXQKwibh0uANGMs0Sytw3uN22.jpg",
      "original_language": "en",
      "original_title": "Rampage",
      "genre_ids": [
        28,
        12,
        878
      ],
      "backdrop_path": "/e3jCOFC14wC0VKMUHuIA9IfeALs.jpg",
      "adult": false,
      "overview": "Primatologist Davis Okoye shares an unshakable bond with George, the extraordinarily intelligent, silverback gorilla who has been in his care since birth.  But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size.  To make matters worse, it’s soon discovered there are other similarly altered animals.  As these newly created alpha predators tear across North America, destroying everything in their path, Okoye teams with a discredited genetic engineer to secure an antidote, fighting his way through an ever-changing battlefield, not only to halt a global catastrophe but to save the fearsome creature that was once his friend.",
      "release_date": "2018-04-12"
    },
    {
      "vote_count": 159,
      "id": 476926,
      "video": false,
      "vote_average": 5.6,
      "title": "The Titan",
      "popularity": 34.028939,
      "poster_path": "/FBfA7V41ezvP1UTx9BTUS2BLsq.jpg",
      "original_language": "en",
      "original_title": "The Titan",
      "genre_ids": [
        878
      ],
      "backdrop_path": "/h45LDCoPWmFMTTb7taGhOPBIGKJ.jpg",
      "adult": false,
      "overview": "On a bleak future Earth, a soldier endures a radical genetic transformation to save humanity. But his wife fears he's becoming more creature than man.",
      "release_date": "2018-03-30"
    },
    {
      "vote_count": 139,
      "id": 398181,
      "video": false,
      "vote_average": 6.8,
      "title": "You Were Never Really Here",
      "popularity": 31.958143,
      "poster_path": "/urIWmqLrIlFAHNJ7dOKHsybXbOT.jpg",
      "original_language": "en",
      "original_title": "You Were Never Really Here",
      "genre_ids": [
        18,
        9648,
        53
      ],
      "backdrop_path": "/7D0V9JtFc5l0YbVguPWi9wTRJ7G.jpg",
      "adult": false,
      "overview": "A traumatised veteran, unafraid of violence, tracks down missing girls for a living. When a job spins out of control, Joe's nightmares overtake him as a conspiracy is uncovered leading to what may be his death trip or his awakening.",
      "release_date": "2017-11-08"
    },
    {
      "vote_count": 1689,
      "id": 391713,
      "video": false,
      "vote_average": 7.4,
      "title": "Lady Bird",
      "popularity": 27.192024,
      "poster_path": "/iySFtKLrWvVzXzlFj7x1zalxi5G.jpg",
      "original_language": "en",
      "original_title": "Lady Bird",
      "genre_ids": [
        35,
        18
      ],
      "backdrop_path": "/udx1jnORg79bAGcHNyl1ILsuP5u.jpg",
      "adult": false,
      "overview": "A California high school student plans to escape from her family and small town by going to college in New York.",
      "release_date": "2017-09-08"
    },
    {
      "vote_count": 1,
      "id": 460019,
      "video": false,
      "vote_average": 7,
      "title": "Truth or Dare",
      "popularity": 24.622528,
      "poster_path": "/kdkNaQYZ7dhM80LsnAGKpH8ca2g.jpg",
      "original_language": "en",
      "original_title": "Truth or Dare",
      "genre_ids": [
        53,
        27
      ],
      "backdrop_path": "/eQ5xu2pQ5Kergubto5PbbUzey28.jpg",
      "adult": false,
      "overview": "A harmless game of “Truth or Dare” among friends turns deadly when someone—or something—begins to punish those who tell a lie—or refuse the dare.",
      "release_date": "2018-04-12"
    },
    {
      "vote_count": 75,
      "id": 399174,
      "video": false,
      "vote_average": 7.8,
      "title": "Isle of Dogs",
      "popularity": 23.913909,
      "poster_path": "/c0nUX6Q1ZB0P2t1Jo6EeFSVnOGQ.jpg",
      "original_language": "en",
      "original_title": "Isle of Dogs",
      "genre_ids": [
        12,
        35,
        16
      ],
      "backdrop_path": "/5YtXsLG9ncjjFyGZjoeV31CGf01.jpg",
      "adult": false,
      "overview": "In the future, an outbreak of canine flu leads the mayor of a Japanese city to banish all dogs to an island that's a garbage dump. The outcasts must soon embark on an epic journey when a 12-year-old boy arrives on the island to find his beloved pet.",
      "release_date": "2018-03-23"
    },
    {
      "vote_count": 1,
      "id": 434355,
      "video": false,
      "vote_average": 6,
      "title": "Taxi 5",
      "popularity": 23.390452,
      "poster_path": "/4DISl71dXruQy4NBucOXGDSScrt.jpg",
      "original_language": "fr",
      "original_title": "Taxi 5",
      "genre_ids": [
        35,
        28
      ],
      "backdrop_path": "/s9d4lrsjdTp7AT79Q0AesNomt95.jpg",
      "adult": false,
      "overview": "",
      "release_date": "2018-04-11"
    },
    {
      "vote_count": 34,
      "id": 437557,
      "video": false,
      "vote_average": 6,
      "title": "Blockers",
      "popularity": 21.719708,
      "poster_path": "/9qKMYfiJTcUQbuBl82yxrmLSCX5.jpg",
      "original_language": "en",
      "original_title": "Blockers",
      "genre_ids": [
        35
      ],
      "backdrop_path": "/fqPIDVSTl6f1l02fb2rRVYPl5JE.jpg",
      "adult": false,
      "overview": "When three parents discover their daughters’ pact to lose their virginity at prom, they launch a covert one-night operation to stop the teens from sealing the deal.",
      "release_date": "2018-03-30"
    },
    {
      "vote_count": 0,
      "id": 454619,
      "video": false,
      "vote_average": 0,
      "title": "Overboard",
      "popularity": 21.36615,
      "poster_path": "/1Dl0EwihD1KR2embkJB1rPIT9C2.jpg",
      "original_language": "en",
      "original_title": "Overboard",
      "genre_ids": [
        10749,
        35
      ],
      "backdrop_path": "/yCfXPtYz1CtPw4bbjAZ8xwXenNS.jpg",
      "adult": false,
      "overview": "A spoiled, wealthy yacht owner is thrown overboard and becomes the target of revenge from his mistreated employee. A remake of the 1987 comedy.",
      "release_date": "2018-04-13"
    },
    {
      "vote_count": 121,
      "id": 442064,
      "video": false,
      "vote_average": 5.2,
      "title": "Proud Mary",
      "popularity": 20.019039,
      "poster_path": "/5luceoVMU2FzWuyty7mZFcSY5ZW.jpg",
      "original_language": "en",
      "original_title": "Proud Mary",
      "genre_ids": [
        53,
        28,
        80
      ],
      "backdrop_path": "/txKjPn6yuqvmdc7YGTnh62EM5Cd.jpg",
      "adult": false,
      "overview": "A hit woman kills a drug boss only to learn that she has left a boy orphaned. A year later, she saves the boy from a dangerous life on the street but finds herself unable to give the boy or herself a fresh start.",
      "release_date": "2018-01-12"
    },
    {
      "vote_count": 1,
      "id": 399248,
      "video": false,
      "vote_average": 0,
      "title": "Beirut",
      "popularity": 18.862517,
      "poster_path": "/xYWYsiTlCpnBF2rw2ie1XwKvxGO.jpg",
      "original_language": "en",
      "original_title": "Beirut",
      "genre_ids": [
        28,
        53
      ],
      "backdrop_path": "/qbVRRq9qhqVxeaFUBJoyyf94JN2.jpg",
      "adult": false,
      "overview": "A former U.S. diplomat returns to service in order to save a former colleague in Beirut.",
      "release_date": "2018-04-11"
    },
    {
      "vote_count": 210,
      "id": 445571,
      "video": false,
      "vote_average": 7.3,
      "title": "Game Night",
      "popularity": 18.745384,
      "poster_path": "/1wS89vns6cseCn4UHSqj97xKEKW.jpg",
      "original_language": "en",
      "original_title": "Game Night",
      "genre_ids": [
        9648,
        35,
        80,
        53
      ],
      "backdrop_path": "/jknYekTVH1n7doNVj5wiCMKhx7u.jpg",
      "adult": false,
      "overview": "Max and Annie's weekly game night gets kicked up a notch when Max's brother Brooks arranges a murder mystery party -- complete with fake thugs and federal agents. So when Brooks gets kidnapped, it's all supposed to be part of the game. As the competitors set out to solve the case, they start to learn that neither the game nor Brooks are what they seem to be. The friends soon find themselves in over their heads as each twist leads to another unexpected turn over the course of one chaotic night.",
      "release_date": "2018-02-22"
    },
    {
      "vote_count": 180,
      "id": 402897,
      "video": false,
      "vote_average": 7.4,
      "title": "The Death of Stalin",
      "popularity": 18.32295,
      "poster_path": "/xAKqG5SpsHU7vI6Fh4UYxFrDDZZ.jpg",
      "original_language": "en",
      "original_title": "The Death of Stalin",
      "genre_ids": [
        35,
        36
      ],
      "backdrop_path": "/tx5TFMF85qU2Ug4TRIGQZbDpzFA.jpg",
      "adult": false,
      "overview": "Stalin's core team of ministers tussle for control following the Russian leader's stroke in 1953.",
      "release_date": "2017-10-20"
    },
    {
      "vote_count": 206,
      "id": 411741,
      "video": false,
      "vote_average": 6.7,
      "title": "Ingrid Goes West",
      "popularity": 17.470104,
      "poster_path": "/3LEyW11onDltXHo0L1X23j9Nnvg.jpg",
      "original_language": "en",
      "original_title": "Ingrid Goes West",
      "genre_ids": [
        18,
        35
      ],
      "backdrop_path": "/enwPgakYeduofhVxvS2KGR0nIpm.jpg",
      "adult": false,
      "overview": "Ingrid becomes obsessed with a social network star named Taylor Sloane who seemingly has a perfect life. But when Ingrid decides to drop everything and move west to be Taylor's friend, her behaviour turns unsettling and dangerous.",
      "release_date": "2017-08-11"
    },
    {
      "vote_count": 13,
      "id": 429417,
      "video": false,
      "vote_average": 6.7,
      "title": "Ghost Stories",
      "popularity": 16.724293,
      "poster_path": "/3Hv0jeuhQzz1tSjYwiLDHAMtDOl.jpg",
      "original_language": "en",
      "original_title": "Ghost Stories",
      "genre_ids": [
        18,
        27
      ],
      "backdrop_path": "/7pxHYehQYh953JKhGabjehRx7M1.jpg",
      "adult": false,
      "overview": "Arch sceptic Professor Phillip Goodman embarks upon a terror filled quest when he stumbles across a long-lost file containing details of three cases of inexplicable 'hauntings'.",
      "release_date": "2018-04-13"
    }
  ]