<template>
  <div>
    {{ message }}
    <div>{{ message2 }}</div>
    <button class="btn btn-primary" type="button">Bootstrap button test</button>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';

@Component
export default class ArturComponent extends Vue {
  @Prop() private message!: string;

  message2 = 'This is declared in the class';
}
</script>
