<template>
  <div>
    <ul>
      <li>{{ CustomComponentClass.classMethod() }}</li>
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

  message2 = 'Placeholder for the message2';

  // eslint-disable-next-line class-methods-use-this
  data() {
    return {
      CustomComponentClass,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  static classMethod(): string {
    return 'Custom component class static method';
  }
}
// eslint-disable-next-line import/prefer-default-export
</script>

<style>
ul {
  list-style-type: none;
}
</style>
