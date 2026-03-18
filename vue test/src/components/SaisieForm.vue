<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Liste de champs</h3>

    <input v-model="field1" placeholder="Champ 1">
    <input v-model="field2" placeholder="Champ 2">
    <input v-model="field3" placeholder="Champ 3">

    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'SaisieForm',
  data() {
    return {
      field1: '',
      field2: '',
      field3: ''
    }
  },
  methods: {
    onSubmit() {
      const listFields = {
        field1: this.field1,
        field2: this.field2,
        field3: this.field3
      }

      localStorage.setItem('formData', JSON.stringify(listFields))

      this.$emit('field-submitted', listFields)
      this.field1 = ''
      this.field2 = ''
      this.field3 = ''
    }
  }
}
</script>