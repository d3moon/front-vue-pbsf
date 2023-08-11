<template>
  <div class="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
    <h1 class="mt-10 text-center text-4xl font-bold leading-10">
      Vacinas disponíveis
    </h1>

    <ul class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
      <li v-for="vacina in vacinaData" :key="vacina.id" class="h-24 bg-slate-100 rounded">
        <p class="justify-between my-1 text-lg text-center font-medium text-blue-950">
          {{ vacina.nome }}
        </p>
        <div class="flex mt-6 justify-end">
          <button @click="handleEdit(vacina.id)"
            class="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-8 rounded mr-2">
            Editar
          </button>
          <button @click="handleDelete(vacina.id)"
            class="bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-8 rounded">
            Excluir
          </button>
        </div>
      </li>
    </ul>

    <p class="mt-10 text-center text-sm text-gray-500">
      Deseja cadastrar mais vacinas?
      <router-link to="/" class="ml-1 font-semibold leading-6 text-cyan-600 hover:text-cyan-500">
        Clique aqui
      </router-link>
    </p>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import router from '../router';

export default {
  setup() {
    const store = useStore();
    const vacinaData = computed(() => store.state.vacinaData);

    console.log(vacinaData)

    onMounted(() => {
      store.dispatch('fetchVacinaData');
    });

    const handleDelete = async (vacinaId) => {
      try {
        await axios.delete(`http://localhost:8000/vacinas/${vacinaId}/`);
        router.push('/');
      } catch (error) {
        console.error(error);
      }
    };

    const handleEdit = (vacinaId) => {
      store.commit('setVaccineId', vacinaId);
      router.push('/edit');
    };

    return {
      vacinaData,
      handleDelete,
      handleEdit,
    };
  },
};
</script>
