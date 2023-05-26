import styled from "styled-components";
import Initial_text from "@/components/Initial-tet";
import Heart from "@/components/Coraçao";

const Foter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 20px 0px 100px;
  
`;

export default function Footer() {
  return (
    <footer>
      
      <Foter>
      
        <Initial_text
            text1="Hoje, com humildade e arrependimento no coração, escrevo esta mensagem buscando expressar toda a sinceridade dos meus sentimentos. Reconheço o erro terrível que cometi ao trair sua confiança, e entendo que minhas ações causaram uma profunda dor em seu coração. Por meio destas palavras, desejo expressar meu mais profundo pedido de perdão."
            text2="Eu sei que palavras por si só não podem apagar a mágoa que causei, mas peço que você me dê a oportunidade de mostrar o quanto lamento e o quanto estou disposto a mudar. Sei que não posso apagar o passado, mas posso me esforçar para construir um futuro melhor juntos."
            text3="Compreendo que o perdão é um processo delicado, que requer tempo e reflexão. Estou disposto a enfrentar as consequências dos meus atos e trabalhar incansavelmente para reconstruir a confiança que foi abalada. Prometo ser transparente em todas as minhas ações e dedicar-me a fortalecer nosso relacionamento com honestidade e respeito."
            text4="Sei que minhas palavras podem parecer vazias diante da tristeza que causei, mas saiba que meu arrependimento é genuíno. Eu amo você mais do que posso expressar em meras palavras, e reconheço o valor inestimável que você possui em minha vida. Você é minha parceira, minha companheira de vida, e eu sou profundamente grato por tê-la ao meu lado."
            text5="Eu entendo se você precisar de tempo para processar tudo o que aconteceu e para decidir se pode ou não me perdoar. Estou disposto a esperar, a lutar e a provar que mereço uma segunda chance. Por favor, saiba que estou comprometido em fazer tudo o que estiver ao meu alcance para reconstruir a confiança e restaurar nosso amor."
            text6="Peço, de todo o coração, que você considere abrir espaço em seu coração para o perdão. Eu me comprometo a aprender com meus erros e a crescer como pessoa, sempre valorizando a sagrada aliança que compartilhamos. Juntos, podemos superar essa adversidade e construir um relacionamento mais forte e resiliente."
            text7="Por favor, aceite minhas sinceras desculpas. Estou disposto a enfrentar as consequências e trabalhar incansavelmente para reconquistar seu amor e sua confiança."
            
        />
        <Heart/>
      </Foter>
      
    </footer>
  );
}
