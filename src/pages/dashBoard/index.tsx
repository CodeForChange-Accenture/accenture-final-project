import React from 'react';
import logoHandGama from "../../img/logoHandGama.png"
import {DashBoardPage} from "./style"

const DashBoard: React.FC = () => {
  return (
    <DashBoardPage>
        <img src={logoHandGama} alt="Green logo Gama"/>
    </DashBoardPage>
  );
}

export default DashBoard;