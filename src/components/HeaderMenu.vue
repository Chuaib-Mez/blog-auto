<template>
  <Transition name="drawer">
    <aside v-if="isOpen" class="drawer">
      <div class="menu-content">
        <h1>AutoG</h1>
        <nav>
          <router-link to="/" class="nav-item">Accueil</router-link>
          <router-link to="/Login" class="nav-item">Profil</router-link>
          <router-link to="/parameters" class="nav-item">Paramètres</router-link>
          <button class="logout" @click="logout">Déconnexion</button>
        </nav>
      </div>
    </aside>
  </Transition>

  <div class="drawer-handle" :class="{ moved: isOpen }" @click="toggleMenu">|||</div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
function logout() {
  alert("Tu es maintenant déconnecté")
}
</script>

<style scoped>
.drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 25vw;
  max-width: 300px;
  height: 100vh;
  background-color: #222;
  color: white;
  z-index: 100;
  overflow: hidden;
}

.menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
}

h1 {
  margin: 0;
}

nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
}

/* Liens du menu */
.nav-item {
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.75rem 0;
  text-decoration: none;
  color: white;
  transition: background-color 0.2s;
}
.nav-item:hover {
  background-color: #444;
}

/* Bouton déconnexion */
.logout {
  all: unset;
  width: 100%;
  text-align: center;
  padding: 0.75rem 0;
  cursor: pointer;
}
.logout:hover {
  background-color: #444;
}

/* Poignée */
.drawer-handle {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 15px;
  height: 60px;
  background-color: #444;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  user-select: none;
  transition: left 0.3s ease;
  z-index: 200;
}
.drawer-handle.moved {
  left: min(25vw, 300px);
}

/* Animation de transition */
.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(-100%);
}
.drawer-enter-to,
.drawer-leave-from {
  transform: translateX(0);
}
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.6s ease;
}
</style>
