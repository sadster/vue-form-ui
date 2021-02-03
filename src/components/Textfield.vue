<template>
  <label :class="{ errorLabel: error }">{{ labelText }}<br>
    <input
        :type="type"
        :placeholder="placeholder"
        v-model="value"
        @input="checkValue"
    >
    <span
        class="error"
        v-if="error"
    >{{ error }}</span>
  </label>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Textfield',
  props: {
    labelText: String,
    type: String,
    placeholder: String,
  },
  data() {
    return {
      inputType: this.type,
      value: null,
      error: null,
    }
  },
  computed: {
    ...mapGetters(['errorName', 'errorEmail', 'errorPhone'])
  },
  methods: {
    checkValue() {
      if (this.inputType === 'text') {
        if (!this.value.match(/^[a-zA-Z\s-]+$/)) {
          this.error = 'Имя не может содержать цифры и символы, кроме пробела и дефиса'
          this.$store.commit('SET_ERROR_NAME', true)
        } else {
          this.error = ''
          this.$store.commit('SET_ERROR_NAME', false)
        }
      }
      if (this.inputType === 'email') {
        if (!this.value.match(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)) {
          this.error = 'Введено некоректное значение'
          this.$store.commit('SET_ERROR_EMAIL', true)
        } else {
          this.error = ''
          this.$store.commit('SET_ERROR_EMAIL', false)
        }
      }
      if (this.inputType === 'tel') {
        if (!this.value.match(/^\+?[0-9]\(?[0-9]{3}\)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/) || this.value.match(/[0-9]/g).length !== 11) {
          this.error = 'Введено некоректное значение'
          this.$store.commit('SET_ERROR_PHONE', true)
        } else {
          this.error = ''
          this.$store.commit('SET_ERROR_PHONE', false)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

input {
  width: 100%;
  height: 52px;
  margin-top: 8px;
  padding: 16px;
  border: 1px solid #bde2ea;
  border-radius: 6px;
  color: #7C9CBF;
  box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);

  &:focus {
    padding: 15px;
    border: 2px solid #0880AE;
    outline: none;
  }
}

.error {
  color: #FF7171;
  font-size: 14px;
}

.errorLabel {
  margin-bottom: 14px;
}
</style>
