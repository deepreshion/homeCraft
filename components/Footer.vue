<script setup lang="ts">

</script>

<template>
  <div class="footer">&copy;<span id="year"> </span><span> All rights reserved.</span></div>
</template>

<style scoped lang="scss">
.footer {
  margin-top: 80px;
  padding: 2rem;
  background: black;
  color: white;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  @media (max-width: 768px) {
    margin-top: 40px;
  }
}
</style>