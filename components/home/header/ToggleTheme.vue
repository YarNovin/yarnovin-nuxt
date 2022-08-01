<template>
  <label class="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" class="peer hidden" @input="switchTheme" :checked="$store.getters.getTheme === 'dark'" />
    <span
      class="block w-10 h-6 rounded-full bg-zinc-800 transition-[background] duration-300
      relative after:content-[''] after:w-5 after:h-5
      after:bg-purple-400 peer-checked:after:bg-zinc-500 after:rounded-full after:absolute
      after:right-0.5 after:top-0.5 peer-checked:after:right-[1.125rem] after:transition-all after:ease-in-out after:duration-300"></span>
    <fa :icon="icon" class="text-gray-300" />
  </label>
</template>

<script>
export default {
  data() {
    return {
      mode: 'light'
    }
  },
  methods: {
    switchTheme() {
      this.$store.commit('switchTheme');
    }
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    },
    icon() {
      return (this.$store.getters.getTheme === "dark") ? ['fas', 'moon'] : ['fas', 'sun'];
    }
  }
}
</script>
