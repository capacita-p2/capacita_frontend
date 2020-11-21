<template>
  <div>
    <q-card class="my-card shadow-6 q-ma-sm">
      <q-img :src="url"/>

      <q-card-section>

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{ instituicao.nome_instituicao}}
          </div>
        </div>

      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-body2 text-grey">
          <p>{{ instituicao.descricao }}</p>
        </div>
      </q-card-section>

      <div class="absolute-bottom">
        <q-separator />

        <q-card-actions class="flex justify-end">
          <q-btn flat color="primary" icon="add_circle" padding="xs">
            <div class="q-pa-xs" @click="icon = true">Informações</div>
          </q-btn>
        </q-card-actions>
      </div>
    </q-card>

    <!-- DETALHES DOS CURSOS -->
    <q-dialog v-model="icon">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Close icon</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
  name: 'CardInstituicao',
  data () {
    return {
      stars: 4,
      icon: false,
      url: 'http://localhost:3000/imagens/' + this.instituicao.url_img
    }
  },
  props: {
    instituicao: {
      nome_instituicao: String,
      descricao: String,
      url_img: String
    }
  }
}
</script>

<style  scoped>
.my-card {
  width: 290px;
  height: 407px;
}

p {
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
}
</style>
