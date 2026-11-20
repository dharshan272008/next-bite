export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  description: string;
  ingredients: string[];
  steps: string[];
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
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Fresh basil", "Olive oil"],
    steps: ["Heat the oven with a pizza stone or tray.", "Stretch the dough and add tomato sauce, mozzarella, and basil.", "Drizzle with olive oil and bake until crisp and golden.", "Slice and serve hot."],
  },
  {
    id: "creamy-tomato-pasta",
    title: "Creamy Tomato Pasta",
    emoji: "🍝",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Italian",
    description: "A silky tomato sauce, a little cream, and lots of parmesan.",
    ingredients: ["Pasta", "Crushed tomatoes", "Heavy cream", "Parmesan", "Garlic"],
    steps: ["Boil the pasta in salted water.", "Cook garlic, then add tomatoes and simmer.", "Stir in cream and parmesan.", "Toss with pasta and serve."],
  },
  {
    id: "rainbow-poke-bowl",
    title: "Rainbow Poke Bowl",
    emoji: "🥗",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Hawaiian",
    description: "Fresh, colorful toppings over rice with a punchy sesame dressing.",
    ingredients: ["Cooked rice", "Cucumber", "Avocado", "Carrots", "Sesame dressing"],
    steps: ["Divide warm rice between bowls.", "Arrange cucumber, avocado, and carrots on top.", "Drizzle with sesame dressing.", "Serve immediately."],
  },
  {
    id: "golden-chicken-curry",
    title: "Golden Chicken Curry",
    emoji: "🍛",
    minutes: 45,
    difficulty: "Medium",
    cuisine: "Indian",
    description: "Warm spices and tender chicken in a comforting coconut sauce.",
    ingredients: ["Chicken", "Coconut milk", "Curry powder", "Onion", "Tomatoes"],
    steps: ["Brown the chicken and soften the onion.", "Add curry powder and tomatoes.", "Pour in coconut milk and simmer until tender.", "Serve with rice."],
  },
  {
    id: "fluffy-pancakes",
    title: "Fluffy Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "American",
    description: "A tall, buttery stack made for slow mornings and maple syrup.",
    ingredients: ["Flour", "Milk", "Egg", "Butter", "Maple syrup"],
    steps: ["Whisk the dry ingredients in one bowl.", "Mix milk and egg, then combine with the dry ingredients.", "Cook spoonfuls in a buttered pan until bubbles form.", "Flip, finish cooking, and serve with syrup."],
  },
  {
    id: "veggie-tacos",
    title: "Crispy Veggie Tacos",
    emoji: "🌮",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "Mexican",
    description: "Crunchy roasted vegetables, bright salsa, and a squeeze of lime.",
    ingredients: ["Corn tortillas", "Bell peppers", "Black beans", "Salsa", "Lime"],
    steps: ["Roast the vegetables until browned.", "Warm the tortillas and fill with vegetables and beans.", "Top with salsa and lime juice.", "Serve the tacos warm."],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
