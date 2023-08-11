<template>
  <div class="flex min-h-screen justify-center items-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-10 w-auto"
          src="https://pbsf.com.br/wp-content/uploads/2023/03/logo-pbsf-vetorizado-sem-slogan-1-web-min.png"
          alt="PBSF Logo" />
        <h2 class="mt-6 text-center text-3xl font text-gray-900">
          Cadastre uma Vacina
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div>
          <label for="nome" class="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <div class="mt-1">
            <input id="nome" name="nome" type="text" v-model="formData.nome" required
              class="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
          </div>
        </div>
        <div>
          <label for="publico_alvo" class="block text-sm font-medium text-gray-700">
            Público Alvo
          </label>
          <div class="mt-1 space-y-2">
            <label class="inline-flex items-center">
              <input type="radio" name="publico_alvo" value="A" v-model="formData.publico_alvo"
                class="form-radio h-4 w-4 text-cyan-600" />
              <span class="ml-2">Adulto</span>
            </label>
            <label class="ml-2 inline-flex items-center">
              <input type="radio" name="publico_alvo" value="C" v-model="formData.publico_alvo"
                class="form-radio h-4 w-4 text-cyan-600" />
              <span class="ml-2">Criança</span>
            </label>
          </div>
        </div>
        <div>
          <button type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
            Cadastrar
          </button>
        </div>
      </form>
      <p class="mt-2 text-center text-sm text-gray-600">
        Deseja visualizar todas as vacinas?
        <router-link to="/home" class="font-medium text-cyan-600 hover:text-cyan-500">
          Clique aqui
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
import router from '../router';

export default {
  setup() {
    const store = useStore();
    const formData = computed(() => store.state.formData);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post(`http://localhost:8000/vacinas/`, formData.value);
      } catch (error) {
        console.error(error);
        console.log('Ocorreu um erro ao enviar os dados.');
      }
    };

    return {
      formData,
      handleSubmit,
    };
  },
};
</script>
