<template>
  <div class=" row q-pa-lg text-center flex-center justify-center">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md" style="width: 500px;"
    >
    <h6 class="text-azul_escuro">Cadastro de Instituição</h6>
      <q-input
        v-model="instituicao.nome"
        label="Nome da Instituição"
        :rules="[ val => val && val.length > 0 || 'Por favor, digite o nome completo.']"
      />

      <q-input
        type="text"
        v-model="instituicao.cnpj"
        label="CNPJ"
        mask="##.###.###/####-##"
        fill-mask
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite seu CNPJ.',
        ]"
      />

      <q-input
        type="text"
        v-model="instituicao.telefone"
        label="Telefone"
        mask="(##) #####-####"
        fill-mask
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite seu telefone.',
        ]"
      />

      <q-input
        v-model="instituicao.endereco"
        label="Endereço"
        :rules="[ val => val && val.length > 0 || 'Por favor, digite seu endereço.']"
      />

      <q-input
        type="number"
        v-model="instituicao.numero"
        label="Número"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite o número do seu endereço',
          val => val > 0 || 'Por favor, digite um número válido'
        ]"
      />

      <q-input
        v-model="instituicao.bairro"
        label="Bairro"
        :rules="[ val => val && val.length > 0 || 'Por favor, digite o nome do seu bairro.']"
      />

      <q-input
        v-model="instituicao.cidade"
        label="Cidade"
        :rules="[ val => val && val.length > 0 || 'Por favor, digite o nome da sua cidade.']"
      />

      <q-input
        v-model="instituicao.estado"
        label="Estado"
        :rules="[ val => val && val.length > 0 || 'Por favor, escolha seu estado.']"
      />

      <q-input
        type="text"
        v-model="instituicao.cep"
        label="CEP"
        mask="##.###-###"
        fill-mask
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite seu CEP.',
        ]"
      />

      <q-input
        type="email"
        v-model="instituicao.email"
        label="E-mail"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite seu e-mail.',
        ]"
      />

      <q-input
        type="password"
        v-model="instituicao.senha"
        label="Senha"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite sua senha.',
        ]"
      />

      <q-input
        type="password"
        v-model="instituicao.senha2"
        label="Repetir senha"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite sua senha novamente.',
        ]"
      />

      <q-toggle v-model="accept" label="Eu aceito os termos da licença" />

      <div>
        <q-btn label="Cadastrar" type="submit" color="primary"/>
        <q-btn label="Cancelar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>

    </q-form>
  </div>
</template>

<script>
export default {
  name: 'CadastroInst',
  data () {
    return {
      accept: false,
      instituicao: {
        email: null,
        senha: null,
        senha2: null,
        tipo: 0,
        ativo: true,
        nome: null,
        telefone: null,
        endereco: null,
        numero: null,
        bairro: null,
        cidade: null,
        estado: null,
        cep: null,
        cpf: null,
        group: [],
        options: [
          {
            label: 'Auditivo',
            value: 'op1'
          },
          {
            label: 'Físico',
            value: 'op2'
          },
          {
            label: 'Mudez',
            value: 'op3'
          },
          {
            label: 'Mental',
            value: 'op4'
          },
          {
            label: 'Visual',
            value: 'op5'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Vocẽ precisa aceitar os termos de licença primeiro'
        })
      } else {
        if (this.instituicao.senha !== this.instituicao.senha2) {
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'vpn_key',
            message: 'AS SENHAS NÃO CONFEREM, TENTE DIGITAR NOVAMENTE!'
          })
        } else {
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Enviado'
          })
          this.salvarInstituicao()
        }
      }
    },
    onReset () {
      this.usuarioPcd.email = null
      this.usuarioPcd.senha = null
      this.usuarioPcd.senha2 = null
      this.usuarioPcd.nome = null
      this.usuarioPcd.telefone = null
      this.usuarioPcd.endereco = null
      this.usuarioPcd.numero = null
      this.usuarioPcd.bairro = null
      this.usuarioPcd.cidade = null
      this.usuarioPcd.estado = null
      this.usuarioPcd.cep = null
      this.usuarioPcd.cpf = null
      this.idade = null
      this.accept = false
    },
    salvarInstituicao () {
      this.$axios.post('http://localhost:3000/instituicao', this.instituicao).then(
        response => {
          console.log(console.data)
        }
      )
      console.log(this.usuarioPcd)
      // IMPORTAR MÉTODO 'closeModal' DO COMPONENT PAI
      // this.$emit('closeModal')
    }
  }
}
</script>
