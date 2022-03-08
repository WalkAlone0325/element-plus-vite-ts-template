<template>
  <el-main>
    <el-scrollbar>
      <Suspense>
        <template #default>
          <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <div>
                  <!-- multi root component warning -->
                  <component :is="Component" :key="route.path" />
                </div>
              </keep-alive>
            </transition>
          </router-view>
        </template>
      </Suspense>
    </el-scrollbar>
  </el-main>
</template>
