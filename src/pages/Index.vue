<template>
  <q-page class="flex-center content-start">
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
      <div class="row col-12 q-pa-sm">
        <h4 class="col-12 q-py-sm q-ma-none text-center text-azul_escuro text-weight-bold" style="font-size: 2em;">
          CONFIRA OS CURSOS EM DESTAQUE
        </h4> <br>
        <p class="col-12 q-py-md text-center text-azul_escuro">
          Nossa missão é trazer para você os melhores cursos profissionalizantes. Através de uma rede de instituições de ensino, sua Capacitação estará garantida para o mercado de trabalho.
        </p>
      </div>
      <!-- BOTOES -->
      <div class="row justify-center col-12 col-12 q-pa-sm q-pb-lg text-azul_escuro" style="min-width: 250px; max-width: 400px;">
        <div class="col-3" align="center">
          <a href="#" class="link-primario text-azul_escuro">
            <img src="../imagens/btn_acesso.svg" alt="Botão de Inicial" class="text-center" style="width: 3em; width: 4em;"><br>
            <span>Início</span>
          </a>
        </div>
        <div class="col-3" align="center">
          <a href="/cursos" class="link-primario text-azul_escuro">
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
        <div class="row justify-center col-12 col-12 q-pa-sm">
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
      <!-- NOTÍCIAS -->
      <div class="row col-12 col-12 q-pa-sm" style="max-width: 1000px">
        <h3 class="col-12">Notícias</h3>
        <!-- NOTICIA01 -->
        <div class="col-4 col-md-4 col-xs-12 q-pb-xl">
          <div class="noticia">
            <div id="img_noticia01" class="img_noticia"></div>
            <div class="noticia01">
              <h5 class="q-ma-md">Lorem ipsum dolor sit amet, consectetur adip iscing elit. </h5>
              <p class="text-justify q-pa-sm q-mb-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum pharetra tellus, non venenatis metus porta id. Nunc vestibulum fringilla mattis. Nunc mi lorem, varius nec porta fringilla, pretium ut nibh. Nulla ultricies laoreet felis, non porta turpis. Fusce maximus elementum ligula, eget lacinia ex rhoncus ut. Proin id massa purus. In tristique ultrices magna, eget accumsan tortor congue id. Donec iaculis enim nunc, at ultricies urna porta id. Nunc fringilla nibh nec leo efficitur cursus. Ut id tellus vitae risus lacinia tincidunt. Maecenas ut dolor consectetur tortor iaculis egestas. Aenean eu tristique arcu.</p>
              <div class="text-right">
                <q-btn outline rounded color="orange" label="Ver mais"/>
              </div>
            </div>
          </div>
        </div>
        <!-- NOTÍCIA02 -->
        <div class="col-4 col-md-4 col-xs-12 q-pb-xl">
          <div class="noticia">
            <div id="img_noticia02" class="img_noticia"></div>
            <div class="noticia02">
              <h5 class="q-ma-md">Lorem ipsum dolor sit amet, consectetur adip iscing elit. </h5>
              <p class="text-justify q-pa-sm q-mb-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum pharetra tellus, non venenatis metus porta id. Nunc vestibulum fringilla mattis. Nunc mi lorem, varius nec porta fringilla, pretium ut nibh. Nulla ultricies laoreet felis, non porta turpis. Fusce maximus elementum ligula, eget lacinia ex rhoncus ut. Proin id massa purus. In tristique ultrices magna, eget accumsan tortor congue id. Donec iaculis enim nunc, at ultricies urna porta id. Nunc fringilla nibh nec leo efficitur cursus. Ut id tellus vitae risus lacinia tincidunt. Maecenas ut dolor consectetur tortor iaculis egestas. Aenean eu tristique arcu.</p>
              <div class="text-right">
                <q-btn outline rounded color="orange" label="Ver mais"/>
              </div>
            </div>
          </div>
        </div>
        <!-- NOTÍCIA03 -->
        <div class="col-4 col-md-4 col-xs-12 q-pb-xl">
          <div class="noticia">
            <div id="img_noticia03" class="img_noticia"></div>
            <div class="noticia03">
              <h5 class="q-ma-md">Lorem ipsum dolor sit amet, consectetur adip iscing elit. </h5>
              <p class="text-justify q-pa-sm q-mb-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum pharetra tellus, non venenatis metus porta id. Nunc vestibulum fringilla mattis. Nunc mi lorem, varius nec porta fringilla, pretium ut nibh. Nulla ultricies laoreet felis, non porta turpis. Fusce maximus elementum ligula, eget lacinia ex rhoncus ut. Proin id massa purus. In tristique ultrices magna, eget accumsan tortor congue id. Donec iaculis enim nunc, at ultricies urna porta id. Nunc fringilla nibh nec leo efficitur cursus. Ut id tellus vitae risus lacinia tincidunt. Maecenas ut dolor consectetur tortor iaculis egestas. Aenean eu tristique arcu.</p>
              <div class="text-right">
                <q-btn outline rounded color="orange" label="Ver mais"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FOOTER -->
    <div class="footer">
      <div class="q-pa-md q-px-xl row justify-center">
        <!-- LOGO -->
        <div class="col-xs-12 col-sm flex justify-center">
          <div class="q-pb-xl" style="width: 120px; font-size: 1.5em;">
            <q-icon name="filter_none" style="font-size: 1.8em;"/> logo
          </div>
        </div>
        <!-- MOBILE APP -->
        <div class="col-xs-12 col-sm-2 flex justify-center">
          <div style="width: 120px;">
            <p><span>Mobile app</span><br><br>
            <a href="#">Features</a><br>
            <a href="#">Live share</a><br>
            <a href="#">Video record</a></p>
          </div>
        </div>
        <!-- COMMUNITY -->
        <div class="col-xs-12 col-sm-2 flex justify-center">
          <div style="width: 120px;">
             <p>
              <span>Community</span><br><br>
              <a href="#">Featured artists</a><br>
              <a href="#">The Portal</a><br>
              <a href="#">Live events</a>
          </p>
          </div>
        </div>
        <!-- COMPANY -->
        <div class="col-xs-12 col-sm-2 flex justify-center">
          <div  style="width: 120px;">
            <p>
              <span>Company</span> <br><br>
              <a href="#">Contacts us</a> <br>
              <a href="#">History</a>
            </p>
          </div>
        </div>
        <!-- BOTÕES -->
        <div class="col-xs-12 col-sm-2 flex justify-center">
          <div style="width: 120px;" class="q-gutter-y-sm">
            <q-btn color="orange" label="Registrar" style="width: 100px;"/>
            <q-btn color="white" text-color="orange" label="Entrar"  style="width: 100px"/>
          </div>
        </div>
      </div>
      <!-- COPY RIGHT -->
      <hr style="width: 90%; opacity: 30%">
      <p class="text-center q-mb-none q-pa-sm">CopyRight 2020</p>
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
//NOTICIAS
div.noticia {
  width:300px;
  height:750px;
}
div.img_noticia {
  height: 240px;
  width: 300px;
  border-radius: 20px;
}
div#img_noticia01 {
  background-image: url("../imagens/noticia_01.jpg")
}
div#img_noticia02 {
  background-image: url("../imagens/noticia_02.jpg")
}
div#img_noticia03 {
  background-image: url("../imagens/noticia_03.jpg")
}
//FOOTER
div.footer {
  width: 100%;
  background-color: $primary;
}
.footer p span {
  color: $azul_escuro;
  font-weight: 900;
}
.footer a {
  text-decoration: none;
  color: #ffffff;
}
.footer a:hover {
  font-weight: 900;
}
</style>
