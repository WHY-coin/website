<template>
  <div
    class="w-full h-full flex flex-col p-2"
    v-if="initDataUnsafe && initDataUnsafe.user"
  >
    <!-- Welcome, {{ initDataUnsafe.user.username }}! -->

    <h1 class="text-left">
      {{ $t('appHome') }}
    </h1>

    <h4 class="text-left">
      {{ $t('actualCourse') }}
    </h4>

    <ClientOnly>
      <VueApexCharts
        width="420"
        height="512"
        :options="chartOptions"
        :series="series"
        class="-ml-6"
      />
    </ClientOnly>
  </div>
</template>


<script setup>
import VueApexCharts from 'vue3-apexcharts';


const { t } = useI18n();


definePageMeta({
  title: '$WHY Home',
  layout: 'telegram',
});


const generateFakeData = () => {
  const dates = [];
  const values = [];
  const colors = [];
  let price = 1;
  for (let i = -1; i < 4; i++) {
    let d = new Date();
    d.setMinutes(d.getMinutes() - (3 - i) * 60);
    dates.push(d.toLocaleTimeString());
    price = 1;
    values.push(Math.abs(price.toFixed(2)));
    colors.push('#C084FC')
    // colors.push('rgb(192, 132, 252, 1)')
  }
  return { dates, values, colors };
};

const { dates, values, colors } = generateFakeData();

const chartOptions = ref({
  chart: {
    id: 'why-currency',
    type: 'area',
    zoom: {
      enabled: false
    },
    foreColor: '#687275',
    toolbar: {
      show: false,
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
    },
  },
  colors: colors,
  grid: {
    borderColor: '#ffffff25',
    strokeDashArray: 8,
  },
  stroke: {
    curve: 'smooth'
  },
  legend: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: dates,
    // axisTicks: {
    //   color: 
    // }
  },
  yaxis: {
    // show: false
    labels: {
      formatter: (val) => `${val}`,
    },
  },
  tooltip: {
    // enabled: false,
    style: {
      fontSize: '14px'
    },
    theme: 'dark',
    y: {
      formatter: (val) => `${val} $WHY`,
    },
  },
});

const series = ref([
  {
    name: t('whyPrice'),
    data: values,
  },
]);


const { tg, loaded, initDataUnsafe } = useTelegram();

</script>
