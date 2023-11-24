import CharacterName from "./CharacterName";

interface CardProps {
  actor: string;
  character: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ actor, character, image }) => {
  return (
    <div className="card-wrapper">
      <CharacterName actor={actor} character={character} image={image} />
    </div>
  );
};

export default Card;
