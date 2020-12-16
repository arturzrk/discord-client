<template>
  <div>
    <ul>
      <li>{{ message }} displayed by Component</li>
      <li v-if="false">{{ message2 }}</li>
      <li>
        <button class="btn btn-primary" type="button">Bootstrap button test</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';

@Component
export default class ArturComponent extends Vue {
  @Prop() private message!: string;

  message2 = 'Placeholdr for the message';
}
</script>

<style>
ul {
  list-style-type: none;
}
</style>
