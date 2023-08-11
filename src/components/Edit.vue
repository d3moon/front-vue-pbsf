<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto"
        src="https://pbsf.com.br/wp-content/uploads/2023/03/logo-pbsf-vetorizado-sem-slogan-1-web-min.png"
        alt="PBSF Logo" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Edite suas informações
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleUpdate">
        <div>
          <label for="nome" class="block text-sm font-medium leading-6 text-gray-900">
            Nome
          </label>
          <div class="mt-2">
            <input id="text" name="nome" type="text" :placeholder="vacinaData.nome" v-model="formData.nome"
              @change="handleChange" required
              class="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="publico" class="block text-sm font-medium leading-6 text-gray-900">
              Público Alvo
            </label>
          </div>
          <div class="mt-2">
            <label class="inline-flex items-center">
              <input type="radio" name="publico_alvo" value="A" :checked="formData.publico_alvo === 'A'"
                @change="handleChange" class="form-radio h-4 w-4 text-cyan-600" />
              <span class="ml-2">Adulto</span>
            </label>
            <label class="inline-flex items-center ml-6">
              <input type="radio" name="publico_alvo" value="C" :checked="formData.publico_alvo === 'C'"
                @change="handleChange" class="form-radio h-4 w-4 text-cyan-600" />
              <span class="ml-2">Criança</span>
            </label>
            <label class="inline-flex items-center ml-6">
              <input type="radio" name="publico_alvo" value="" :checked="formData.publico_alvo === ''"
                @change="handleChange" class="form-radio h-4 w-4 text-cyan-600" />
              <span class="ml-2">Não especificado</span>
            </label>
          </div>
        </div>
        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Editar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import router from '../router';

export default {
  setup() {
    const store = useStore();
    const vaccineId = computed(() => store.state.vaccineId);
    const vacinaData = computed(() => store.state.vacinaData);
    const formData = computed(() => store.state.formData);

    const handleChange = (e) => {
      const { name, value } = e.target;
      store.commit('setFormData', { ...formData.value, [name]: value });
    };

    const handleUpdate = async () => {
      try {
        await axios.put(
          `http://localhost:8000/vacinas/${vaccineId.value}/`,
          formData.value
        );
        router.push('/home');
      } catch (error) {
        console.error(error);
      }
    };

    return {
      vacinaData,
      formData,
      handleChange,
      handleUpdate,
    };
  },
};
</script>
