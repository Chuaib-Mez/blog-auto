<template>
    <div class="page">
      <h1>Ajouter un article</h1>
      <input v-model="titre" placeholder="Titre" />
      <textarea v-model="description" placeholder="Description"></textarea>
      <button @click="submit">Publier</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const titre = ref('')
  const description = ref('')
  
  function submit() {
    alert(`Article ajouté : ${titre.value}`)
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
    background-color: #222;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  