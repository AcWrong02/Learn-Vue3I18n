<template>
  <span>切换语言环境</span>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>
  <MessageFormatSyntaxVue></MessageFormatSyntaxVue>
</template>

<script setup>
import MessageFormatSyntaxVue from './views/MessageFormatSyntax.vue';



</script>

<style scoped></style>
