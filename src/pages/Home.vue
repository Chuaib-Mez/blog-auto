<template>
    <div class="page">
      <h1>Articles récents</h1>
      <div v-for="article in articles" :key="article.id" class="article">
        <h2>{{ article.titre }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const articles = ref([
    { id: 1, titre: 'Essai de la Tesla Model S', description: 'Autonomie, performances et confort au top.' },
    { id: 2, titre: 'BMW M4 GTS - Test sur circuit', description: 'Un bolide brutal pensé pour le circuit.' },
    { id: 3, titre: 'La nouvelle Peugeot 508', description: 'Élégance à la française et conduite intuitive.' }
  ])
  </script>
  
  <style scoped>
  .page {
    padding: 2rem;
  }
  .article {
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
  }
  </style>
  