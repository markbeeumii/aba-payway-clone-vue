<template>
  <main>
    <div class="w-[80%] mx-auto mt-20 flex flex-wrap md:flex-row sm:flex-col md:mb-0 mb-6 sm">
       <div class="md:w-[50%] sm:w-full">
        <span class="flex">
          <h1 class="text-[40px] font-bold text-gray-700">
          Payment Solution <br/> for <strong class="text-[#00bcd4]">Pay on Delivery</strong>
          </h1>
        </span>
        <div class="py-3">
          <p class="text-[20px]">Boost your sales by providing seamless <br/> payment experience to your clients.</p>
          <div class="py-8">
            <NuxtLink to="/invoicing-tool" class="cursor-pointer px-10 py-3 text-white font-medium bg-[#00bcd4] rounded-md">Explore Now</NuxtLink>
          </div>
        </div>
       </div>
      <div class="md:w-[50%] sm:w-full">
        <img src="https://www.payway.com.kh/image/cases/social_commerce.svg" alt="">
      </div>
    </div>
    <!--Hi-->
    <h1 class="mt-10 text-center text-gray-700 font-bold text-[35px]">Businesses using PayWay</h1>
    <div class="w-full mx-auto mt-3">
      <div class="w-full relative">
      <ul class="flex" style="flex-shrink: 0;
    justify-content: space-around; animation: scroll-23f192c0 90s linear infinite;overflow: hidden;">
        <li v-for="i in 20" v-bind:key="i" class="w-[60px] h-[60px] mx-2 rounded-[50%]">
          <img class="rounded-[50%]" src="../public/11.webp" alt="i">
        </li>
      </ul>
      </div>
    </div>

<!--Text-->
    <div class="w-full mt-10">
      <h1 class="text-[30px] text-gray-700 font-bold text-center">Payment Solutions for All Business Needs</h1>
      <div class="md:flex md:justify-center">
        <p class="text-[20px] text-center md:p-0 mt-4 md:w-[800px] px-2 sm">
        ABA PayWay is developed for businesses of all sizes. Regardless of business type and its offerings you can easily accept cashless payments in both KHR and USD currencies.
        </p>
      </div>
    </div>
<!--Text-->
  <div class="mt-20 w-[80%] mx-auto">
    <div class="w-full mb-8 flex" style="webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    display: flex;
    overflow-x: auto;">
      <div class="md:w-[25%] sm:w-[50%] cursor-pointer text-[22px] font-medium text-gray-700 hover:border-b-[3px] hover:border-[#00bcd4] flex justify-center hover:text-[#00bcd4]">
        FOR ONLINE SALES
      </div>
      <div class="md:w-[25%] sm:w-[50%] cursor-pointer text-[22px] font-medium text-gray-700 hover:border-b-[3px] hover:border-[#00bcd4] flex justify-center hover:text-[#00bcd4]">
        FOR ONLINE SALES
      </div>
      <div class="md:w-[25%]  cursor-pointer text-[22px] font-medium text-gray-700 hover:border-b-[3px] hover:border-[#00bcd4] flex justify-center hover:text-[#00bcd4]">
        FOR ONLINE SALES
      </div>
      <div class="md:w-[25%]  cursor-pointer text-[22px] font-medium text-gray-700 hover:border-b-[3px] hover:border-[#00bcd4] flex justify-center hover:text-[#00bcd4]">
        FOR ONLINE SALES
      </div>
    </div>
