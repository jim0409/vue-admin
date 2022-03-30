<template>
  <div class="dashboard">
    <dashboard-charts />
    <dashboard-info-block />
  </div>
</template>

<script>
import DashboardInfoBlock from './DashboardInfoBlock'

export default {
  name: 'dashboard',
  components: {
    DashboardInfoBlock,
  },
}
</script>

<style lang="scss">
  .row-equal .flex {
    .va-card {
      height: 100%;
    }
  }

  .dashboard {
    .va-card {
      margin-bottom: 0 !important;
      &__title {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
