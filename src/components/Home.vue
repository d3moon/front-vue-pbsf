<template>
  <div
    class="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8"
  >
    <h1 class="mt-10 text-center text-4xl font-bold leading-10">
      Vacinas disponíveis
    </h1>

    <canvas id="pieChart" width="200" height="200"></canvas>

    <ul class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
      <li
        v-for="vacina in vacinaData"
        :key="vacina.id"
        class="h-24 bg-slate-100 rounded"
      >
        <p
          class="justify-between my-1 text-lg text-center font-medium text-blue-950"
        >
          {{ vacina.nome }}
        </p>
        <div class="flex mt-6 justify-end">
          <button
            @click="handleEdit(vacina.id)"
            class="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-8 rounded mr-2"
          >
            Editar
          </button>
          <button
            @click="handleDelete(vacina.id)"
            class="bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-8 rounded"
          >
            Excluir
          </button>
        </div>
      </li>
    </ul>

    <p class="mt-10 text-center text-sm text-gray-500">
      Deseja cadastrar mais vacinas?
      <router-link
        to="/"
        class="ml-1 font-semibold leading-6 text-cyan-600 hover:text-cyan-500"
      >
        Clique aqui
      </router-link>
    </p>
  </div>
</template>

<script>
import { computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import router from '../router'
import Chart from 'chart.js/auto'

export default {
  setup() {
    const store = useStore()
    const vacinaData = computed(() => store.state.vacinaData)

    onMounted(() => {
      store.dispatch('fetchVacinaData')
    })

    const handleDelete = async (vacinaId) => {
      try {
        console.log(vacinaId)
        const response = await axios.delete('http://localhost/vacinas/', {
          data: {
            id: vacinaId,
          },
        })
        console.log(response)
        router.push('/')
      } catch (error) {
        console.error(error)
      }
    }

    const handleEdit = (vacinaId) => {
      store.commit('setVaccineId', vacinaId)
      router.push('/edit')
    }

    const renderPieChart = () => {
      const publicoAlvoA = vacinaData.value.filter(
        (vacina) => vacina.publico_alvo === 'Adulto',
      ).length
      const publicoAlvoC = vacinaData.value.filter(
        (vacina) => vacina.publico_alvo === 'Criança',
      ).length

      const existingChart = Chart.getChart('pieChart')
      if (existingChart) {
        existingChart.destroy()
      }

      const ctx = document.getElementById('pieChart').getContext('2d')
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Adultos', 'Crianças'],
          datasets: [
            {
              data: [publicoAlvoA, publicoAlvoC],
              backgroundColor: ['#FF6384', '#36A2EB'],
            },
          ],
        },
        options: {
          aspectRatio: 6,
        },
      })
    }

    onMounted(() => {
      renderPieChart()
    })

    watch(vacinaData, () => {
      renderPieChart()
    })

    return {
      vacinaData,
      handleDelete,
      handleEdit,
    }
  },
}
</script>
