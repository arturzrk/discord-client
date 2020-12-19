<template>
  <div>
    <h1>{{titleProvider.GetTitle()}}</h1>
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
        <tr v-for="p in people" :key="p.PersonId">
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
import { Inject } from 'inversify-props';
import ITitleProvider from '@/services/abstractions/ITitleProvider';
import { Person } from '@/data/models/Person';
import { Employees } from '@/data/Employees';
import CustomComponentClass from '@/components/CustomComponent.vue';

@Component({
  components: {
    CustomComponentClass,
  },
})
export default class EmployeesView extends Vue {
  @Inject()
  private titleProvider!: ITitleProvider;

  private people: Person[];

  private stringVal: string;

  constructor() {
    super();
    this.stringVal = 'Initial value';
    this.people = Employees;
  }
}
</script>
