import { Restaurants } from "@/types/restaurant";

export const restaurants: Restaurants = [
  {
    id: "1",
    name: "Nome de teste",
    recomendations: [
      {
        image: {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDbvC2jrhmmrjhhLwcBpsr_TlB3vvDxo-_A&s",
          alt: "alt da imagem",
        },
        title: "Espeto de frango com bacon",
        price: "R$29,90",
      },
      {
        image: {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDbvC2jrhmmrjhhLwcBpsr_TlB3vvDxo-_A&s",
          alt: "alt da imagem",
        },
        title: "Espeto de frango com bacon",
        price: "R$29,90",
      },
    ],
    sections: [
      {
        title: "Recomendações ",
        items: [
          {
            image: {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDbvC2jrhmmrjhhLwcBpsr_TlB3vvDxo-_A&s",
              alt: "alt da imagem",
            },
            title: "Espeto de frango com bacon",
            description:
              "Espeto de 200g, Proção de arroz, Farofa, Mandioca cozida",
            price: "R$29,90",
          },
          {
            image: {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDbvC2jrhmmrjhhLwcBpsr_TlB3vvDxo-_A&s",
              alt: "alt da imagem",
            },
            title: "Espeto de frango com bacon",
            description:
              "Espeto de 200g, Proção de arroz, Farofa, Mandioca cozida",
            price: "R$29,90",
          },
        ],
      },
      {
        title: "chefe",
        items: [
          {
            image: {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDbvC2jrhmmrjhhLwcBpsr_TlB3vvDxo-_A&s",
              alt: "alt da imagem",
            },
            title: "Espeto de frango com bacon",
            description:
              "Espeto de 200g, Proção de arroz, Farofa, Mandioca cozida",
            price: "R$29,90",
          },
        ],
      },
    ],
  },
];
