<template>
    <HeaderMenu @changePage="changePage" />
    <router-view/>
  </template>
  
  <script setup>
  import { ref, shallowRef } from 'vue'
  
  // Importation du menu
  import HeaderMenu from './components/HeaderMenu.vue'
  
  // Importation des pages
  import Home from './pages/Home.vue'
  import AddArticle from './pages/AddArticle.vue'
  import EditArticle from './pages/EditArticle.vue'
  import Login from './pages/Login.vue'
  import Register from './pages/Register.vue'
  
  // Objet contenant toutes les pages accessibles
  const pages = {
    Home,
    AddArticle,
    EditArticle,
    Login,
    Register,
    Discovery: Home,       // Tu peux changer par une vraie page plus tard
    Profil: Login,         // Exemple temporaire
    Parameters: Register   // Exemple temporaire
  }
  
  // Page actuellement affichée
  const currentPage = shallowRef(Home)
  
  // Fonction déclenchée par le menu
  function changePage(pageName) {
    currentPage.value = pages[pageName]
  }
  </script>

<style>
body {
  margin: 0;
}
</style>
