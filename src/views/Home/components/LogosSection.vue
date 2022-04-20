<template>
  <div class="text-center">
    <div class="d-flex justify-content-center align-items-center">
      <div>
        <img :src="logos.vueJs" alt="vuejs-logo" width="90" />
      </div>
      <div>
        <img :src="logos.veeValidate" alt="vee-validate-logo" width="100" />
      </div>
      <div>
        <img :src="logos.bootstrap" alt="bootstrap-logo" width="100" />
      </div>
    </div>
    <p class="fw-bold">VueJs + VeeValidate + Bootstrap</p>
  </div>
</template>

<script>
export default {
  name: "LogosSection",

  data() {
    return {
      logos: {
        vueJs: require("@/assets/img/vuejs-logo.png"),
        veeValidate: require("@/assets/img/vee-validate-logo.png"),
        bootstrap: require("@/assets/img/bootstrap-logo.png"),
      },
    };
  },
};
</script>
