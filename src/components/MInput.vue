<template>
  <label>
    {{ label }}
    <input @focusout="$emit(convocatoria, convocatoria, $event.target.value)" @keyup.enter="$emit(convocatoria, convocatoria, $event.target.value)" type="number" min="0" max="10" step="0.01" placeholder="Ej: 6.1" />
  </label>
</template>

<script>
export default {
  name: 'MInput',
  props: {
    label: String,
    value: String,
    convocatoria: String
  },
  data() {
    return {

    }
  },
  methods: {
    recalc() {
    }
  }
}
</script>


<style scoped>
  input {
    width: 12em;
    height: 1.25em;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
</style>
