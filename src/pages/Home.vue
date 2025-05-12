<template>
  <div class="home-grid">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-text">
        <h1>Bienvenue sur AutoG</h1>
        <p>Le blog des passionnés d’automobile, performance et innovation.</p>
        <a href="#articles" class="cta">Explorer les articles</a>
      </div>
    </section>

    <!-- CATÉGORIES -->
    <section class="bentobox categories-box">
      <h2 class="box-title">Catégories populaires</h2>
      <div class="categories">
        <div class="category">🚗 Sportives</div>
        <div class="category">⚡ Électriques</div>
        <div class="category">🛞 SUV</div>
        <div class="category">🚙 Anciennes</div>
        <div class="category">🎨 Tuning</div>
      </div>
    </section>

    <!-- TOP VOITURES -->
    <section class="bentobox">
      <h2 class="box-title">Top voitures du moment</h2>
      <ul class="top-list">
        <li>BMW M4 G82</li>
        <li>Tesla Model S Plaid</li>
        <li>Audi RS6 Avant</li>
        <li>Porsche Taycan Turbo</li>
      </ul>
    </section>

    <!-- À DÉCOUVRIR -->
    <section class="bentobox discover-box">
      <h2 class="box-title">À découvrir</h2>
      <p>Reportages exclusifs sur les salons auto, préparations extrêmes, et innovations de demain.</p>
      <a href="#" class="cta">Voir la rubrique découverte</a>
    </section>

    <!-- ARTICLES -->
    <section class="articles bentobox full-width" id="articles">
      <h2 class="box-title">Derniers articles</h2>
      <div class="articles-grid">
        <article class="card" v-for="(article, i) in articles" :key="i">
          <img :src="article.img" :alt="article.title" />
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
          <a href="#">Voir plus</a>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import sf90 from '@/assets/sf90.jpg'
import sportives from '@/assets/sportives.jpg'
import electric from '@/assets/electric.jpg'

const articles = [
  {
    title: "La nouvelle Ferrari SF90",
    description: "La Ferrari SF90 allie technologie hybride et puissance brute dans une ligne intemporelle.",
    img: sf90
  },
  {
    title: "Comparatif des sportives 2024",
    description: "Nous avons testé pour vous les dernières sportives de l’année : Porsche, Audi, BMW M…",
    img: sportives
  },
  {
    title: "Top 5 des voitures électriques",
    description: "Autonomie, confort, design : voici notre sélection des meilleures électriques du moment.",
    img: electric
  }
]
</script>

<style scoped>
.home-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto;
  gap: 2rem;
  padding: 2rem;
  background-color: #111;
  color: white;
}

/* HERO */
.hero {
  grid-column: 1 / -1;
  background-image: url('https://source.unsplash.com/1600x500/?car,road');
  background-size: cover;
  background-position: center;
  padding: 4rem 2rem;
  text-align: center;
}
.hero-text {
  background-color: rgba(0, 0, 0, 0.6);
  display: inline-block;
  padding: 2rem;
  border-radius: 10px;
}
.cta {
  display: inline-block;
  background-color: #0077cc;
  padding: 0.5rem 1.5rem;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  margin-top: 1rem;
}
.cta:hover {
  background-color: #005fa3;
}

/* BENTOBOXES */
.bentobox {
  background-color: #222;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
}
.box-title {
  text-align: center;
  margin-bottom: 1rem;
}

/* ARTICLES */
.articles-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.card {
  background-color: #333;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 300px;
}
.card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.card h3,
.card p,
.card a {
  margin: 0.5rem 1rem;
}
.card a {
  color: #4db8ff;
  text-decoration: none;
}
.card a:hover {
  text-decoration: underline;
}

/* CATÉGORIES */
.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.category {
  background-color: #444;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

/* TOP LIST */
.top-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
}
.top-list li {
  margin-bottom: 0.5rem;
}

/* ARTICLES - FULL WIDTH */
.full-width {
  grid-column: 1 / -1;
}
</style>
