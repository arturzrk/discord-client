import IPersonArray from '@/services/abstractions/IPersonArray';
import { container } from 'inversify-props';
import { TYPES } from '@/types';
import buildDependencyContainer from '@/app.container';
import StaticPersonArray from '@/services/implementations/StaticPersonArray';

describe('app.container.ts', () => {
  buildDependencyContainer();

  it('IPersonArray is properly resolved', () => {
    // Act
    const personArray = container.get<IPersonArray>(TYPES.IPersonArray);

    // Assert
    expect(personArray).toBeInstanceOf(StaticPersonArray);
  });

  it('DiscordToken is properly resolved.', () => {
    const token = container.get<string>(TYPES.DiscordToken);
    expect(token).toBeDefined();
  });
});
