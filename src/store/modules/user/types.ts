
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