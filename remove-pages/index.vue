<template>
  <div class="text-white flex flex-col gap-4 justify-center items-center">
    <div>{{ nhost.auth.getUser()?.email }}</div>
    <!-- <div>{{ isAuthenticated }}</div> -->

    <div flex gap-4>
      <Button
        @click="signOut()"
        class="bg-slate-700 px-4 py-4 rounded-lg text-slate-50"
      >
        Logga ut
      </Button>
    </div>
    <div flex flex-col>
      <NuxtLink to="/ingredient/1">Ingredient 1</NuxtLink>
      <NuxtLink to="/user/recipes">Mina recept</NuxtLink>
    </div>

    <Button>Test</Button>
    <Icon i-ph-chair-fill text-24px />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.knapp {
  color: greenyellow;
}
</style>
