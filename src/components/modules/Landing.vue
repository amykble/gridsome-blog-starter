<template>
  <section class="h-half-view w-full">
    <div class="absolute h-half-view w-full bg-black opacity-70"></div>
    <div class="absolute w-full h-half-view flex flex-col items-center justify-center">
      <h1 class="heading font-title text-3xl text-blue-300 hidden md:inline">Welcome to</h1>
      <g-image
        class="w-auto h-16 md:h-32"
        src="../../assets/images/GO-logo-white.png"
        alt="white logo"
      />
      <g-link to="/contact">
        <button
          type="button"
          class="appointment fade-in mt-10 px-3 py-1 rounded-md text-white font-body bg-greasby shadow hover:bg-greasby-light hover:shadow-lg transition-all duration-200 ease-in-out"
        >Book An Appointment Now</button>
      </g-link>
    </div>
    <g-image
      class="bg-img object-cover w-full h-full object-center"
      src="../../assets/images/opticians-bg-blur.jpg"
      alt="opticians background"
    />
  </section>
</template>

<script>
export default {
	name: 'Landing',
}
</script>

<style scoped>
.heading {
	transform: translateY(40px);
}

button:hover {
	transform: translateY(-3px);
}

.appointment:focus {
	@apply outline-none bg-greasby-light shadow-lg;
}
</style>