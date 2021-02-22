export interface IUser {
    idUsuario: number;
    sub: string;
  }

export interface IDataAccount {
    contaBanco: {
      saldo: number;
      id: number;
      lancamentos: any;
    };
    contaCredito: {
      saldo: number;
      id: number;
      lancamentos: any;
    };
  }

export interface IPlan{
  id: number,
  descricao: string,
  login: string,
  tipoMovimento: string,
  padrao: boolean
}
  
export interface IBank {
  plan: IPlan
  banco: IDataAccount
}