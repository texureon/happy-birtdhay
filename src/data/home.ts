import type { Author, CardItem } from "../types";
import avatar from "../assets/images/avatar.png";
import friendImage from "../assets/images/friend.jpg";
import journeyImage from "../assets/images/journey.jpg";
import loveImage from "../assets/images/love.jpg";

// Ubah isi file ini untuk mengganti nama, pesan pembuka, dan kartu.
export const author: Author = {
  name: "Joeshyra",
  avatar,
  intro:
    "Halo, terima kasih sudah membuka website ini. Saya sudah berhenti, tapi dulu saya pernah janji mau membuat ucapan ulang tahun lewat website. Jadi ini saya tepati sekarang.",
};

export const cards: CardItem[] = [
  {
    slug: "friend",
    title: "Friend",
    description: "Tentang tawa yang tak pernah butuh alasan.",
    image: friendImage,
    imagePosition: "50% 35%",
  },
  {
    slug: "love",
    title: "Love",
    description: "Tentang dekat, jauh, dan hal-hal yang tak sempat dikatakan.",
    image: loveImage,
    imagePosition: "50% 30%",
  },
  {
    slug: "journey",
    title: "Journey",
    description: "Tentang jalan yang ditempuh bersama, sepelan apa pun.",
    image: journeyImage,
    requires: ["friend", "love"],
  },
];
