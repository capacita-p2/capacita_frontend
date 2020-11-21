<template>
  <div>
    <q-card class="my-card shadow-6 q-ma-sm">
      <q-img :src="url" class="rounded-borders" />

      <q-card-section>

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{ curso.nome_curso}}
          </div>
          <div class="col-auto text-grey text-subtitle1 q-pt-md row no-wrap items-center">
            <q-icon name="hourglass_empty" />
            {{ curso.carga_horaria }}
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle2">
          Deficiência: {{ curso.Tipo_deficiencium.nome }}
        </div>
        <div class="text-body2 text-grey">
          <p>{{ curso.resumo }}</p>
        </div>
      </q-card-section>

      <div class="absolute-bottom">
        <q-separator />

        <q-card-actions class="flex justify-end">
          <q-btn flat color="primary" icon="add_circle" padding="xs">
            <div class="q-pa-xs" @click='icon=true'>Informações</div>
          </q-btn>
        </q-card-actions>
      </div>

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
            <a href="#" class="saiba-mais">Saiba mais sobre a instituição</a>
            <q-space/>
            <q-btn flat round color="grey" icon="star" class="q-mr-sm" />
            <q-btn style="font-size: 0.8em;" rounded color="orange" label="Inscrever-se"/>
          </q-card-section>
        </q-card>
      </q-dialog>

    </q-card>
  </div>
</template>

<script>
export default {
  name: 'CardCurso',
  data () {
    return {
      stars: 4,
      icon: false,
      url: 'http://localhost:3000/imagens/' + this.curso.url_img
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

<style  scoped>
.my-card {
  width: 290px;
  height: 407px;
}

.saiba-mais {
  font-weight: 500;
  font-size: 1.2em;
  color: black;
  text-decoration: none;
}

.saiba-mais:hover {
  font-weight: 900;
}

</style>
