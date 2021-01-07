import 'reflect-metadata';
import { container } from 'inversify-props';
import ITitleProvider from './services/abstractions/ITitleProvider';
import TitleProvider from './services/implementations/TitleProvider';
import StaticPersonArray from './services/implementations/StaticPersonArray';
import IPersonArray from './services/abstractions/IPersonArray';
import { IDefaultPerson } from './services/abstractions/IDefaultPerson';
import { TYPES } from './types';
import { DefaultPerson } from './services/implementations/DefaultPerson';

const token = 'Nzg3MzM0NjY1MjE1MTQ4MDgy.X9TcjA.6qtEBMhQ_MHPrdO42JiB2rf36Zg';

export default function buildDependencyContainer(): void {
  container.addTransient<ITitleProvider>(TitleProvider, TYPES.ITitleProvider);
  container.addTransient<IPersonArray>(StaticPersonArray, TYPES.IPersonArray);
  container.addTransient<IDefaultPerson>(DefaultPerson, TYPES.IDefaultPerson);
  container.bind<string>(TYPES.DiscordToken).toConstantValue(token);
}
