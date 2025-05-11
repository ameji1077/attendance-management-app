<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <h1 class="text-3xl font-bold mb-4">勤怠管理</h1>

    <div class="bg-white shadow-md rounded-lg p-6 w-80">
      <div v-if="!isWorking" class="flex flex-col items-center">
        <p class="mb-4 text-xl">まだ作業していません。</p>
        <button
          @click="startWork"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          稼働開始
        </button>
      </div>

      <div v-else class="flex flex-col items-center">
        <p class="mb-4 text-xl">現在作業中です。</p>
        <button
          @click="endWork"
          class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none"
        >
          稼働終了
        </button>
      </div>
      <button
        @click="handleLogout"
        class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
      >
      ログアウト
    </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useFetch } from '#app';
import { useAuth } from '@/composables/useAuth';
const { clearToken } = useAuth();

definePageMeta({
  middleware: 'auth',
});

export default defineComponent({
  setup() {
    const isWorking = ref(false);
    const router = useRouter();

    const startWork = async () => {
      try {
        // APIで稼働開始処理
        const response = await useFetch('http://localhost:8000/api/start-work', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        isWorking.value = true;
      } catch (error) {
        console.error('稼働開始に失敗しました', error);
      }
    };

    const endWork = async () => {
      try {
        // APIで稼働終了処理
        const response = await useFetch('http://localhost:8000/api/end-work', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        isWorking.value = false;
      } catch (error) {
        console.error('稼働終了に失敗しました', error);
      }
    };

    const handleLogout = () => {
      clearToken()
      navigateTo('/login')
    }

    return {
      isWorking,
      startWork,
      endWork,
      handleLogout,
    };
  },

});
</script>
