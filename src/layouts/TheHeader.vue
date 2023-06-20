<template>
  <header class="w-full py-4 md:py-8 bg-slate-800">
    <app-container>
      <div class="flex justify-between items-center">
        <h1 class="font-bold md:text-xl xl:text-2xl 2xl:text-3xl text-rose-500">
          <router-link to="/">Find a Coach</router-link>
        </h1>
        <ul class="flex gap-8">
          <li class="nav-link">
            <router-link to="/coaches" class="router-link"
              >All coaches</router-link
            >
          </li>
          <li class="nav-link">
            <router-link to="/requests" class="router-link"
              >Requests</router-link
            >
          </li>
        </ul>
      </div>
    </app-container>
  </header>
</template>

<style scoped>
.router-link {
  color: #929292;
  transition: 0.3s;
}

.router-link:hover {
  color: #f43f5e;
}

.router-link.router-link-active {
  color: #f9fafb;
}
</style>
