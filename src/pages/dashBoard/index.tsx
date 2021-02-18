import React from 'react';
import logoHandGama from "../../img/logoHandGama.png"
import {DashBoardPage} from "./style"
import {FiCommand} from 'react-icons/fi';

const DashBoard: React.FC = () => {
  return (
    <DashBoardPage>
      <div className="side-bar">
        <img src={logoHandGama} alt="Green logo Gama"/>
        <div>          
          <FiCommand size={30}/>
          <p>
          Depósitos
          </p>
        </div>
        <div>
          <FiCommand size={30}/>
          <p>
          Planos
          </p>
        </div>
        <div>
          <FiCommand size={30}/>
          <p>
            Pagamentos
          </p>
        </div>
        <div>
          <FiCommand size={30}/>
          <p>
          Transações
          </p>
        </div>
      </div>
      <div className="main-board">
        <p>teste</p>
      </div>
    </DashBoardPage>
  );
}

export default DashBoard;