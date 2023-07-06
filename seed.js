const db = require('./db');
const { Campuses, Students } = require('./db/models');

const CampuesesSeed = [
    {
        name : 'Brooklyn College', 
        imageUrl : 'https://www.parchment.com/u/logo/institution/34234.png',
        address : '2900 Bedford Ave, Brooklyn, NY 11210',
        description : "Brooklyn College is a public university in Brooklyn in New York City. It is part of the City University of New York system and enrolls over 17,000 undergraduate and over 2,800 graduate students on a 35-acre campus as of 2019. (From wekipideia.com)"
    },
    
    {
        name : 'Hunter College', 
        imageUrl : 'https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg',
        address : '695 Park Ave, New York, NY 10065',
        description : "Hunter College is a public university in New York City. It is one of the constituent colleges of the City University of New York and offers studies in more than one hundred undergraduate and postgraduate fields across five schools. It also administers Hunter College High School and Hunter College Elementary School. (From wekipideia.com)"
    },

    {
        name: "John Jay College of Criminal Justice",
        imageUrl: "https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/home-preview/colleges/layout/admissions-2021-768x402.jpg",
        address: "524 W 59th St, New York, NY 10019",
        description: "The John Jay College of Criminal Justice (John Jay) is a public college focused on criminal justice and located in New York City. It is a senior college of the City University of New York (CUNY). John Jay was founded as the only liberal arts college with a criminal justice and forensic focus in the United States. (From wekipideia.com)"
    },

    {
        name: "The City College of New York",
        imageUrl: "https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/home-preview/colleges/layout/City-College-Photo-Request-2017_48_CarlosParker_HarrisHall-768x402.jpg",
        address: "160 Convent Ave, New York, NY 10031",
        description: "The City College of the City University of New York (also known as the City College of New York, or simply City College or CCNY) is a public research university within the City University of New York (CUNY) system in New York City. Founded in 1847, City College was the first free public institution of higher education in the United States. It is the oldest of CUNY's 25 institutions of higher learning and is considered its flagship college. (From wekipideia.com)"
    },
];

const StudentsSeed = [
    {
        firstName : 'john',
        lastName : 'doe',
        email : 'upchh@example.com',
        imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_xFMuZg3vHRrbYQNsKJvA-OwYAgNAOjsb2xWiTF4EjI1-aN4pmyZfiFlkmTKSydO9R0&usqp=CAU',
        gpa : 3.0,
        campusId : 1
    },

    {
        firstName : 'kai',
        lastName : 'yu',
        email : 'cnjaos@example.com',
        imageUrl : 'https://t4.ftcdn.net/jpg/01/20/10/39/360_F_120103906_MNhlpXOPI3xKidkvnhAhMWc7MwfktVf6.jpg',
        gpa : 3.3,
        campusId : 1
    }, 

    {
        firstName : 'wu',
        lastName : 'wang',
        email : 'csaincpo@example.com',
        imageUrl : 'https://t4.ftcdn.net/jpg/01/20/10/39/360_F_120103906_MNhlpXOPI3xKidkvnhAhMWc7MwfktVf6.jpg',
        gpa : 2.17,
        campusId : 2
    }
];

const seed = async () => {
    await Campuses.bulkCreate(CampuesesSeed);
    await Students.bulkCreate(StudentsSeed);
};
  
seed().then(() => process.exit());