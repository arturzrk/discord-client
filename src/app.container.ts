import { container } from 'inversify-props';
import ITitleProvider from './services/abstractions/ITitleProvider';
import TitleProvider from './services/implementations/TitleProvider';

export default function buildDependencyContainer(): void {
  container.addTransient<ITitleProvider>(TitleProvider);
}
