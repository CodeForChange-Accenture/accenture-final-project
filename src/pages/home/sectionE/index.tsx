import React from 'react';
import { Container } from "./style";
import Pngkey1 from '../../../img/pngkey-1.png';

const SectionE: React.FC = () => {
  return (
    <Container>
      <section className="sectionLeft">
        <h2>Simplifique a sua vida. Peça seu convite.</h2>
        <p>GamaAcademy Bank Line S.A. - CNPJ 00.000.000/0000-00</p>
        <p>Rua Fictícia, 999 - 00000-000 - São Paulo, SP </p>
        <p>Este é um projeto de avaliação | GamaAcademy | Accenture | 2021</p>
      </section>
      <section className="sectionRight">
          <img className="phonekey" src={Pngkey1} alt=""/>
      </section>
    </Container>

  );
}

export default SectionE;