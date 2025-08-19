export interface Restaurant {
  id: string;
  name: string;
  recomendations: {
    image: {
      src: string;
      alt: string;
    };
    title: string;
    price: string;
  }[];
  sections: {
    title: string;
    items: {
      image: {
        src: string;
        alt: string;
      };
      title: string;
      description: string;
      price: string;
    }[];
  }[];
}

// se for um array
export type Restaurants = Restaurant[];
