<template>
    <h1>Interpolations</h1>
    <h2>Named interpolation</h2>
    <div>{{ t('message.hello', {msg:'hello'}) }}</div>
    <h2>List interpolation</h2>
    <div>{{ t('message1.hello', ['hello']) }}</div>
    <h2>Literal interpolation</h2>
    <div>{{ t('address', { account: 'foo', domain: 'domain.com' }) }}</div>
    <h1>Linked messages</h1>
    <div>{{ t('message3.linked') }}</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()



</script>

<style scoped></style>
