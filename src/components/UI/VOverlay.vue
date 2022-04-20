<template>
  <div class="v-overlay-container animate__animated animate__fadeIn animate__faster">
    <div class="v-overlay-inner">
      <div class="v-overlay-content">
        <span class="v-overlay-spinner" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VOverlay',
}
</script>

<style scoped lang="scss">
.v-overlay-container {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: #00000073;
  cursor: progress;
  z-index: 1;

  .v-overlay-inner {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;

    .v-overlay-content {
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);

      .v-overlay-spinner {
        width: 75px;
        height: 75px;
        display: inline-block;
        border-width: 2px;
        border-color: rgba(255, 255, 255, 0.05);
        border-top-color: #fff;
        animation: spin 1s infinite linear;
        border-radius: 100%;
        border-style: solid;
      }

      @keyframes spin {
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>
