<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { affectRoles, getUserDetails } from './auth'
import type { User, AdminMap } from './auth'
import UserIcon from './ui/UserIcon.vue'
const props = defineProps<{
  lang?: string
  activeApp?: string
}>()

const state = reactive({
  user: null as null | User,
  adminMap: {} as AdminMap,
})
onMounted(() => {
  getUserDetails().then(user => {
    state.user = user
    state.adminMap = affectRoles(user)
  })
})
</script>
<template>
  <header class="host">
    <div
      class="admin pr-8 items-center bg-primary/20 text-secondary/80 flex justify-end gap-5 text-sm font-sans"
      v-if="state.adminMap?.admin"
    >
      <div class="py-1 bg-secondary/80 text-slate-100 px-8">Administration</div>
      <a
        href="/geonetwork/srv/fre/admin.console"
        class="catalog py-1 hover:text-secondary/60"
        v-if="state.adminMap.catalog"
        >catalog</a
      >
      <a
        href="/mapstore/#/admin"
        v-if="state.adminMap.mapstore"
        class="py-1 hover:text-secondary/60"
        >mapstore</a
      >
      <a
        href="/console/manager"
        v-if="state.adminMap.console"
        class="console py-1 hover:text-secondary/60"
        >console</a
      >
      <a href="/analytics/" class="console py-1 hover:text-secondary/60"
        >analytics</a
      >
    </div>
    <div class="h-20 flex justify-between text-slate-600">
      <div class="flex">
        <a href="/" class="flex justify-center items-center px-8 bg-primary/10">
          <img
            src="https://www.georchestra.org/public/georchestra-logo.svg"
            alt="geOrchestra logo"
            class="w-32"
          />
        </a>
        <nav class="flex justify-center items-center font-semibold">
          <a class="nav-item" href="/datahub/">Data</a>
          <a class="nav-item" href="/mapstore/">Viewer</a>
          <a class="nav-item" href="/mapstore/#/home">Maps</a>
          <a class="nav-item" href="/geoserver/">Services</a>
          <a v-if="state.user?.username" class="nav-item" href="/import/"
            >Import</a
          >
        </nav>
      </div>
      <div class="mr-8 flex justify-center items-center">
        <div v-if="state.user?.username" class="flex gap-4">
          <a class="link-btn" href="/console/account/userdetails">
            <UserIcon class="font-bold text-3xl inline-block mr-4"></UserIcon>
            <span>{{ state.user.username }}</span></a
          >
          <a class="link-btn" href="/logout">logout</a>
        </div>
        <button v-else type="button" class="btn">login</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.host {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-feature-settings: normal;
}

@layer components {
  .nav-item {
    @apply px-6 hover:bg-primary/70 hover:text-slate-100 transition-colors leading-[5];
  }
  .btn {
    @apply px-4 py-2 text-slate-100 bg-primary rounded hover:bg-primary/70 transition-colors;
  }
  .link-btn {
    @apply text-primary/70 hover:underline underline-offset-8 decoration-2 decoration-primary/50;
  }
}
</style>
