<template>
  <div class="home-wrapper m-auto p-4">
    <h1 class="mb-3 text-center">
      VeeValidate Form Validation
    </h1>
    <validation-observer
      v-slot="{ invalid }"
      ref="formObserver"
    >
      <v-form class="form m-auto">
        <validation-provider
          v-slot="{ errors }"
          name="First name"
          rules="required|max:100"
        >
          <v-input
            v-model="form.firstName"
            label="First name"
            placeholder="First name"
            :error-messages="errors"
          />
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="Last name"
          rules="required"
        >
          <v-input
            v-model="form.lastName"
            label="Last name"
            placeholder="Last name"
            :error-messages="errors"
          />
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="Email"
          rules="email|required|max:100"
        >
          <v-input
            v-model="form.email"
            label="Email address"
            placeholder="Email"
            :error-messages="errors"
            hint="We'll never share your email with anyone else."
          />
        </validation-provider>
        <v-button
          class="text-uppercase mt-3"
          :disabled="loading || invalid"
          variant="success"
          block
          @click="onFormSubmit"
        >
          Submit
        </v-button>
      </v-form>
    </validation-observer>
  </div>
</template>

<script>
import VForm from '@/components/VForm.vue'
import VInput from '@/components/VInput.vue'
import VButton from '@/components/VButton.vue'

export default {
  name: 'HomePage',

  components: {
    VInput,
    VForm,
    VButton,
  },

  data() {
    return {
      loading: false,
      form: {
        firstName: null,
        lastName: null,
        email: null,
      },
    }
  },

  methods: {
    onFormSubmit() {
      const promise = new Promise((resolve => {
        setTimeout(() => {
          resolve('Promise resolved')
        }, 800)
      }))

      this.loading = true
      promise.then(() => {
        this.$toast.success('Form successfully submitted')
        this.loading = false
        this.resetForm()
      })
    },

    resetForm() {
      this.form = {
        firstName: null,
        lastName: null,
        email: null,
      }

      this.$nextTick(() => this.$refs.formObserver.reset())
    },
  },
}
</script>

<style scoped lang="scss">
.home-wrapper {
  max-width: 1200px;

  .form {
    max-width: 500px;
  }
}
</style>
