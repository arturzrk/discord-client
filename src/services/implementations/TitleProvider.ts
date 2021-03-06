import { injectable } from 'inversify-props';
import ITitleProvider from '../abstractions/ITitleProvider';

@injectable()
export default class TitleProvider implements ITitleProvider {
    titile = 'My title Provided by TitleProvider';

    GetTitle(): string {
      return this.titile;
    }
}
