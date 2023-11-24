import styled from "styled-components";

const StyledHeading = styled.h2`
  margin: 5px 0 0 0;
`;

interface Props {
  actor: string;
}

const ActorName = ({ actor }: Props) => {
  return <StyledHeading>{actor}</StyledHeading>;
};

export default ActorName;