<!--Text-->
<!--Text-->
    <div v-for="i in 2" v-bind:key="i" class="mt-2 flex flex-wrap md:flex-row sm:flex-col">
      <div class="custome-card md:w-[31%] text-gray-700 sm:w-full md:mx-4 rounded-[30px] cursor-pointer hover:text-white p-6 mb-4 sm" style="box-shadow: 5px 15px 45px #accbff40; ">
        <div class="flex justify-between">
          <div class="w-[45px] h-[45px] rounded-[50%] bg-slate-200 mb-6 ">
            <img  class="w-full rounded-[50%]" src="https://www.payway.com.kh/image/product/key_advantages/invoicing_tool/1.svg" alt="">
          </div>
          <span class="p-2">
            <img id="img-row" src="https://www.payway.com.kh/image/arrow-right.svg" style="width:25px;" alt="sae">
            <img src="https://www.payway.com.kh/image/arrow-right-white.svg" style="width:25px;" alt="sae">
          </span>
        </div>
        <div>
          <h2 class=" font-medium text-[20px]">Zero Integration</h2>
          <p class="  text-[20px]">
            Start using the Invoicing tool instantly as soon as you have an ABA account.
          </p>
        </div>
      </div>
       <div class="custome-card md:w-[31%] text-gray-700 sm:w-full md:mx-4 rounded-[30px] cursor-pointer hover:text-white  p-6 mb-4 sm" style="box-shadow: 5px 15px 45px #accbff40; ">
        <div class="flex justify-between">
          <div class="w-[45px] h-[45px] rounded-[50%] bg-slate-200 mb-6 p-2">
            <img  class="w-full rounded-[50%]" src="https://www.payway.com.kh/icon/file.svg" alt="">
          </div>
          <span class="p-2">
            <img id="img-row" src="https://www.payway.com.kh/image/arrow-right.svg" style="width:25px;" alt="sae">
            <img src="https://www.payway.com.kh/image/arrow-right-white.svg" style="width:25px;" alt="sae">
          </span>
        </div>
        <div>
          <h2 class=" font-medium text-[20px]">Zero Integration</h2>
          <p class="  text-[20px]">
            Start using the Invoicing tool instantly as soon as you have an ABA account.
          </p>
        </div>
      </div>
       <div class="custome-card md:w-[31%] text-gray-700 sm:w-full md:ml-4 rounded-[30px] cursor-pointer hover:text-white  p-6 mb-4 sm" style="box-shadow: 5px 15px 45px #accbff40; ">
        <div class="flex justify-between">
          <div class="w-[45px] h-[45px] rounded-[50%] bg-slate-200 mb-6 p-2">
            <img  class="w-full rounded-[50%]" src="https://www.payway.com.kh/icon/qr.svg" alt="">
          </div>
          <span class="p-2">
            <img id="img-row" src="https://www.payway.com.kh/image/arrow-right.svg" style="width:25px;" alt="sae">
            <img src="https://www.payway.com.kh/image/arrow-right-white.svg" style="width:25px;" alt="sae">
          </span>
        </div>
        <div>
          <h2 class=" font-medium text-[20px]">Zero Integration</h2>
          <p class="  text-[20px]">
            Start using the Invoicing tool instantly as soon as you have an ABA account.
          </p>
        </div>
      </div>
    </div>
  </div>
<!--Text-->

  <!--Text-->
      <h1 class="my-8 text-[35px] font-bold text-center text-gray-700">Key Advantages</h1>
      <div class="w-[80%] mx-auto flex flex-wrap md:flex-row sm:flex-col">
        <div class="md:w-[31%] sm:w-full md:mr-4 md:mb-0 mb-8 sm">
         <div class="w-full items-center justify-center flex mb-4">
            <div class="w-[40px] bg-[#ddd] h-[40px] rounded-[50%] p-1">
              <img  class="w-full rounded-[50%]" src="https://www.payway.com.kh/icon/key_advantages/1.svg" alt="">
            </div>
         </div>
          <h2 class="mb-3 text-center text-[20px] font-medium text-gray-700">Great Check-Out Experience</h2>
          <span>
            <p class="text-center text-[19px] text-gray-700">Attract more clients and keep them loyal by offering a smooth payment experience during checkout.</p>
          </span>
        </div>
        <div class="md:w-[31%] sm:w-full md:mx-4 md:mb-0 mb-8 sm">
         <div class="w-full items-center justify-center flex mb-4">
            <div class="w-[40px] bg-[#ddd] h-[40px] rounded-[50%] p-1">
              <img  class="w-full rounded-[50%]" src="https://www.payway.com.kh/icon/key_advantages/1.svg" alt="">
            </div>
         </div>
          <h2 class="mb-3 text-center text-[20px] font-medium text-gray-700">Great Check-Out Experience</h2>
          <span>
            <p class="text-center text-[19px] text-gray-700">Attract more clients and keep them loyal by offering a smooth payment experience during checkout.</p>
          </span>
        </div>
        <div class="md:w-[31%] sm:w-full md:ml-4 md:mb-0 mb-8 sm">
         <div class="w-full items-center justify-center flex mb-4">
            <div class="w-[40px] bg-[#ddd] h-[40px] rounded-[50%] p-1">
              <img  class="w-full rounded-[50%]" src="https://www.payway.com.kh/icon/key_advantages/1.svg" alt="">
            </div>
         </div>
          <h2 class="mb-3 text-center text-[20px] font-medium text-gray-700">Great Check-Out Experience</h2>
          <span>
            <p class="text-center text-[19px] text-gray-700">Attract more clients and keep them loyal by offering a smooth payment experience during checkout.</p>
          </span>
        </div>
      </div>
