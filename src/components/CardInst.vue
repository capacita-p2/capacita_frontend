<template>
  <div>
    <q-card class="my-card shadow-6 q-ma-sm">
      <q-img :src="curso.url_img"/>

      <q-card-section>

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{ curso.nome_curso}}
          </div>
        </div>

      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-body2 text-grey">
          <p>{{ curso.resumo }}</p>
        </div>
      </q-card-section>

      <div class="absolute-bottom">
        <q-separator />

        <q-card-actions class="flex justify-end">
          <q-btn flat color="primary" icon="add_circle" padding="xs">
            <div class="q-pa-xs">Informações</div>
          </q-btn>
        </q-card-actions>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'CardInstituicao',
  data () {
    return {
      stars: 4
    }
  },
  props: {
    curso: {
      nome_curso: String,
      carga_horaria: String,
      deficiencia: String,
      resumo: String,
      url_img: String,
      Instituicao: Object,
      Tipo_deficiencium: Object
    }
  }
}
</script>

<style  scoped>
.my-card {
  width: 290px;
  height: 407px;
}
</style>
