import { IPersonArray } from '@/services/abstractions/IPersonArray';
import { container } from 'inversify-props';
import { TYPES } from '@/types';
import buildDependencyContainer from '@/app.container';

describe('app.container.ts', () => {
  it('IPersonArray is properly resolved', () => {
    buildDependencyContainer();
    const personArray = container.get<IPersonArray>(TYPES.IPersonArray);
    expect(personArray).not.toBeNull();
  });
});
