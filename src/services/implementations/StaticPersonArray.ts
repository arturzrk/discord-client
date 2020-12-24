import { injectable } from 'inversify-props';
import { Employees } from '@/data/Employees';
import { Person } from '@/data/models/Person';
import IPersonArray from '@/services/abstractions/IPersonArray';

@injectable()
export default class StaticPersonArray implements IPersonArray {
  // eslint-disable-next-line class-methods-use-this
  GetPersonArray(): Person[] {
    return Employees;
  }
}
