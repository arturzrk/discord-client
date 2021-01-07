import { Person } from '@/data/models/Person';

interface IDefaultPerson {
    GetPerson(): Person;
}
// eslint-disable-next-line import/prefer-default-export
export { IDefaultPerson };
