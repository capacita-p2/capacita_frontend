<template>
  <div>
    <q-card class="my-card shadow-6 q-ma-sm">
      <q-img src="../imagens/banner_1.png" />

      <q-card-section>

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{ curso.titulo }}
          </div>
          <div class="col-auto text-grey text-subtitle1 q-pt-md row no-wrap items-center">
            <q-icon name="hourglass_empty" />
            {{ curso.cargaHoraria }}
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle2">
          Deficientes: {{ curso.deficiencias }}
        </div>
        <div class="text-body2 text-grey">
          <p>{{ curso.descricao }}</p>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions class="flex justify-end">
        <q-btn flat color="primary" icon="add_circle" padding="xs">
           <div class="q-pa-xs">Informações</div>
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'CardCurso',
  data () {
    return {
      stars: 4
    }
  },
  props: {
    curso: {
      titulo: String,
      cargaHoraria: String,
      deficiencias: String,
      descricao: String
    }
  }
}
</script>

<style  scoped>
.my-card {
  width: 100%;
  max-width: 290px;
}
</style>
