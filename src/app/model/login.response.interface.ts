import { IUser} from '../model/user.interface';
import {IToken} from '../model/token.interface';

export interface ILoginResponse {
    user: IUser;
    tokens: IToken;
  }