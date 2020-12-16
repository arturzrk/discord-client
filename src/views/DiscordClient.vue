<template>
  <div class="discord-client">
    <h1>This discord client page</h1>
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
export default class DiscordClient extends Vue {}
</script>
