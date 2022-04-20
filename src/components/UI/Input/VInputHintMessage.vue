<template>
  <span class="hint-message text-muted animate__animated animate__fadeIn animate__faster">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'VInputHintMessage',
}
</script>

<style scoped lang="scss">
.hint-message {
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 14px;
  line-height: 1;
  padding-top: 4px;
}
</style>
