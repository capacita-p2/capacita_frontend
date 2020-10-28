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
        mask="##.####.###-##"
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

      <q-input
        v-model="usuarioPcd.estado"
        label="Estado"
        :rules="[ val => val && val.length > 0 || 'Por favor, escolha seu estado.']"
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
        v-model="usuarioPcd.senha1"
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
          v-model="usuarioPcd.group"
          :options="usuarioPcd.options"
          color="primary"
          type="checkbox"
          inline
        />
      </div>

      <q-toggle v-model="accept" label="Eu aceito os termos da licença" />

      <div>
        <q-btn label="Cadastrar" type="submit" color="primary" @click="$emit('closeModal')"/>
        <q-btn label="Cancelar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>

    </q-form>
  </div>
</template>

<script>
export default {
  name: 'CadastroPdD',
  data () {
    return {
      accept: false,
      usuario: {
        id: null,
        email: null,
        senha1: null,
        senha2: null,
        tipo: 0,
        ativo: true
      },
      usuarioPcd: {
        id: null,
        nome: null,
        telefone: null,
        endereco: null,
        numero: null,
        bairro: null,
        cidade: null,
        estado: null,
        cep: null,
        cpf: null,
        ativo: true,
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
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },
    onReset () {
      this.nome = null
      this.idade = null
      this.accept = false
    },
    salvarUsuario () {
      this.axios.post('http://localhost:3000/usuario', this.usuario).then(
        response => {
          console.log(console.data)
        }
      )
    }
  }
}
</script>
