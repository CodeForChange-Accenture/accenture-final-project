import React from 'react';
import { Container } from "./style";

const SectionC: React.FC = () => {
  return (
    <Container>
      <section className="sectionLeft">
        <h2>Zero anuidade</h2>
        <p>Burocracia custa caro. Somos eficientes para você não ter que pagar tarifas.</p>
      </section>
      <div className="sectionRight">
        <p> 0,00</p>
        </div>
    </Container>

  );
}

export default SectionC;