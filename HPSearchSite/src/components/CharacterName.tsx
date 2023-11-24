interface CharacterNameProps {
  actor: string;
  character: string;
  image: string;
}

const CharacterName = ({ actor, character, image }: CharacterNameProps) => {
  return (
    <>
      <img className="char-img" src={image} alt={character} />
      <h2>{character}</h2>
      <h2>{actor}</h2>
    </>
  );
};

export default CharacterName;
