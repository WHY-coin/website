<template>
  <div
    class="w-full h-full flex flex-col p-2"
    v-if="initDataUnsafe && initDataUnsafe.user"
  >
    <h1 class="text-left font-medium">
      {{ $t('appHome') }}
    </h1>

    <span class="text-left" v-if="whyCurrencyCurrent === 1">
      {{ $t('actualCourse', {why: whyCurrencyCurrent}) }}
    </span>

    <span class="text-left" v-else>
      {{ $t('actualCourse', {why: whyCurrencyCurrent.toFixed(2)}) }}
    </span>

    <span class="text-left text-sm italic opacity-75" v-if="whyCurrencyCurrent === 1">
      {{ $t('actualCourseTomorrow') }}
    </span>

    <span class="text-left text-sm italic opacity-75" v-else-if="whyCurrencyCurrent > 50">
      {{ $t('actualCourseTomorrowElseIf') }}
    </span>

    <span class="text-left text-sm italic opacity-75" v-else>
      {{ $t('actualCourseTomorrowElse') }}
    </span>

    <ClientOnly>
      <apexchart
        height="512"
        :options="chartOptions"
        :series="series"
        class="-ml-6"
      />
    </ClientOnly>
  </div>
</template>


<script setup>
const { t } = useI18n();


definePageMeta({
  title: '$WHY Home',
  layout: 'telegram',
});


const whyCurrencyCurrent = ref(1);


const generateFakeData = () => {
  const dates = [];
  const values = [];
  const colors = [];
  whyCurrencyCurrent.value = 1;
  let x = (p) => 1;
  if (Math.random() >= 0.96) {
    x = (p) => {
      return p + (Math.random() * 45.0 + 2.0) - (Math.random() * 45.0 + 2.0);
    }
  } else if (Math.random() > 0.75) {
    x = (p) => {
      return p + Math.pow(whyCurrencyCurrent.value * Math.random(), Math.random() + 0.25) * (Math.random() - 0.5);
    }
  }
  for (let i = -1; i < 5; i++) {
    let d = new Date();
    d.setMinutes(d.getMinutes() - (4 - i) * 60);
    dates.push(d.toLocaleTimeString());
    whyCurrencyCurrent.value = x(whyCurrencyCurrent.value);
    values.push(Math.abs(whyCurrencyCurrent.value.toFixed(2)));
    colors.push('#C084FC')
  }
  return { dates, values, colors };
};

const { dates, values, colors } = generateFakeData();

const chartOptions = ref({
  width: window.innerWidth,
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
  },
  yaxis: {
    labels: {
      formatter: (val) => `${val}`,
    },
  },
  tooltip: {
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
