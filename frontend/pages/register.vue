<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">新規登録</h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="name">名前</label>
          <input
            v-model="name"
            id="name"
            type="text"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="email">メールアドレス</label>
          <input
            v-model="email"
            id="email"
            type="email"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 mb-2" for="password">パスワード</label>
          <input
            v-model="password"
            id="password"
            type="password"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          登録する
        </button>
      </form>
      <p class="mt-4 text-sm text-center">
        アカウントをお持ちですか？
        <NuxtLink to="/login" class="text-blue-500 hover:underline">ログインはこちら</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')

const handleRegister = async () => {
  try {
    await $fetch('/api/register', {
      baseURL: 'http://localhost:8000',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
      },
    });

    alert('登録成功！ログイン状態です。');
    await navigateTo('/');
  } catch (error) {
    alert('登録失敗');
    console.error(error);
  }
}
</script>
