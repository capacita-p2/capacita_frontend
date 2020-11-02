<template>
<div class="row q-pa-lg q-pb-xl flex-center">
    <div class="col-12 text-center">
      <h4 class="q-ma-lg txt-azul_escuro">ACESSO</h4>
    </div>
    <div class="col-sm-8 col-md-6">
      <q-input type="email" bottom-slots v-model="email" label="E-mail" lazy-rules>
        <template v-slot:prepend>
          <q-icon name="alternate_email" />
        </template>
      </q-input>

      <q-input type="password" bottom-slots v-model="senha" label="Senha">
        <template v-slot:prepend>
          <q-icon name="vpn_key" />
        </template>
      </q-input>

      <div class="flex justify-center q-gutter-sm q-pt-lg q-ma-sm">
        <q-btn class="btn-fixed-width" rounded color="primary" label="Entrar"  @click="login(email, senha)"/><br>
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
    return {
      email: '',
      senha: ''
    }
  },
  methods: {
    login (email, senha) {
      const login = { email, senha }
      this.$axios.post('http://localhost:3000/usuario-login', login).then(response => {
        if (response.data.usuarioPcd != null) {
          console.log('UsuarioPcd')
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Usuário Pcd: ' + response.data.usuarioPcd.nome + ' CONNECTADO!'
          })
          this.$emit('closeModal')
        } else if (response.data.instituicao != null) {
          console.log('Instituicao')
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Instituicão: ' + response.data.instituicao.nome + ' CONNECTADA!'
          })
          this.$emit('closeModal')
        } else if (response.data.admin != null) {
          console.log('Admin')
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Administrador Conectado.'
          })
          this.$emit('closeModal')
        } else {
          console.log(response.data.message)
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'cloud_done',
            message: response.data.message + '!'
          })
        }
        console.log(response.data.usuario)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
  .btn-fixed-width {
    width: 300px
  }
</style>
