<template>
  <q-page class="flex-center content-start q-pa-sm">
    <!-- CARROUSEL -->
    <div style="width: 100%; height: 100%;">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="../imagens/banner_1.png">
          <div class="absolute-bottom custom-caption">
            <div class="text-h4 text-weight-bold">INFORMÁTICA</div>
            <div class="text-subtitle1">Cursos básico com os principais módulos</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="../imagens/banner_2.png">
          <div class="absolute-bottom custom-caption">
            <div class="text-h4 text-weight-bold">BRAILE</div>
            <div class="text-subtitle1">Leitura em braile para dificientes visuais</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" img-src="../imagens/banner_3.png">
          <div class="absolute-bottom custom-caption">
            <div class="text-h4 text-weight-bold">ADMINISTRAÇÃO</div>
            <div class="text-subtitle1">Administração de Empresas</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <!-- TEXTOS -->
    <div align="center">
      <div class="row col-12">
        <h4 class="col-12 q-py-sm q-ma-none text-center text-azul_escuro text-weight-bold" style="font-size: 2em;">
          CONFIRA OS CURSOS EM DESTAQUE
        </h4> <br>
        <p class="col-12 q-py-md text-center text-azul_escuro">
          Nossa missão é trazer para você os melhores cursos profissionalizantes. Através de uma rede de instituições de ensino, sua Capacitação estará garantida para o mercado de trabalho.
        </p>
      </div>
      <!-- BOTOES -->
      <div class="row justify-center col-12 q-pb-lg text-azul_escuro" style="min-width: 250px; max-width: 400px;">
        <div class="col-3" align="center">
          <a href="#" class="link-primario text-azul_escuro">
            <img src="../imagens/btn_acesso.svg" alt="Botão de Inicial" class="text-center" style="width: 3em; width: 4em;"><br>
            <span>Início</span>
          </a>
        </div>
        <div class="col-3" align="center">
          <a href="#" class="link-primario text-azul_escuro">
            <img src="../imagens/btn_cursos.svg" alt="Botão de Inicial" style="width: 3em;  width: 4em;"><br>
            <span>Cursos</span>
          </a>
        </div>
        <div class="col-3" align="center">
          <a href="#" class="link-primario text-azul_escuro">
            <img src="../imagens/btn_forum.svg" alt="Botão de Inicial" style="width: 3em;  width: 4em;"><br>
            <span>Fórum</span>
          </a>
        </div>
        <div class="col-3" align="center">
          <a href="#" class="link-primario text-azul_escuro">
            <img src="../imagens/btn_noticias.svg" alt="Botão de Inicial" style="width: 3em;  width: 4em;"><br>
            <span>Notícias</span>
          </a>
        </div>
      </div>
      <!-- CARDS CIRCULARES -->
      <div style="min-width: 300px; max-width: 800px;">
        <div class="row justify-center">
          <div class="col-6 col-sm-4 col-md-2 q-pa-sm" align="center">
            <div class="card-circulares card-fisico"></div>
          </div>
          <div class="col-6 col-sm-4 col-md-2 q-pa-sm" align="center">
            <div class="card-circulares card-visual"></div>
          </div>
          <div class="col-6 col-sm-4 col-md-2 q-pa-sm" align="center">
            <div class="card-circulares card-mudez"></div>
          </div>
          <div class="col-6 col-sm-4 col-md-2 q-pa-sm" align="center">
            <div class="card-circulares card-auditivo"></div>
          </div>
          <div class="col-6 col-sm-4 col-md-2 q-pa-sm " align="center">
            <div class="card-circulares card-mental"></div>
          </div>
          <div class="col-6 col-sm-4 col-md-2 q-pa-sm" align="center">
            <div class="card-circulares card-multiplos"></div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  }
}
</script>

<style lang="stylus">
//CSS FAIXA CARROSEUL
.custom-caption {
  text-align: center;
  padding: 20px 0 60px 0px
  color: white
  background-color: rgba(0, 0, 0, .3)
}

//CSS CARTÕES DOS DEFICIENTES
.card-circulares {
  background-size: 90%;
  background-position: top;
  border-radius: 100%;
  width: 120px;
  height: 120px;
}
.card-fisico {
  background-image: url("../imagens/cartao_fisico.png");
}
.card-visual {
  background-image: url("../imagens/cartao_visual.png");
}
.card-mudez {
  background-image: url("../imagens/cartao_mudez.png");
}
.card-auditivo {
  background-image: url("../imagens/cartao_auditivo.png");
}
.card-mental {
  background-image: url("../imagens/cartao_mental.png");
}
.card-multiplos {
  background-image: url("../imagens/cartao_multiplos.png");
}
</style>
