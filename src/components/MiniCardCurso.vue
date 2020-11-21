<template>
  <div>
    <q-img
      :src="url"
      style="width: 150px"
      ratio="1"
      spinner-color="white"
      class="rounded-borders cursor-pointer"
      @click='icon=true'
    >
        <div class="absolute-bottom text-center text-body2">
          {{ curso.nome_curso }}
        </div>
      </q-img>

      <!-- DETALHES DOS CURSOS -->
      <q-dialog v-model="icon">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section class="q-py-none">
            <div class="text-h5 text-center text-weight-bold">{{ curso.nome_curso }}</div>
            <div  class='q-py-md'><q-img :src="url"/></div>
            <p class="q-ma-none text-body1 text-justify">{{ curso.descricao }}</p><br>
            <p class="q-ma-none q-pa-none text-body1 text-weight-medium">Deficiência: <span class="text-italic">{{ curso.Tipo_deficiencium.nome }}</span></p>
            <p class="q-ma-none q-pa-none text-body1 text-weight-medium">Custo: <span class="text-weight-bolder">{{ curso.valor }}</span></p>
          </q-card-section>

          <q-card-section class="row items-center q-pb-lg">
            <q-space/>
            <q-btn flat round color="grey" icon="star" class="q-mr-sm" />
            <q-btn style="font-size: 0.8em;" rounded color="orange" label="Inscrever-se"/>
          </q-card-section>
        </q-card>
      </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'MiniCardCurso',
  data () {
    return {
      url: 'http://localhost:3000/imagens/' + this.curso.url_img,
      icon: false
    }
  },
  props: {
    curso: {
      nome_curso: String,
      carga_horaria: String,
      deficiencia: String,
      resumo: String,
      descricao: String,
      valor: String,
      url_img: String,
      Instituicao: Object,
      Tipo_deficiencium: Object
    }
  }
}
</script>
