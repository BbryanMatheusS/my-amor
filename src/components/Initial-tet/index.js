import styled from "styled-components";

const Text = styled.div`
  font-size: 1.2rem;
  width: 90vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p{
    text-align: center;
    font-weight: bold;
  }
  

  @media (min-width: 1024px) {
    padding: 10px 2rem;
    max-width: 1024px;
    flex-direction: column;
    justify-content: space-around;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }

`

export default function Initial_text(props) {
  return (
    <Text>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
        <p>{props.text4}</p>
        <p>{props.text5}</p>
        <p>{props.text6}</p>
        <p>{props.text7}</p>
        <p>{props.text8}</p>
    </Text>
  );
}
