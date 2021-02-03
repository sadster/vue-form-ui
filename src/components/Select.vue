<template>
  <label for=""> {{ labelText }}
      <!--<select name="" id="">
        <option
            v-for="item in options"
            :key="item.value"
            :value="item.value"
        >{{ item.text }}</option>
      </select>-->
    <div class="select-wrapper">
      <div class="select">
        <div class="select__trigger"><span>Русский</span>
          <div class="arrow"></div>
        </div>
        <div class="options">
          <span
              class="option"
              :class="item.selected"
              v-for="item in options"
              :key="item.value"
              :data-value="item.value"
          >{{ item.text }}</span>
        </div>
      </div>
    </div>
  </label>
</template>

<script>
import * as scripts from '../js/index.js'

export default {
  name: 'Select',
  props: {
    labelText: String,
    options: Array,
  },
  mounted() {
    scripts.toggleSelect()
  }
}
</script>

<style scoped>
label {
  margin-bottom: 33px;
  color: #756f86;
  font-weight: 500;
}

.select-wrapper {
  position: relative;
  width: 100%;
  margin-top: 8px;
  user-select: none;
  box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);
}
.select {
  display: flex;
  flex-direction: column;
  position: relative;
  border-width: 0 1px;
  border-style: solid;
  border-color: #bde2ea;
  border-radius: 6px;
}
.select__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 52px;
  padding: 16px;
  border-width: 1px 0;
  border-style: solid;
  border-color: #bde2ea;
  border-radius: 6px;
  line-height: 52px;
  color: #7C9CBF;
  font-weight: 400;
  cursor: pointer;
}
.options {
  display: block;
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  left: 0;
  border: 1px solid #DBE2EA;
  border-radius: 6px;
  z-index: 2;
  background: #fff;
  transition: all .3s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.select.open .options {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}
.option {
  display: block;
  position: relative;
  padding: 0 16px;
  line-height: 52px;
  color: #756F86;
  font-weight: 400;
  cursor: pointer;
  transition: all .5s;
}
.option:hover {
  cursor: pointer;
  background-color: #EBF4F8;
}
.options.selected {
  color: #ffffff;
  background-color: #EBF4F8;
}
.arrow {
  position: relative;
  height: 15px;
  width: 15px;
  background: url("../assets/img/select.svg") center / 100% no-repeat;
}

.open {
  border-width: 0 2px;
  border-color: #0880AE;
}

.active {
  border-width: 2px 0;
  border-color: #0880AE;
}
</style>
