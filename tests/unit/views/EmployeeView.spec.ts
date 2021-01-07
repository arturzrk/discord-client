import 'reflect-metadata';
import { shallowMount } from '@vue/test-utils';
import EmployeeView from '@/views/EmployeeView.vue';
import { mockTransient, resetContainer } from 'inversify-props';
import buildDependencyContainer from '@/app.container';
import TitleProvider from '@/services/implementations/TitleProvider';
import ITitleProvider from '@/services/abstractions/ITitleProvider';
import { TYPES } from '@/types';
import IPersonArray from '@/services/abstractions/IPersonArray';
import StaticPersonArray from '@/services/implementations/StaticPersonArray';
import { Person } from '@/data/models/Person';

jest.mock('@/services/implementations/TitleProvider');
jest.mock('@/services/implementations/StaticPersonArray');

const mockedTitleProvider = TitleProvider as jest.Mock<TitleProvider>;
const mockedPersonArray = StaticPersonArray as jest.Mock<StaticPersonArray>;
const person: Person = {
  PersonId: 0,
  FirstName: 'Test',
  SurName: 'Person',
  Handle: 'email',
};
const TitleValue = 'tsst';

describe('EmployeeView.vue', () => {
  beforeEach(() => {
    resetContainer();
    buildDependencyContainer();
    mockedTitleProvider.mockImplementation(() => ({
      titile: 'Test',
      GetTitle: () => TitleValue,
    }));
    mockedPersonArray.mockImplementation(() => ({
      GetPersonArray: () => [person],
    } as StaticPersonArray));
    mockTransient<ITitleProvider>(TYPES.ITitleProvider, mockedTitleProvider);
    mockTransient<IPersonArray>(TYPES.IPersonArray, mockedPersonArray);
  });

  test('Renders injected employees and the title.', () => {
    const wrapper = shallowMount(EmployeeView);
    expect(wrapper.find('#title').element.innerHTML).toBe(TitleValue);
  });
});
