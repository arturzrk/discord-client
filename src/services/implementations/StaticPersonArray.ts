import { inject, injectable } from 'inversify-props';
import { Employees } from '@/data/Employees';
import { Person } from '@/data/models/Person';
import IPersonArray from '@/services/abstractions/IPersonArray';
import { IDefaultPerson } from '@/services/abstractions/IDefaultPerson';
import { TYPES } from '@/types';

@injectable()
export default class StaticPersonArray implements IPersonArray {
  // eslint-disable-next-line no-useless-constructor
  constructor(@inject(TYPES.IDefaultPerson) private defaultPerson: IDefaultPerson) {}

  GetPersonArrayAsync(): Promise<Person[]> {
    return new Promise<Person[]>(() => Employees.concat(this.defaultPerson.GetPerson()));
  }

  GetPersonArray(): Person[] {
    return Employees.concat(this.defaultPerson.GetPerson());
  }
}
