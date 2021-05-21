export interface IToken {
    access: ITokens;
    refresh: ITokens;
  }

  export interface ITokens {
    token:  string;
    expires: Date;
  }
