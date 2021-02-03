<template>
  <div>
    <input
        class="checkbox"
        type="checkbox"
        id="checkbox"
        v-model="value"
    >
    <label for="checkbox"><span>Принимаю <a href="#">условия</a> использования</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  data() {
    return {
      value: false,
    }
  },
  watch: {
    value(val) {
      this.$store.commit('SET_CHECKBOX', val)
    }
  }
}
</script>

<style scoped>
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.checkbox + label::before {
  content: '';
  display: inline-block;
  flex-shrink: 0;
  flex-grow: 0;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  border: 1px solid #DBE2EA;
  border-radius: 4px;
  background-position: center calc(50% + 5px);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
}

.checkbox:checked + label::before {
  width: 26px;
  height: 26px;
  border: 2px solid #0880AE;
  background-color: #fff;
  background-image: url("../assets/img/checkbox.svg");
}
</style>
