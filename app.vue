<template>
  <div>
    <Banner />
    <div class="container">
      <Intro />
    </div>
    <Examples />
    <div class="container">
      <AboutUs />
      <Contact />
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Banner from "~/ components/Banner.vue";
import AboutUs from "~/ components/AboutUs.vue";
import Intro from "~/ components/Intro.vue";
import Contact from "~/ components/Contact.vue";
import Examples from "~/ components/Examples.vue";
import Footer from "~/ components/Footer.vue";

</script>