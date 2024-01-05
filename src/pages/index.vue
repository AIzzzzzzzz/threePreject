<template>
    <HelloWorld v-if="false"></HelloWorld>
  <ModelUplord v-else></ModelUplord>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';
import ModelUplord from '../components/ModelUplord.vue';
import usePiniaStore from '@/store/modules/info';

let piniaStore = usePiniaStore()

let flag = ref({})
flag.value = piniaStore.microAppData



</script>