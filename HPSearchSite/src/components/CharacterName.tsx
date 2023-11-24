import styled from "styled-components";

const StyledHeading = styled.h2`
  margin: 5px 0 0 0;
`;

interface Props {
  character: string;
}

const CharacterName = ({ character }: Props) => {
  return <StyledHeading>{character}</StyledHeading>;
};

export default CharacterName;
