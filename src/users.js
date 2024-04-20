import aryaImg from "./assets/arya.jpg";
import jonImg from "./assets/jon.jpg";
import tyrionImg from "./assets/tyrion.jpeg";
import daenerysImg from "./assets/daenerys.jpg";

export const USERS = [
  {
    id: 1,
    name: "JON SNOW",
    profilePicture: jonImg,
    age: 28,
    location: "The Wall",
    followers: 2000,
    likes: 40000,
    photos: 25,
  },
  {
    id: 2,
    name: "Daenerys Targaryen",
    profilePicture: daenerysImg,
    age: 34,
    location: "Mereen",
    followers: 155000,
    likes: 200000,
    photos: 105,
  },
  {
    id: 3,
    name: "Arya Stark",
    profilePicture: aryaImg,
    age: 16,
    location: "Bravos",
    followers: 5,
    likes: 300,
    photos: 55,
  },
  {
    id: 4,
    name: "Tyrion Lannister",
    profilePicture: tyrionImg,
    age: 28,
    location: "Mereen",
    followers: 20000,
    likes: 90000,
    photos: 150,
  },
];
