<template>
  <u><h1> Calculadora convocatorias DEW </h1></u>

  <div class="col">
    <h2> Trabajo NOL - 35% global </h2>
    <div class="row">
      <MInput @hito1NOL="recalc" convocatoria="hito1NOL" label="Hito 1 - 20%" />
      <MInput @hito2NOL="recalc" convocatoria="hito2NOL" label="Hito 2 - 30%" />
      <MInput @entregaFinal="recalc" convocatoria="entregaFinal" label="Entrega final - 50%" />
    </div>
  </div>

  <br /><br />

  <div class="col">
    <h2> Parciales - 65% global </h2>
    <div class="row">
      <MInput @parcial1="recalc" convocatoria="parcial1" label="Parcial 1 - 30%" />
      <MInput @parcial2="recalc" convocatoria="parcial2" label="Parcial 2 - 20%" />
      <MInput @lab1="recalc" convocatoria="lab1" label="Lab 1 - 15%" />
    </div>
  </div>

  <br /><br />
  {{ convocatorias }}

  <h3> Nota final: 
    <span v-if="notaFinal < 5" class="suspenso">{{ notaFinal }}</span>
    <span v-else class="aprobado">{{ notaFinal }}</span>
  </h3>
</template>

<script>
import MInput from './components/MInput.vue'

export default {
  name: 'App',
  components: {
    MInput
  },
  data() {
    return {
      convocatorias: {
        parcial1: null,
        parcial2: null,
        lab1: null,
        entregaFinal: null,
        hito1NOL: null,
        hito2NOL: null,
      },
      pesos: {
        parcial1: 0.3,
        parcial2: 0.2,
        lab1: 0.15,
        entregaFinal: 0.175,
        hito1NOL: 0.07,
        hito2NOL: 0.105,
      },
      notaFinal: null
    }
  },
  methods: {
    recalc(convocatoria, nota) {
      this.convocatorias[convocatoria] = nota;
      this.calcNotaFinal();
    },
    calcNotaFinal() {
      this.notaFinal = 0;
      Object.keys(this.convocatorias).forEach(cnv => {
        this.notaFinal += this.convocatorias[cnv] * this.pesos[cnv];
        this.notaFinal = Math.round((this.notaFinal + Number.EPSILON) * 100) / 100
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

div.col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

div.row {
  display: flex;
  flex-direction: row;
  gap: 100px;
  align-items: center;
  justify-content: start;
}

.suspenso {
  color: rgb(184, 6, 6); 
}

.aprobado {
  color: rgb(21, 150, 9); 
}

</style>
