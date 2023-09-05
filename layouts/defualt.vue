<template>
  <Navbar/>
  <slot/>
  <Footer class="mt-20"/>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default{
  components:{
    Navbar
  }
}
</script>
