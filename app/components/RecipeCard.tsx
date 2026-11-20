import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="recipe-card">
      <div className="recipe-card__art" role="img" aria-label={recipe.title}>
        <span aria-hidden="true">{recipe.emoji}</span>
        <span className="recipe-card__cuisine">{recipe.cuisine}</span>
      </div>
      <div className="recipe-card__content">
        <div className="recipe-card__heading">
          <h3>{recipe.title}</h3>
          <span className="recipe-card__difficulty">{recipe.difficulty}</span>
        </div>
        <p>{recipe.description}</p>
        <div className="recipe-card__meta">
          <span aria-label={`${recipe.minutes} minutes`}>
            <span aria-hidden="true">◷</span> {recipe.minutes} min
          </span>
          <span className="recipe-card__arrow" aria-hidden="true">
            ↗
          </span>
        </div>
      </div>
    </article>
  );
}
