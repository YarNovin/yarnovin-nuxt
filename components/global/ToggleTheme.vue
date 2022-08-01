<template>
  <label class="flex items-center gap-2">
    <input type="checkbox" class="peer hidden" @input="switchTheme" />
    <span
      class="block w-10 h-6 rounded-full bg-gray-200 dark:bg-zinc-800
      relative after:content-[''] after:w-5 after:h-5
      after:bg-amber-300 peer-checked:after:bg-zinc-500 after:rounded-full after:absolute
      after:right-0.5 after:top-0.5 peer-checked:after:right-[1.125rem] after:transition-all"></span>
    <fa :icon="icon" class="text-gray-400" />
  </label>
</template>

<script>
export default {
  data() {
    return {
      icon: ['fas', 'sun'],
      mode: 'light'
    }
  },
  methods: {
    switchTheme() {
      document.documentElement.classList.toggle('dark')
      this.mode === "light" ? this.mode = "dark" : this.mode = "light";
      this.mode === "light" ? this.icon = ['fas', 'sun'] : this.icon = ['fas', 'moon']
    },
  },
}
</script>