<!--Text-->

<!--Text-->
    <div class="mt-8 w-[80%] mx-auto flex flex-wrap md:flex-row sm:flex-col">
      <div class="md:w-[50%] sm:wull">
        <img class="w-full" src="https://www.payway.com.kh/image/multiple-methods.webp" alt="sace">
      </div>
      <div class="md:w-[50%] sm:wull md:my-20 md:mb-0 mb-8 sm">
        <h1 class="text-[38px] text-gray-700 font-bold">Multiple Payment Methods</h1>
        <p class="text-[20px] text-gray-700">
          ABA PayWay is integrated with all popular payment methods in Cambodia. So, you can accept cashless payments online and in person instantly and hassle free in both KHR and USD.
        </p>
      </div>
    </div>
<!--Text-->

<!--Text-->
    <div class="mt-8 w-[80%] mx-auto flex flex-wrap md:flex-row sm:flex-col">
      <div class="md:w-[50%] sm:wull md:my-20">
        <h1 class="text-[38px] text-gray-700 font-bold">Real-time Merchant Portal</h1>
        <p class="text-[20px] text-gray-700">
          With PayWay's merchant portal, you can easily monitor and manage all of your transactions in real-time. The portal provides you with comprehensive insights into your sales, allowing you to track your revenue and make data-driven decisions to grow your business.
        </p>
      </div>
      <div class="md:w-[50%] sm:wull md:mb-0 mb-8 sm">
        <img class="w-full" src="https://www.payway.com.kh/image/dashboard.webp" alt="sace">
      </div>
    </div>
<!--Text-->

  <!--Text-->
    <div class="mt-8 w-[80%] mx-auto flex flex-wrap md:flex-row sm:flex-col">
       <div class="md:w-[50%] sm:wull">
        <img class="w-full" src="https://www.payway.com.kh/image/developer.webp" alt="sace">
      </div>
      <div class="md:w-[50%] sm:wull md:my-20">
        <h1 class="text-[38px] text-gray-700 font-bold">Ready for Developers</h1>
        <p class="text-[20px] text-gray-700">
          Developers are welcome to PayWay's Developer Suit that provides access to all necessary API's and Sandbox, so you can integrate and test the different payment options.
        </p>
        <div class="py-4 mt-6">
          <NuxtLink  to="/invoicing-tool" class="mt-8 px-10 py-3 text-white font-medium bg-[#00bcd4] rounded-md">Learn More</NuxtLink>
        </div>
      </div>
    </div>
<!--Text-->

