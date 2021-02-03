<template>
  <div class="container">
    <Heading
        title="Регистрация"
        text="Уже есть аккаунт?"
        text-link="Войти"
        text-link-url="#"
    ></Heading>
    <form
        class="form"
        :action="action"
    >
      <Textfield
          label-text="Имя"
          type="text"
          placeholder="Введите ваше имя"
      ></Textfield>
      <Textfield
          label-text="Email"
          type="email"
          placeholder="Введите ваш email"
      ></Textfield>
      <Textfield
          label-text="Номер телефона"
          type="tel"
          placeholder="Введите номер телефона"
      ></Textfield>
      <Select
          label-text="Язык"
          :options="langOptions"
      ></Select>
      <Checkbox></Checkbox>
      <Button
          text="Зарегистрироваться"
      ></Button>
    </form>
  </div>
</template>

<script>
import Heading from '@/components/Heading'
import Textfield from '@/components/Textfield'
import Select from '@/components/Select'
import Checkbox from '@/components/Checkbox'
import Button from '@/components/Button'

export default {
  name: 'Form',
  props: {
    action: {
      type: String,
      default: '#',
    },
  },
  components: {
    Heading,
    Textfield,
    Select,
    Checkbox,
    Button,
  },
  data() {
    return {
      langOptions: [
        { text: 'Русский', value: '0', selected: 'selected' },
        { text: 'Английский', value: '1', selected: '' },
        { text: 'Китайский', value: '2', selected: '' },
        { text: 'Испанский', value: '3', selected: '' },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  width: 90%;
  margin: 40px auto;
  padding: 40px 30px;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
}

.form {
  display: flex;
  flex-direction: column;
}
</style>
