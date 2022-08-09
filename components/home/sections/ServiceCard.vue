<template>
  <div>
    <transition name="rotate" mode="out-in">
      <div
        key="preview"
        @click="toggleCard"
        v-if="!isCardOpen"
        class="pers w-full h-full bg-gray-300 dark:bg-zinc-700 shadow-md rounded-2xl flex flex-col gap-4 justify-center items-center transition duration-500 select-none cursor-pointer">
        <fa :icon="icon" class="w-10 h-10" />
        <p class="text-xl text-center">{{ title }}</p>
      </div>
      <div
        key="description"
        v-if="isCardOpen"
        @click="toggleCard"
        dir="auto"
        class="pers w-full h-full bg-gray bg-gray-300 dark:bg-zinc-700 shadow-md rounded-2xl p-4 flex justify-center items-center select-none cursor-pointer">
        <p class="text-center">{{ bodyText }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    isCardOpen: false,
  }),
  methods: {
    toggleCard() {
      this.isCardOpen = !this.isCardOpen
    },
  },
  props: {
    icon: {
      required: true,
      type: Array,
    },
    title: {
      required: true,
      type: String,
    },
    bodyText: {
      required: true,
      type: String,
    },
  },
}
</script>
<style scoped>
.pers {
  transform: perspective(400px);
}

.rotate-enter {
  transform: rotateY(-90deg);
  opacity: 0.2;
}
.rotate-leave-to {
  transform: rotateY(90deg);
  opacity: 0.2;
}

.rotate-enter-active,
.rotate-leave-active {
  transition: 0.4s all linear;
}
</style>
