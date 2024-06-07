
import beachimg1 from "../images/beachimg1.jpg";
import forestimg2 from "../images/forestimg2.jpg";
import templeimg4 from "../images/teaimg5.jpg";
import teaimg5 from "../images/teaimg5.jpg" ;
import mountainimg3 from "../images/mountainimg3.jpg";

const tours = [
  {
    id: "01",
    title: "Nilaweli Beach",
    city: "Trinco",
    distance: 500,
    address: "Trincomalee in Sri Lanka",
    price: 30,
    maxGroupSize: 8,
    desc: "Nilaveli Beach: Pristine sands, clear waters, ideal for snorkeling and serene relaxation.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: beachimg1,
    featured: true,
  },
  {
    id: "02",
    title: "Ancient Temple",
    city: "Anuradhapura",
    distance: 500,
    address: "Anuradhapura in Sri Lanka",
    price: 99,
    maxGroupSize: 8,
    desc: "An ancient temple: Historic architecture, sacred rituals, ornate carvings, spiritual ambiance, and cultural heritage reflecting centuries-old traditions.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: templeimg4,
    featured: true,
  },
  {
    id: "03",
    title: "Up Hills",
    city: "Nuwara Eliya",
    distance: 500,
    address: "Nuwara Eliya in Sri Lanka",
    price: 99,
    maxGroupSize: 8,
    desc: "Uphill landscapes: Majestic vistas, lush greenery, crisp air, winding trails, challenging climbs, and tranquil escapes amid nature's beauty.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: teaimg5,
    featured: false,
  },
  {
    id: "04",
    title: "Mountain",
    city: "Hatton",
    distance: 500,
    address: "Hatton in Sri Lanka",
    price: 99,
    maxGroupSize: 8,
    desc: "Mountains: Towering peaks, rugged terrain, breathtaking views, diverse wildlife, alpine flora, serene hikes, and a majestic natural presence.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: mountainimg3,
    featured: true,
  },
  {
    id: "05",
    title: "Sinharaja Forest",
    city: "South West",
    distance: 100,
    address: "South West in Sri Lanka",
    price: 99,
    maxGroupSize: 5,
    desc: "Sinharaja Forest: Dense rainforest, biodiversity hotspot, endemic species, lush vegetation, serene trails, UNESCO site, and vibrant ecosystem.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: forestimg2,
    featured: true,
  },
  
 
];

export default tours;
