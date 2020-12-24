<template>
  <div>
    <ul>
      <li>{{ message }}</li>
      <li>
        <button class="btn btn-primary" type="button">Bootstrap button test</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';

@Component
export default class CustomComponentClass extends Vue {
  @Prop() private message!: string;
}

</script>

<style>
ul {
  list-style-type: none;
}
</style>
