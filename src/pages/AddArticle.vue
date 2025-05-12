<template>
  <div class="add-article-wrapper">
    <div class="add-article-page">
      <h1>Ajouter un article</h1>
      <form @submit.prevent="submitArticle">
        <label>
          Titre :
          <input type="text" v-model="form.title" required />
        </label>

        <label>
          Image (URL) :
          <input type="text" v-model="form.image" />
        </label>

        <label>
          Catégorie :
          <select v-model="form.category" required>
            <option value="" disabled selected>Choisir une catégorie</option>
            <option>Sportives</option>
            <option>Électriques</option>
            <option>SUV</option>
            <option>Anciennes</option>
            <option>Tuning</option>
          </select>
        </label>

        <label>
          Contenu :
          <textarea v-model="form.content" rows="6" required></textarea>
        </label>

        <button type="submit">Publier</button>
      </form>

      <div v-if="submitted" class="preview">
        <h2>Aperçu</h2>
        <img v-if="form.image" :src="form.image" alt="Aperçu image" />
        <h3>{{ form.title }} <small>({{ form.category }})</small></h3>
        <p>{{ form.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  title: '',
  image: '',
  category: '',
  content: ''
})

const submitted = ref(false)

function submitArticle() {
  console.log('Article submitted:', form.value)
  submitted.value = true
}
</script>

<style scoped>
.add-article-wrapper {
  background-color: #0e0e0e;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.add-article-page {
  max-width: 700px;
  width: 100%;
  background-color: #181818;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  color: white;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

label {
  display: flex;
  flex-direction: column;
  font-weight: bold;
}

input,
select,
textarea {
  margin-top: 0.5rem;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  background-color: #2a2a2a;
  color: white;
}

button {
  align-self: center;
  padding: 0.75rem 2rem;
  background-color: #0077cc;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #005fa3;
}

.preview {
  margin-top: 3rem;
  background-color: #222;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
}

.preview img {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
}
</style>
