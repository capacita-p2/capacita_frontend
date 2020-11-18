<template>
  <q-page padding>
    <div>
      <h4 class="text-center text-weight-bolder color-primary q-ma-lg text-azul_escuro">CURSOS</h4>
      <h5 class="text-center text-weight-bold q-ma-none q-mb-lg text-azul_escuro">Cursos em Destaque</h5>
      <p class="text-center " style="font-size: 1.5em;">Nossa missão é trazer para você os melhores cursos profissionalizantes. Através de uma rede de instituições de ensino, sua Capacitação estará garantida para o mercado de trabalho. </p>

      <div class="q-pa-md flex justify-center">
        <div class="q-gutter-y-md" style="max-width: 950px;">
          <q-card>
            <q-tabs
              v-model="tab"
              inline-label
              class="bg-primary text-white shadow-2"
            >
              <q-tab name="cursos" icon="menu_book" label="Cursos" style="width: 100%"/>
              <q-tab name="instituicoes" icon="apartment" label="Instituições"  style="width: 100%"/>
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="cursos" class="flex justify-center">
                <div v-for="curso in cursos" :key="curso.id">
                  <CardCurso :curso="curso"/>
                </div>
              </q-tab-panel>

              <q-tab-panel name="instituicoes" class="flex justify-center">
                 <div v-for="curso in cursos" :key="curso.id">
                  <CardInst :curso="curso"/>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CardCurso from 'components/CardCurso'
import CardInst from 'components/CardInst'
export default {
  name: 'PaginaCursos',
  mounted () {
    this.$axios.get('http://localhost:3000/curso').then(response => {
      this.cursos = response.data
    })
  },
  data () {
    return {
      tab: 'cursos',
      cursos: null
    }
  },
  components: {
    CardCurso,
    CardInst
  },
  methods: {}
}
</script>
