import styled from "styled-components";

const StyledImg = styled.img`
  height: 200px;
`;

interface Props {
  image: string;
  alt: string;
}

const CharacterImage = ({ image, alt }: Props) => {
  return <StyledImg src={image} alt={alt} />;
};

export default CharacterImage;
