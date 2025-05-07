<template>
    <div class="page">
      <div class="content">
          <div class="register-card">
          <h1>Inscription</h1>
          <input type="email" placeholder="Email" v-model="email" />
          <input type="password" placeholder="Mot de passe" v-model="password" />
          <button @click="register">S'inscrire</button>
        </div>
        <p>Déjà un compte ? <router-link to="/Login">Connectez-vous</router-link></p>
      </div>
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
    height : 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #111;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    max-width: 400px;
    color : white;
  }
  a {
    color: #0077cc;
    text-decoration: none;
  }
  
  .register-card{
    background-color: #222;
    padding :2rem;
    border-radius: 12px;
    box-shadow : 0 4px 12px rgba(0, 0, 0, 0.4);
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .register-card h1{
    margin : 0;
    text-align: center;
  }
  .register-card input{
    padding : 0.75rem;
    border : none; 
    border-radius: 6px;
    background-color: #333;
    color: white;
  }

  .register-card input::placeholder{
    color: #aaa;
  }
  .register-card button{
    padding : 0.75rem;
    border : none; 
    border-radius: 6px;
    background-color: #0077cc;
    color: white;
    cursor: pointer;
    transition:background-color 0.2s ease;
  }
  .register-card button:hover{
    background-color: #005fa3;
  }
  </style>
  