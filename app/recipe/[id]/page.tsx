import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

export const instant = false;

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="page-shell recipe-detail">
      <Link className="back-link" href="/#recipes">← Back to recipes</Link>
      <div className="recipe-detail__hero">
        <div className="recipe-detail__art" role="img" aria-label={recipe.title}>
          {recipe.emoji}
        </div>
        <div className="recipe-detail__intro">
          <p className="eyebrow">{recipe.cuisine}</p>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <div className="recipe-detail__meta">
            <span>◷ {recipe.minutes} min</span>
            <span>{recipe.difficulty}</span>
          </div>
        </div>
      </div>

      <div className="recipe-detail__sections">
        <section>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Steps</h2>
          <ol>
            {recipe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
