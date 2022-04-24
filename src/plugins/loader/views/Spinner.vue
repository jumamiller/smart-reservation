<template>
<v-overlay absolute color="#EBF5FB">
    <breeding-rhombus-spinner
      :animation-duration="2500"
      :size="65"
      color="#00448b"
    />
</v-overlay>
</template>

<script>
import { BreedingRhombusSpinner } from 'epic-spinners'
export default {
  name: 'Spinner',
  components: {
    BreedingRhombusSpinner
  }
}
</script>

<style scoped></style>
