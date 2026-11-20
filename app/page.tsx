import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">Good food, no fuss</p>
          <h1 id="hero-title">
            Find your <em>next bite.</em>
          </h1>
          <p className="hero__description">
            A little inspiration for whatever you&apos;re craving. Pick a recipe,
            gather around, and make something delicious.
          </p>
        </div>
        <div className="hero__stamp" aria-hidden="true">
          made with
          <br />
          a little
          <br />
          love ✳
        </div>
      </section>

      <section className="recipes-section" id="recipes" aria-labelledby="recipes-title">
        <div className="section-heading">
          <h2 id="recipes-title">A taste of something good</h2>
          <p>{recipes.length} recipes to get you started</p>
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <footer className="site-footer">
        Made for hungry people, by NextBites.
      </footer>
    </main>
  );
}
