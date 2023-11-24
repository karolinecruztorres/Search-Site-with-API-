import CharacterName from "./CharacterName";
import ActorName from "./ActorName";
import CharacterImage from "./CharacterImage";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  width: 320px;
  height: 400px;
  padding: 0;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 5px;
`;

interface CardProps {
  actor: string;
  character: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ actor, character, image }) => {
  return (
    <StyledDiv>
      <CharacterName character={character} />
      <ActorName actor={actor} />
      <CharacterImage image={image} alt={character} />
    </StyledDiv>
  );
};

export default Card;
