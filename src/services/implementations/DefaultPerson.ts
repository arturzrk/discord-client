import { Person } from '@/data/models/Person';
import { injectable } from 'inversify-props';
import { IDefaultPerson } from '../abstractions/IDefaultPerson';

@injectable()
class DefaultPerson implements IDefaultPerson {
  // eslint-disable-next-line class-methods-use-this
  GetPerson(): Person {
    return {
      PersonId: -1,
      FirstName: 'Default',
      SurName: 'Person',
      Handle: 'facebook',
    };
  }
}
export { DefaultPerson };
