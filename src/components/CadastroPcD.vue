<template>
  <div class=" row q-pa-lg text-center flex-center justify-center">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md" style="width: 500px;"
    >
    <h6 class="text-azul_escuro">Cadastro Usuário PcD</h6>
      <q-input
        v-model="usuarioPcd.nome"
        label="Nome"
        :rules="[ val => val && val.length > 0 || 'Por favor, digite seu nome completo.']"
      />

      <q-input
        type="text"
        v-model="usuarioPcd.cpf"
        label="CPF"
        mask="###.###.###-##"
        fill-mask
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite seu CPF.',
        ]"
      />

      <q-input
        type="text"
        v-model="usuarioPcd.telefone"
        label="Telefone"
        mask="(##) #####-####"
        fill-mask
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite seu telefone.',
        ]"
      />

      <q-input
        v-model="usuarioPcd.endereco"
        label="Endereço"
        :rules="[ val => val && val.length > 0 || 'Por favor, digite seu endereço.']"
      />

      <q-input
        type="number"
        v-model="usuarioPcd.numero"
        label="Número"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite o número do seu endereço',
          val => val > 0 || 'Por favor, digite um número válido'
        ]"
      />

      <q-input
        v-model="usuarioPcd.bairro"
        label="Bairro"
        :rules="[ val => val && val.length > 0 || 'Por favor, digite o nome do seu bairro.']"
      />

      <q-input
        v-model="usuarioPcd.cidade"
        label="Cidade"
        :rules="[ val => val && val.length > 0 || 'Por favor, digite o nome da sua cidade.']"
      />

      <q-select
        v-model="estadoSelecionado"
        :options="estados"
        label="Estado"
        :rules="[ val => val || 'Por favor, selecione seu estado.']"
        v-on:focus.native="selecionarEstado()"
      />

      <q-input
        type="text"
        v-model="usuarioPcd.cep"
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
        v-model="usuarioPcd.email"
        label="E-mail"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite sua idade.',
        ]"
      />

      <q-input
        type="password"
        v-model="usuarioPcd.senha"
        label="Senha"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite sua idade.',
        ]"
      />

      <q-input
        type="password"
        v-model="usuarioPcd.senha2"
        label="Repetir senha"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite sua idade.',
        ]"
      />

      <div class="flex justify-center">
        <q-option-group style="width: 300px;"
          v-model="usuarioPcd.deficiencias"
          :options="options"
          color="primary"
          type="checkbox"
          inline
        />
      </div>

      <q-toggle v-model="accept" label="Eu aceito os termos da licença"/>

      <div>
        <q-btn label="Cadastrar" type="submit" color="primary" />
        <q-btn label="Cancelar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>

    </q-form>
  </div>
</template>

<script>
export default {
  name: 'CadastroPdD',
  mounted () {
    this.$axios.get('http://localhost:3000/estados').then(
      response => {
        this.estados = response.data
      }
    )
  },
  data () {
    return {
      accept: false,
      estados: null,
      estadoSelecionado: null,
      options: [
        {
          label: 'Auditivo',
          value: 1
        },
        {
          label: 'Físico',
          value: 2
        },
        {
          label: 'Intelectual',
          value: 3
        },
        {
          label: 'Mudez',
          value: 4
        },
        {
          label: 'Visual',
          value: 5
        }
      ],
      usuarioPcd: {
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
        id_estado: null,
        cep: null,
        cpf: null,
        deficiencias: []
      }
    }
  },
  methods: {
    onSubmit () {
      this.selecionarEstado()
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Vocẽ precisa aceitar os termos de licença primeiro'
        })
      } else {
        if (this.usuarioPcd.senha !== this.usuarioPcd.senha2) {
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
            message: 'Enviado',
            timeout: 10500
          })
          this.salvarUsuario()
        }
      }
    },
    onReset () {
      this.estadoSelecionado = null
      this.usuarioPcd.email = null
      this.usuarioPcd.senha = null
      this.usuarioPcd.senha2 = null
      this.usuarioPcd.nome = null
      this.usuarioPcd.telefone = null
      this.usuarioPcd.endereco = null
      this.usuarioPcd.numero = null
      this.usuarioPcd.bairro = null
      this.usuarioPcd.cidade = null
      this.usuarioPcd.id_estado = null
      this.usuarioPcd.cep = null
      this.usuarioPcd.cpf = null
      this.group = null
      this.idade = null
      this.accept = false
    },
    selecionarEstado () {
      this.usuarioPcd.id_estado = this.estadoSelecionado.id
    },
    salvarUsuario () {
      this.selecionarEstado()
      this.$axios.post('http://localhost:3000/usuariopcd', this.usuarioPcd).then(
        response => {
          console.log(console.data)
        }
      )
      console.log(this.usuarioPcd)
      // IMPORTAR MÉTODO 'closeModal' DO COMPONENT PAI
      this.$emit('closeModal')
      window.location = '/'
    }
  }
}
</script>
