<template>
  <form @submit.prevent="handleSubmit">
    <label for="name">Nome:</label>
    <input v-model="formData.name" required />

    <label for="target">Público Alvo:</label>
    <select v-model="formData.target" required>
      <option value="A">Adulto</option>
      <option value="C">Criança</option>
    </select>

    <button type="submit">Salvar</button>
  </form>
</template>

<script>
export default {
  props: ['vaccine', 'onSubmit'],
  data() {
    return {
      formData: {
        name: this.vaccine ? this.vaccine.name : '',
        target: this.vaccine ? this.vaccine.target : 'A'
      }
    }
  },
  methods: {
    handleSubmit() {
      this.onSubmit(this.formData)
    }
  }
}
</script>
