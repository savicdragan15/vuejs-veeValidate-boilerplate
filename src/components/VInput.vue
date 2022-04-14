<template>
  <div class="form-group d-flex flex-column position-relative">
    <!-- Label -->
    <label
      v-if="label"
      :for="randomId"
      :class="errorClasses"
    >
      {{ label }}
    </label>

    <!-- Input -->
    <input
      :id="randomId"
      v-model="content"
      class="form-control"
      :class="[inputErrorClasses, inputSizeClass]"
      type="text"
      :placeholder="placeholder"
      :readonly="readonly"
    >

    <!-- Hint Message -->
    <span
      v-show="!errorMessages.length && hint"
      class="hint-message text-muted animate__animated animate__fadeIn animate__faster"
    >
      {{ hint }}
    </span>

    <!-- Error Message -->
    <span
      v-show="errorMessages.length"
      class="error-message animate__animated animate__fadeIn animate__faster text-danger"
    >
      {{ errorMessages[0] }}
    </span>
  </div>
</template>

<script>
import { generateRandomId } from '@/utils/randomIdGenerator'

const SIZES = ['sm', 'md', 'lg']

export default {
  name: 'VInput',

  props: {
    value: {
      required: true,
      validator: value => typeof value === 'string' || value === null,
    },

    placeholder: {
      type: String,
      default: null,
    },

    label: {
      type: String,
      default: null,
    },

    hint: {
      type: String,
      default: null,
    },

    size: {
      type: String,
      validator: value => SIZES.includes(value),
      default: SIZES[1],
    },

    readonly: {
      type: Boolean,
      default: false,
    },

    errorMessages: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      randomId: null,
    }
  },

  computed: {
    content: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val !== '' ? val : null)
      },
    },

    inputSizeClass() {
      return `form-control-${this.size}`
    },

    inputErrorClasses() {
      return { 'border-danger': this.errorMessages.length }
    },

    errorClasses() {
      return [
        { 'text-danger animate__animated animate__headShake animate__faster': this.errorMessages.length },
      ]
    },
  },

  mounted() {
    this.randomId = this.generateRandomId()
  },

  methods: {
    generateRandomId,
  },
}
</script>

<style scoped lang="scss">
.form-group {
  margin-bottom: 20px;

  .error-message,
  .hint-message {
    position: absolute;
    top: 100%;
    left: 0;
    font-size: 14px;
    line-height: 1;
    padding-top: 4px;
  }
}

</style>
