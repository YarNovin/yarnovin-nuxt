<template>
  <div
    class="flex flex-row h-16 bg-white shadow dark:bg-zinc-700"
    @click="switchTheme"></div>
</template>

<script>
export default {
  methods: {
    switchTheme() {
      document.documentElement.classList.toggle('dark')
    },
  },
}
</script>
