<template>
  <span class="error-message animate__animated animate__fadeIn animate__faster text-danger">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'VInputErrorMessage',
}
</script>

<style scoped lang="scss">
.error-message {
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 14px;
  line-height: 1;
  padding-top: 4px;
}
</style>
