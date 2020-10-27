<template>
  <div class=" row q-pa-lg text-center flex-center justify-center">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md" style="width: 500px;"
    >
    <h6 class="text-azul_escuro">Cadastro Usuário PcD</h6>
      <q-input
        v-model="nome"
        label="Nome"
        :rules="[ val => val && val.length > 0 || 'Por favor, digite seu nome completo.']"
      />

      <q-input
        type="text"
        v-model="idade"
        label="Idade"
        mask="##/##/####"
        fill-mask
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite sua idade.',
        ]"
      />

      <q-input
        type="text"
        v-model="cpf"
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
        v-model="telefone"
        label="Telefone"
        mask="(##) #####-####"
        fill-mask
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite seu telefone.',
        ]"
      />

      <q-input
        type="email"
        v-model="email"
        label="E-mail"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite sua idade.',
        ]"
      />

      <q-input
        type="password"
        v-model="senha1"
        label="Senha"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite sua idade.',
        ]"
      />

      <q-input
        type="password"
        v-model="senha2"
        label="Repetir senha"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, digite sua idade.',
        ]"
      />

      <div class="flex justify-center">
        <q-option-group style="width: 300px;"
          v-model="group"
          :options="options"
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
      nome: null,
      idade: null,
      cpf: null,
      telefone: null,
      email: null,
      senha1: null,
      senha2: null,
      accept: false,
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
    fechar () {
      this.$emit('v-close-popup')
    }
  }
}
</script>
