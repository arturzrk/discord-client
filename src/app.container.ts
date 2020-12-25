import 'reflect-metadata';
import { container } from 'inversify-props';
import ITitleProvider from './services/abstractions/ITitleProvider';
import TitleProvider from './services/implementations/TitleProvider';
import StaticPersonArray from './services/implementations/StaticPersonArray';
import { IPersonArray } from './services/abstractions/IPersonArray';
import { TYPES } from './types';

export default function buildDependencyContainer(): void {
  container.addTransient<ITitleProvider>(TitleProvider, 'ITitleProvider');
  container.addTransient<IPersonArray>(StaticPersonArray, TYPES.IPersonArray);
}
