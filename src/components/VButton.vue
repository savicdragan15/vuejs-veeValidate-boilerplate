<template>
  <button
    class="btn"
    :disabled="disabled"
    :class="classes"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
const VARIANTS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']
const SIZES = ['sm', 'md', 'lg']

export default {
  name: 'VButton',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    outline: {
      type: Boolean,
      default: false,
    },

    block: {
      type: Boolean,
      default: false,
    },

    variant: {
      type: String,
      validator: value => VARIANTS.includes(value),
      default: VARIANTS[0],
    },

    size: {
      type: String,
      validator: value => SIZES.includes(value),
      default: SIZES[1],
    },
  },

  computed: {
    classes() {
      return [
        this.colorClass,
        this.sizeClass,
        this.blockClass,
      ]
    },

    colorClass() {
      return this.outline ? `btn-outline-${this.variant}` : `btn-${this.variant}`
    },

    sizeClass() {
      return `btn-${this.size}`
    },

    blockClass() {
      return this.block ? 'w-100' : null
    },
  },

  methods: {
    onClick() {
      if (this.disabled) return
      this.$emit('click')
    },
  },
}
</script>
