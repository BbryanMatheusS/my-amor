import Photo_text from "../src/patterns/Photo";
import Photo_text_invert from "../src/patterns/Photo-Invert";


export default function HomePagem() {
  return (
    <>
      <Photo_text
        data="11/06/2022"
        text="Neste dia, tudo estava apenas começando, era o início da nossa história. Eu te convidei para ir a Capitólio, pois acreditava que você gostava daquele ambiente, mas logo descobri que você também não era muito fã de ir lá. Estava disposta a ir por mim, rsrsrs."
        img="/img/pictures/foto1.jpg"
      />
      
      <Photo_text_invert
        data="08/07/2022"
        text="Este foi o dia em que fomos a um parque com a Sandrinha para tirar fotos para o seu aniversário. Você estava deslumbrante naquele dia, não havia palavras suficientes para descrever sua beleza e o quão incrível você estava."
        img="/img/pictures/foto2.jpg"
      />
      
      <Photo_text
        data="23/10/2022"
        text="Neste dia, estávamos commorando aniversário da minha irmã em POA. Você estava vestida com uma estampa de oncinha, incrivelmente linda e maravilhosa, exibindo um sorriso incrível na foto."
        img="/img/pictures/foto3.jpg"
      />
      
      <Photo_text_invert
        data="25/12/2022"
        text="Este foi o meu primeiro Natal longe da minha família. Foi um Natal incrível que passamos na casa da Maria. Você estava linda como sempre, sempre sorridente, mal podia esperar pela hora de comer rsrsrs."
        img="/img/pictures/foto4.jpg"
      />
      
      <Photo_text
        data="06/05/2023"
        text="Neste dia foi o aniversário da Maria, que aconteceu não faz muito tempo. Voltamos todos felizes, satisfeitos por termos comido bastante, rsrsr."
        img="/img/pictures/foto5.jpg"
      />
      
      <Photo_text_invert
        data="03/03/2023"
        text="Aqui tenho minha joia mais preciosa sentada em cima do meu carro, rsrs. Lembro-me de quando fui para a faculdade e você, cheia de alegria, tirou fotos para me animar. Você me disse: 'Agora você tem uma foto para colocar como plano de fundo'."
        img="/img/pictures/foto6.jpg"
      />
      
      
    </>
  );
}
