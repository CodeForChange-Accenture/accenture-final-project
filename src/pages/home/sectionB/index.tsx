import React from 'react';
import { Container } from "./style";
import Bg1 from '../../../img/app-bg-1.png';
import Bg2 from '../../../img/app-bg-2.png';

const SectionB: React.FC = () => {
  return (
    <Container>
      <section className="sectionLeft">
        <h2>Conta digital do Gama Academy</h2>
          <img className="phone1" src={Bg1} alt=""/>
        <p>Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas.</p>
      </section>
      <section className="sectionRight">
        <h2>Cartão de Crédito</h2>
          <img className="phone2" src={Bg2} alt=""/>
        <p>Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas.</p>
      </section>
    </Container>

  );
}

export default SectionB;


  