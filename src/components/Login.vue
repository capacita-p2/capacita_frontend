<template>
<div class="row q-pa-lg q-pb-xl flex-center">
    <div class="col-12 text-center">
      <h4 class="q-ma-lg txt-azul_escuro">ACESSO</h4>
    </div>
    <div class="col-sm-8 col-md-6">
      <q-input type="email" bottom-slots v-model="text" label="E-mail" :dense="dense">
        <template v-slot:prepend>
          <q-icon name="alternate_email" />
        </template>
      </q-input>

      <q-input type="password" bottom-slots v-model="text" label="Senha" :dense="dense">
        <template v-slot:prepend>
          <q-icon name="vpn_key" />
        </template>
      </q-input>

      <div class="flex justify-center q-gutter-sm q-pt-lg q-ma-sm">
        <q-btn class="btn-fixed-width" rounded color="primary" label="Entrar" /><br>
        <q-btn class="btn-fixed-width" rounded color="primary" label="Inscreva-se no CAPACITA" @click="$router.replace('inscricaopcd')"/><br>
        <q-btn class="btn-fixed-width" rounded color="primary" label="Solicitar Parceria" @click="$router.replace('inscricaoinst')"/>
      </div>

    </div>
</div>
</template>

<script>
export default {
  name: 'LoginAcesso',
  data () {
    return {}
  }
}
</script>

<style>
  .btn-fixed-width {
    width: 300px
  }
</style>
