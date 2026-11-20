export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  description: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    description: "Crisp, chewy crust topped with tomato, mozzarella, and basil.",
  },
  {
    id: "creamy-tomato-pasta",
    title: "Creamy Tomato Pasta",
    emoji: "🍝",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Italian",
    description: "A silky tomato sauce, a little cream, and lots of parmesan.",
  },
  {
    id: "rainbow-poke-bowl",
    title: "Rainbow Poke Bowl",
    emoji: "🥗",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Hawaiian",
    description: "Fresh, colorful toppings over rice with a punchy sesame dressing.",
  },
  {
    id: "golden-chicken-curry",
    title: "Golden Chicken Curry",
    emoji: "🍛",
    minutes: 45,
    difficulty: "Medium",
    cuisine: "Indian",
    description: "Warm spices and tender chicken in a comforting coconut sauce.",
  },
  {
    id: "fluffy-pancakes",
    title: "Fluffy Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "American",
    description: "A tall, buttery stack made for slow mornings and maple syrup.",
  },
  {
    id: "veggie-tacos",
    title: "Crispy Veggie Tacos",
    emoji: "🌮",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "Mexican",
    description: "Crunchy roasted vegetables, bright salsa, and a squeeze of lime.",
  },
];
