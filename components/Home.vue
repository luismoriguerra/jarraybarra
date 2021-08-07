<template>
  <div class="w-screen mx-auto bg-jarra min-h-screen">
    <div class="container mx-auto">
      <div class="flex justify-center pt-6">
        <img class="w-[15rem]" src="~assets/images/jamaybarralogo.png" alt="" />
      </div>
      <div class="h-10"></div>

      <div class="flex flex-col justify-center items-center">
        <div class="font-kaushan text-5xl text-yellow-300 mb-5">ARMA TU</div>
        <div class="font-kaushan text-5xl uppercase text-white">Duo y trio</div>
        <div class="font-kaushan text-5xl uppercase text-white">Marino</div>
      </div>

      <div class="h-16"></div>
      <div class="image-1 mx-0 flex justify-center">
        <img
          class="w-[236px] border-white border-8 shadow transform rotate-12"
          src="~assets/images/cevicheduo.jpg"
          alt=""
        />
      </div>
      <div class="image-2 flex justify-center">
        <img
          class="
            w-[236px]
            border-white border-8
            shadow
            transform
            -translate-y-10
            -rotate-12
          "
          src="~assets/images/cevichetrio.png"
          alt=""
        />
      </div>

      <div class="precios bg- py-7">
        <div class="flex justify-center">
          <div class="mx-5 text-white">
            <div class="font-kaushan text-5xl text-center mb-5 text-yellow-300">
              SÁBADO 7
            </div>
            <div class="font-kaushan text-5xl mb-2">Dúo S/. 12.00</div>
            <div class="font-kaushan text-5xl">Trío S/. 15.00</div>
          </div>
        </div>
      </div>

      <div class="h-6"></div>
      <div class="flex flex-col justify-center">
        <div class="font-kaushan text-5xl text-center mb-5 text-yellow-300">
          DELIVERY
        </div>
      </div>

      <div
        class="
          flex flex-col
          justify-center
          items-center
          text-white text-2xl
          space-y-4
        "
      >
        <div
          class="link cursor-pointer flex justify-center items-center space-x-1"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="text-white w-9 h-9"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"
              />
            </svg>
          </span>
          <a href="https://wa.me/+51992170201">992170201</a>
        </div>
        <div
          class="link cursor-pointer flex justify-center items-center space-x-1"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="text-white w-9 h-9"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"
              />
            </svg>
          </span>
          <a href="https://wa.me/+51992700069">992700069</a>
        </div>
      </div>

      <div class="h-10"></div>
      <div class="flex flex-col justify-center">
        <div class="font-kaushan text-5xl text-center mb-5 text-yellow-300">
          UBICANOS
        </div>
      </div>
      <div class="flex mx-5 justify-center items-start">
        <span class="text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-8 h-8"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <div class="text-white text-center mb-5">
          Urb. Leoncio Prado Mz a1 lote 1 - Rimac (Ref. Al frente de la posta
          medica)
        </div>
      </div>

      <div class="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.54146143977!2d-77.03126147076583!3d-12.03210099946731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf4855b5210f%3A0x189f8268094f1751!2sLeoncio%20Prado%2C%20Lima%20District%2015093!5e0!3m2!1sen!2spe!4v1628357012036!5m2!1sen!2spe"
          class="w-full"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div class="delivery"></div>
    </div>
  </div>
</template>
