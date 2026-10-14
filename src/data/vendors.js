const vendors = [
  {
    id: "my-cafe",
    name: "Ian Cafe",
    location: "Mahallah Salahuddin, Block F",
    openHours: "7:00 am - 10:00 pm",
    isOpen: true,
    menu: [
      {
        id: "ian-1",
        name: "Nasi Tomato",
        description: "Nasi tomato with Ayam Masak Merah",
        price: 7.5,
        category: "Rice",
        available: true,
      },
      {
        id: "ian-2",
        name: "Mee Goreng",
        description: "Fried noodles with vegetables",
        price: 6,
        category: "Noodles",
        available: true,
      },
      {
        id: "ian-3",
        name: "Iced Milo",
        description: "Cold chocolate malt drink",
        price: 2.5,
        category: "Drinks",
        available: false,
      },
    ],
  },
  {
    id: "kafe-siddiq",
    name: "Kafe Mahallah Siddiq",
    location: "Mahallah Siddiq, Block B",
    openHours: "8:00 am - 9:00 pm",
    isOpen: true,
    menu: [
      {
        id: "siddiq-1",
        name: "Chicken Rice",
        description: "Rice served with chicken",
        price: 8,
        category: "Rice",
        available: true,
      },
      {
        id: "siddiq-2",
        name: "Iced Lemon Tea",
        description: "Iced tea with refreshing lemon",
        price: 3,
        category: "Drinks",
        available: true,
      },
    ],
  },
];

export default vendors;
