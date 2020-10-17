<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          style="font-size: 1.5em; border-radius: 0.5em;"
          dense
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title align="center">
          <div  class="row items-center">
            <div class="col">
              <p style="margin: 0;"><span class="text-weight-bold">CAPACITA</span><br> <span style="font-size: 0.9em;">Cursos Inclusivos</span></p>
            </div>
          </div>
        </q-toolbar-title>

        <div><q-icon name="home" style="font-size: 5em;"/></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      overlay
      bordered
      elevated
      content-class="bg-grey-1"
    >
      <q-list>
        <div>
          <q-item>
            <q-item-label header class="text-grey-8 text-weight-bold" size="2em" style="font-size: 2em;">
              MENU
            </q-item-label>
            <q-item-section>
              <a href="#" align="right" style="text-decoration: none;"><q-icon name="closer" size="2em" rounded flat  dense @click="leftDrawerOpen = !leftDrawerOpen"/></a>
            </q-item-section>
          </q-item>
        </div>
        <div class="row items-center">
            <div class="col-4" style="padding-left: 2em;">
                <a href="/">
                  <img src="../imagens/btn_inicio.svg" alt="Botão de Inicial" style="width: 3em;">
                </a>
            </div>
            <div class="col-8 texto-menu">
              <a href="/">Início</a>
            </div>
            <div class="col-4" style="padding-left: 2em;">
                <a href="#">
                  <img src="../imagens/btn_sobre_nos.svg" alt="Botão Sobre Nós" style="width: 3em;">
                </a>
            </div>
            <div class="col-8 texto-menu">
              <a href="#">Sobre Nós</a>
            </div>
            <div class="col-4" style="padding-left: 2em;">
                <a href="#">
                  <img src="../imagens/btn_cursos.svg" alt="Botão de Cursos" style="width: 3em;">
                </a>
            </div>
            <div class="col-8 texto-menu">
              <a href="#">Cursos</a>
            </div>
            <div class="col-4" style="padding-left: 2em;">
                <a href="#">
                  <img src="../imagens/btn_noticias.svg" alt="Botão de Notícias" style="width: 3em;">
                </a>
            </div>
            <div class="col-8 texto-menu">
              <a href="#">Notícias</a>
            </div>
            <div class="col-4" style="padding-left: 2em;">
                <a href="#">
                  <img src="../imagens/btn_forum.svg" alt="Botão de Fórum" style="width: 3em;">
                </a>
            </div>
            <div class="col-8 texto-menu">
              <a href="#">Fórum</a>
            </div>
            <div class="col-4" style="padding-left: 2em;">
                <a href="#">
                  <img src="../imagens/btn_acesso.svg" alt="Botão de Acesso" style="width: 3em;">
                </a>
            </div>
            <div class="col-8 texto-menu">
              <a href="#">Acesso</a>
            </div>
            <div class="col-4" style="padding-left: 2em;">
                <a href="#">
                  <img src="../imagens/btn_contato.svg" alt="Botão de Contato" style="width: 3em;">
                </a>
            </div>
            <div class="col-8 texto-menu">
              <a href="#">Contato</a>
            </div>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
