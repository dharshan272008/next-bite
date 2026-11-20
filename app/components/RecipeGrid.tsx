"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const matches = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(normalizedQuery) ||
      recipe.cuisine.toLowerCase().includes(normalizedQuery),
  );

  return (
    <>
      <label className="recipe-search">
        <span>Search recipes or cuisines</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try pasta or Italian"
        />
      </label>

      {matches.length > 0 ? (
        <div className="recipe-grid">
          {matches.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="no-results" role="status">
          No recipes match &ldquo;{query}&rdquo;. Try another title or cuisine.
        </p>
      )}
    </>
  );
}
