<template>
  <main-layout>
    <InvoicePage/>
  </main-layout>
</template>

<script>
import InvoicePage from '~/components/InvoicePage.vue'
import Layout from '../layouts/defualt.vue'
export default {
  components:{
    'home-page': InvoicePage,
    'main-layout' : Layout
  }
}


</script>