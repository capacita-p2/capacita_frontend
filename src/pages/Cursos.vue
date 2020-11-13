<template>
  <q-page padding>
    <div>
      <h4 class="text-center text-weight-bolder color-primary q-ma-lg text-azul_escuro">CURSOS</h4>
      <h5 class="text-center text-weight-bold q-ma-none q-mb-lg text-azul_escuro">Cursos em Destaque</h5>
      <p class="text-center " style="font-size: 1.5em;">Nossa missão é trazer para você os melhores cursos profissionalizantes. Através de uma rede de instituições de ensino, sua Capacitação estará garantida para o mercado de trabalho. </p>

      <div style="width: 100%;" class="flex justify-center">
        <div style="max-width: 920px">
          <q-tabs
          v-model="tab"
          inline-label
          class="bg-primary text-white shadow-2"
        >
          <q-tab name="cursos" icon="menu_book" label="Cursos" />
          <q-tab name="instituições" icon="apartment" label="Instituições" />
          <q-tab name="noticias" icon="comment" label="Notícias" />
          </q-tabs>

          <div class="flex justify-center q-py-md">
            <div v-for="curso in cursos" :key="curso.id">
              <CardCurso :curso="curso"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script>
import CardCurso from 'components/CardCurso'
export default {
  name: 'PaginaCursos',
  data () {
    return {
      tab: 'cursos',
      cursos: [
        {
          id: 1,
          titulo: 'Informática',
          cargaHoraria: '40h',
          deficiencias: 'Visual, Auditivo, Físico',
          descricao: 'Curso de Informática básica: Word, Excel, PowerPoint, Access e Internet'
        },
        {
          id: 2,
          titulo: 'Informática',
          cargaHoraria: '40h',
          deficiencias: 'Visual, Auditivo, Físico',
          descricao: 'Curso de Informática básica: Word, Excel, PowerPoint, Access e Internet'
        },
        {
          id: 3,
          titulo: 'Informática',
          cargaHoraria: '40h',
          deficiencias: 'Visual, Auditivo, Físico',
          descricao: 'Curso de Informática básica: Word, Excel, PowerPoint, Access e Internet'
        },
        {
          id: 4,
          titulo: 'Informática',
          cargaHoraria: '40h',
          deficiencias: 'Visual, Auditivo, Físico',
          descricao: 'Curso de Informática básica: Word, Excel, PowerPoint, Access e Internet'
        },
        {
          id: 5,
          titulo: 'Informática',
          cargaHoraria: '40h',
          deficiencias: 'Visual, Auditivo, Físico',
          descricao: 'Curso de Informática básica: Word, Excel, PowerPoint, Access e Internet'
        },
        {
          id: 6,
          titulo: 'Informática',
          cargaHoraria: '40h',
          deficiencias: 'Visual, Auditivo, Físico',
          descricao: 'Curso de Informática básica: Word, Excel, PowerPoint, Access e Internet'
        },
        {
          id: 7,
          titulo: 'Informática',
          cargaHoraria: '40h',
          deficiencias: 'Visual, Auditivo, Físico',
          descricao: 'Curso de Informática básica: Word, Excel, PowerPoint, Access e Internet'
        },
        {
          id: 8,
          titulo: 'Informática',
          cargaHoraria: '40h',
          deficiencias: 'Visual, Auditivo, Físico',
          descricao: 'Curso de Informática básica: Word, Excel, PowerPoint, Access e Internet'
        },
        {
          id: 9,
          titulo: 'Informática',
          cargaHoraria: '40h',
          deficiencias: 'Visual, Auditivo, Físico',
          descricao: 'Curso de Informática básica: Word, Excel, PowerPoint, Access e Internet'
        }
      ]
    }
  },
  components: {
    CardCurso
  }
}
</script>
