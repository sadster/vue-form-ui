<template>
  <button
      :class="{inactive: !checkbox || errorName || errorEmail || errorPhone }"
      type="submit"
  >{{ text }}</button>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Button',
  props: {
    text: String,
  },
  computed: {
    ...mapGetters(['errorName', 'errorEmail', 'errorPhone', 'checkbox'])
  }
}
</script>

<style scoped lang="scss">
button {
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 6px;
  background: #0880AE;
  color: #EBF4F8;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(44, 39, 56, .08), 0 4px 8px rgba(44, 39, 56, .08);
  cursor: pointer;
  transition: all .4s;

  &:hover {
    box-shadow: 0 12px 24px rgba(44, 39, 56, .08), 0 24px 48px rgba(44, 39, 56, .16);
  }

  &:active {
    border: 2px solid rgba(44, 39, 56, .86);
    box-shadow: 0 2px 4px rgba(44, 39, 56, .0001), 0 4px 8px rgba(44, 39, 56, .08);
  }

  &:focus {
    outline: none;
  }
}

.inactive {
  background: #DBE2EA;
  box-shadow: 0 4px 8px rgba(44, 39, 56, .08);
  cursor: not-allowed;

  &:hover {
    box-shadow: 0 4px 8px rgba(44, 39, 56, .08);
  }
}
</style>
