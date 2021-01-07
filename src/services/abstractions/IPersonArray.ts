import { Person } from '@/data/models/Person';

export default interface IPersonArray {
    GetPersonArray(): Person[];
    GetPersonArrayAsync(): Promise<Person[]>;
// eslint-disable-next-line semi
}
