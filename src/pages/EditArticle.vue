<template>
    <div class="page">
      <h1>Modifier l'article</h1>
      <input v-model="titre" />
      <textarea v-model="description"></textarea>
      <button @click="update">Enregistrer</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const titre = ref('Article existant')
  const description = ref('Description actuelle')
  
  function update() {
    alert('Modifications enregistrées')
  }
  </script>
  
  <style scoped>
  .page {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input, textarea {
    width: 100%;
    padding: 0.5rem;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #006;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  