<template>
  <header class="w-[100%] sticky top-0 left-0 m-0 p-0 border-b-[1.5px]" style="-webkit-backdrop-filter: saturate(180%) blur(20px); backdrop-filter: saturate(180%) blur(20px);">
      <div class="w-[80%] mx-auto md:flex justify-between py-6 px-0 hidden sm">
        <span class="cursor-pointer">
          <img src="https://www.payway.com.kh/payway-logo.svg" width="220" height="22" class="sm:h-[13px] md:h-[15px] lg:h-[18px] 2xl:h-[22px] 2xl:w-[220px]" alt="aba..">
        </span>
        <div class="flex justify-between ">
          <div class="px-4 ">
            <ul class="flex">
              <li class="mx-4"><NuxtLink class="text-[20px] hover:text-[#00bcd4] cursor-pointer">Products</NuxtLink></li>
              <li class="mx-4"><NuxtLink class="text-[20px] hover:text-[#00bcd4] cursor-pointer">Developers</NuxtLink></li>
              <li class="mx-4"><NuxtLink class="text-[20px] hover:text-[#00bcd4] cursor-pointer">About Us</NuxtLink></li>
              <li class="mx-4"><NuxtLink class="text-[20px] hover:text-[#00bcd4] cursor-pointer">Apply Now</NuxtLink></li>
            </ul>
          </div>
          <div class="flex px-4 ">
            <button class="md:mr-3 p-2 border-[2px] rounded-md border-[#00bcd4]"><img src="https://www.payway.com.kh/icon/switch-lang.svg" alt=""></button>
            <button class="py-1 px-3 border-[2px] rounded-md border-[#00bcd4]">Login</button>
          </div>
        </div>
      </div>
      <!--Mobile Phone-->
      <div class="md:hidden sm:flex w-full flex justify-between py-4 px-0">
        <span class="cursor-pointer pl-2">
          <img src="https://www.payway.com.kh/payway-logo.svg" width="160" alt="aba..">
        </span>
         <div class="flex pr-2">
            <div class="py-2">
              <button class="mr-1 p-2 border-[2px] rounded-md border-[#00bcd4]"><img src="https://www.payway.com.kh/icon/switch-lang.svg" alt=""></button>
              <button class="py-1 mx-1 px-3 border-[2px] rounded-md border-[#00bcd4]">Login</button>
              <button id="menu" class="ml-1 p-2 border-[2px] rounded-md border-[#00bcd4]"> <img width="18" src="https://www.payway.com.kh/image/hamburger-menu.svg" alt=""></button>
            </div>
          </div>
      </div>
  </header>
</template>

<script>
 export default{
  data(){
    return{
      isActive: false
    }
  },
  mounted(){
    const menu = document.getElementById('menu');
    const bg_body = document.getElementById('menu_show')
    menu.addEventListener('click',this.toggleMenu)
    bg_body.addEventListener('click',this.toggleCancel)
  },
  methods:{
    toggleMenu(){
      const sub = document.getElementById('menu_show');
      if(this.isActive===false){
        this.isActive = true
        sub.classList.remove('hidden')
      }else{
         this.isActive = false
        sub.classList.add('hidden')
      }
    },
    toggleCancel(){
      const bgbody = document.getElementById('menu_show')
      if(this.isActive===true){
        this.isActive = false
        bgbody.classList.add('hidden')
      }
    }
  }
 }
</script>