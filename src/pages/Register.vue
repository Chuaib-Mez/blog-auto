<template>
    <div class="page">
      <h1>Inscription</h1>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Mot de passe" v-model="password" />
      <button @click="register">S'inscrire</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  
  function register() {
    alert(`Inscription pour ${email.value}`)
  }
  </script>
  
  <style scoped>
  .page {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input {
    padding: 0.5rem;
  }
  button {
    padding: 0.5rem;
    background-color: #007;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  