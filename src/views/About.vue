<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1><ArturAbout message="With Message Passed as a Property"/></h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ArturAbout from '@/components/Component.vue';

@Component({
  components: {
    ArturAbout,
  },
})
export default class About extends Vue {}
</script>
