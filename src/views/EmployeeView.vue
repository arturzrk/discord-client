<template>
  <div>
    <h1 id="title">{{secondTitle.GetTitle()}}</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr :id="`employee-${p.PersonId}`" v-for="p in people" :key="p.PersonId">
          <td>{{p.PersonId}}</td>
          <td>{{p.FirstName}}</td>
          <td>{{p.SurName}}</td>
          <td>{{p.Handle}}</td>
        </tr>
      </tbody>
    </table>
    <CustomComponentClass></CustomComponentClass>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { inject } from 'inversify-props';
import ITitleProvider from '@/services/abstractions/ITitleProvider';
import { Person } from '@/data/models/Person';
import CustomComponentClass from '@/components/CustomComponent.vue';
import IPersonArray from '@/services/abstractions/IPersonArray';
import { TYPES } from '@/types';

@Component({
  components: {
    CustomComponentClass,
  },
})
export default class EmployeesView extends Vue {
  @inject(TYPES.ITitleProvider) private secondTitle!: ITitleProvider;

  @inject(TYPES.IPersonArray) private personArray!: IPersonArray;

  private people: Person[];

  constructor() {
    super();
    this.people = this.personArray.GetPersonArray();
  }
}
</script>
