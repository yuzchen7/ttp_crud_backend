const db = require('./db');
const { Campuses, Students } = require('./db/models');

const CampuesesSeed = [
    {
        name : 'Brooklyn College', 
        imageUrl : 'https://www.parchment.com/u/logo/institution/34234.png',
        address : '2900 Bedford Ave, Brooklyn, NY 11210',
        description : 'very good campuse in the brooklyn area.'
    },
    
    {
        name : 'Hunter College', 
        imageUrl : 'https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg',
        address : '695 Park Ave, New York, NY 10065',
        description : 'very good campuse in the cuny area.'
    }
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