<template>
  <q-page padding>
    <div>
      <h4 class="text-center text-weight-bolder color-primary q-ma-lg text-azul_escuro">Notícias</h4>
      <h5 class="text-center text-weight-bold q-ma-none q-mb-lg text-azul_escuro">CAPACITA - Cursos Inclusivos</h5>
      <p class="text-center" style="font-size: 1.5em;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
      <p class="text-center q-mb-none q-pa-sm">© Copyright 2020</p>
    </div>
  </q-page>
</template>

<style lang="stylus">
//TEXTO
.imagemsobrenos{
  padding: 0px 60px 0px 0px
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
.footer{
font-size: 18px;
}
.footer a {
  font: size 20px;
  text-decoration: none;
  color: #ffffff;
}
.footer a:hover {
  font-weight: 900;
}
</style>
