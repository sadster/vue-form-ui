<template>
  <div class="heading">
    <h1>{{ title }}</h1>
    <span>{{ text }}
    <a :href="textLinkUrl">{{ textLink }}</a></span>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    title: String,
    text: String,
    textLinkUrl: String,
    textLink: String,
  }
}
</script>

<style scoped>
.heading {
  margin-bottom: 53px;
}

h1 {
  margin: 0 0 9px 0;
  color: #2c2738;
  font-size: 34px;
  font-weight: 700;
}

span {
  color: #2c2738;
  font-weight: 400;
}

a {
  color: #0880AE;
}
</style>
