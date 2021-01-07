import 'reflect-metadata';
import { Employees } from '@/data/Employees';
import StaticPersonArray from '@/services/implementations/StaticPersonArray';
import { DefaultPerson } from '@/services/implementations/DefaultPerson';

describe('StaticPersonArray.ts', () => {
  it('Async method returns correct promise', () => {
    // Arrnge
    const sut = new StaticPersonArray(new DefaultPerson());

    // Act
    const res = sut.GetPersonArrayAsync();
    // Assert
    expect(res).resolves.toBe(Employees);
  });

  it('GetPersonArray returns static data + injected default person', () => {
    const defaultPerson = new DefaultPerson();
    const sut = new StaticPersonArray(defaultPerson);

    const res = sut.GetPersonArray();

    expect(res).toStrictEqual(Employees.concat(defaultPerson.GetPerson()));
  });
});