<!--Text-->
  <div id="menu_show" class="hidden px-3 fixed w-full h-full overflow-auto top-20 left-0 bg-gray-400 bg-opacity-40">
    <div class="w-[100%] bg-white mt-6 rounded-md">
      <div class="w-full">
        <div class="flex justify-between p-2">
          <h2 class="text-[14px] font-medium text-gray-700 ">PRODUCTS</h2>
          <span class="p-1" id="menu_click">
            <img src="https://www.payway.com.kh/icon/cross.svg"  width="15" alt="">
          </span>
        </div>
      </div>
    <div class=" w-full flex flex-wrap flex-row">
      <div class="w-[48%] flex mb-4">
        <span class="mx-2"><img src="https://www.payway.com.kh/icon/product/invoicing_tool.svg" width="15" alt=""></span>
        <h6 class="text-[14px] text-gray-700">Invoicing Tool</h6>
      </div>
      <div class="w-[48%] flex mb-4">
        <span class="mx-2"><img src="https://www.payway.com.kh/icon/product/invoicing_tool.svg" width="15" alt=""></span>
        <h6 class="text-[14px] text-gray-700">Invoicing Tool</h6>
      </div>
      <div class="w-[48%] flex mb-4">
        <span class="mx-2"><img src="https://www.payway.com.kh/icon/product/invoicing_tool.svg" width="15" alt=""></span>
        <h6 class="text-[14px] text-gray-700">Invoicing Tool</h6>
      </div>
      <div class="w-[48%] flex mb-4">
        <span class="mx-2"><img src="https://www.payway.com.kh/icon/product/invoicing_tool.svg" width="15" alt=""></span>
        <h6 class="text-[14px] text-gray-700">Invoicing Tool</h6>
      </div>
      <div class="w-[48%] flex mb-4">
        <span class="mx-2"><img src="https://www.payway.com.kh/icon/product/invoicing_tool.svg" width="15" alt=""></span>
        <h6 class="text-[14px] text-gray-700">Invoicing Tool</h6>
      </div>
      <div class="w-[48%] flex mb-4">
        <span class="mx-2"><img src="https://www.payway.com.kh/icon/product/invoicing_tool.svg" width="15" alt=""></span>
        <h6 class="text-[14px] text-gray-700">Invoicing Tool</h6>
      </div>
      <div class="w-[48%] flex mb-4">
        <span class="mx-2"><img src="https://www.payway.com.kh/icon/product/invoicing_tool.svg" width="15" alt=""></span>
        <h6 class="text-[14px] text-gray-700">Invoicing Tool</h6>
      </div>
      <div class="w-[48%] flex mb-4">
        <span class="mx-2"><img src="https://www.payway.com.kh/icon/product/invoicing_tool.svg" width="15" alt=""></span>
        <h6 class="text-[14px] text-gray-700">Invoicing Tool</h6>
      </div>
      <div class="w-[48%] flex mb-4">
        <span class="mx-2"><img src="https://www.payway.com.kh/icon/product/invoicing_tool.svg" width="15" alt=""></span>
        <h6 class="text-[14px] text-gray-700">Invoicing Tool</h6>
      </div>
    </div>
    <div class="w-full mb-4 px-2 flex justify-center text-[14px] text-opacity-20 text-gray-700 font-medium">................................................................................</div>
     <div class=" w-full flex flex-wrap flex-row">
      <div class="w-[48%] flex mb-4">
        <span class="mx-2"><img src="https://www.payway.com.kh/icon/product/invoicing_tool.svg" width="15" alt=""></span>
        <h6 class="text-[14px] text-gray-700">Invoicing Tool</h6>
      </div>
      <div class="w-[48%] flex mb-4">
        <span class="mx-2"><img src="https://www.payway.com.kh/icon/product/invoicing_tool.svg" width="15" alt=""></span>
        <h6 class="text-[14px] text-gray-700">Invoicing Tool</h6>
      </div>
      <div class="w-[48%] flex mb-4">
        <span class="mx-2"><img src="https://www.payway.com.kh/icon/product/invoicing_tool.svg" width="15" alt=""></span>
        <h6 class="text-[14px] text-gray-700">Invoicing Tool</h6>
      </div>
     </div>
     <div class="w-full flex justify-center p-4">
      <button class=" px-5 py-1 text-white font-medium bg-[#00bcd4] rounded-md">Login</button>
      </div>
    </div>
  </div>
<!--Text-->

  </main>
</template>