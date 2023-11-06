

export interface Property {
    id: number;
    images: string[];
    price: number;
    hectares: number;
    location: string;
    city: string;
    country: string;
    availability: string;
}

type Tabs = {
    name: string
    img: string
}

export const tabImages: Tabs[] = [
    {
        name: "Islands",
        img: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
    },
    {
        name: "Islands",
        img: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    }, {
        name: "Islands",
        img: "https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg"
    }, {
        name: "Islands",
        img: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
    }, {
        name: "Islands",
        img: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
    }, {
        name: "Islands",
        img: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
    }, {
        name: "Islands",
        img: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
    }, {
        name: "Islands",
        img: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
    }, {
        name: "Islands",
        img: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
    }, {
        name: "Islands",
        img: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
    },
    {
      name: "Islands",
      img: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
  },
  


];

export const airbnbData: Property[] = [
    {
      id: 1,
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'house1_2.jpg',
        'house1_3.jpg',
      ],
      price: 150,
      hectares: 0.5,
      location: 'Tranquil Cottage',
      city: 'Los Angeles',
      country: 'USA',
      availability: 'Nov 1-20',
    },
    {
      id: 2,
      images: [
        'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'house2_2.jpg',
        'house2_3.jpg',
      ],
      price: 250,
      hectares: 2,
      location: 'Luxury Villa',
      city: 'Bali',
      country: 'Indonesia',
      availability: 'Feb 1-10',
    },
    {
      id: 3,
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'house3_2.jpg',
        'house3_3.jpg',
      ],
      price: 120,
      hectares: 1,
      location: 'Cozy Cabin',
      city: 'Aspen',
      country: 'USA',
      availability: 'Nov 20-30',
    },
    {
      id: 4,
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'house4_2.jpg',
        'house4_3.jpg',
      ],
      price: 300,
      hectares: 5,
      location: 'Secluded Mansion',
      city: 'Provence',
      country: 'France',
      availability: 'Dec 15-25',
    },
    {
      id: 5,
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'house5_2.jpg',
        'house5_3.jpg',
      ],
      price: 80,
      hectares: 0.3,
      location: 'Charming Cottage',
      city: 'Cotswolds',
      country: 'UK',
      availability: 'Nov 10-20',
    },
    {
      id: 6,
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'house6_2.jpg',
        'house6_3.jpg',
      ],
      price: 180,
      hectares: 1.5,
      location: 'Riverside Retreat',
      city: 'Sydney',
      country: 'Australia',
      availability: 'Dec 01-10',
    },
    {
      id: 7,
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'house7_2.jpg',
        'house7_3.jpg',
      ],
      price: 120,
      hectares: 1,
      location: 'Mountain Cabin',
      city: 'Denver',
      country: 'USA',
      availability: 'Nov 05-15',
    },
    {
      id: 8,
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'house8_2.jpg',
        'house8_3.jpg',
      ],
      price: 200,
      hectares: 2.5,
      location: 'Lakeside Villa',
      city: 'Geneva',
      country: 'Switzerland',
      availability: 'Dec 10-20',
    },
    {
      id: 9,
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'house10_2.jpg',
        'house10_3.jpg',
      ],
      price: 300,
      hectares: 3,
      location: 'Rustic Farmhouse',
      city: 'Tuscany',
      country: 'Italy',
      availability: 'Nov 25-Dec 05',
    },
    {
      id: 11,
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'house11_2.jpg',
        'house11_3.jpg',
      ],
      price: 110,
      hectares: 0.6,
      location: 'Beachfront Bungalow',
      city: 'Bora Bora',
      country: 'French Polynesia',
      availability: 'Nov 08-18',
    },
    {
      id: 12,
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'house12_2.jpg',
        'house12_3.jpg',
      ],
      price: 260,
      hectares: 1.8,
      location: 'Mountain View Lodge',
      city: 'Banff',
      country: 'Canada',
      availability: 'Dec 05-15',
    },
    {
      id: 13,
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'house13_2.jpg',
        'house13_3.jpg',
      ],
      price: 140,
      hectares: 1.2,
      location: 'Cabin in the Woods',
      city: 'Portland',
      country: 'USA',
      availability: 'Nov 18-28',
    },
    {
      id: 14,
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'house14_2.jpg',
        'house14_3.jpg',
      ],
      price: 170,
      hectares: 1.3,
      location: 'Desert Oasis',
      city: 'Sedona',
      country: 'USA',
      availability: 'Nov 09-19',
    },
    {
      id: 15,
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'house15_2.jpg',
        'house15_3.jpg',
      ],
      price: 190,
      hectares: 2.2,
      location: 'Vineyard Estate',
      city: 'Napa Valley',
      country: 'USA',
      availability: 'Dec 20-30',
    },
    // Add more property data as needed
  ];
  