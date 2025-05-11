<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">ログイン</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="email" class="block text-gray-600 mb-1">メールアドレス</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="mb-6">
          <label for="password" class="block text-gray-600 mb-1">パスワード</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          ログイン
        </button>
      </form>

      <p class="text-center text-sm text-gray-500 mt-6">
        アカウントをお持ちでない方は
        <NuxtLink to="/register" class="text-blue-600 hover:underline">登録</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { LoginResponse } from '@/types/Auth';

const { setToken } = useAuth()
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    const res = await apiFetch<LoginResponse>('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        email: email.value,
        password: password.value,
      },
    });

    setToken(res.token);

    // ページ遷移
    await navigateTo('/');
  } catch (error) {
    alert('ログイン失敗');
    console.error(error);
  }
}
</script>
