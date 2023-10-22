<template>
  <div
    class="bg-slate-800 flex flex-col items-center justify-center h-screen m--8"
  >
    <div class="auth p-16 min-w-96 flex flex-col gap-4 rounded-xl text-white">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.auth {
  background: hsla(219, 25%, 17%, 1);
}
</style>
