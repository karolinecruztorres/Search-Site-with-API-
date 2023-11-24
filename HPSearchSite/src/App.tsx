import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import FormWrapper from "./components/FormWrapper";
import Card from "./components/Card";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const StyledHeading = styled.h1`
  margin: 0 0 30px 0;
  font-size: 48px;
`;

const StyledButton = styled.button`
  font-family: "Bigelow Rules", serif;
  font-size: 32px;
  border: none;
  padding: 3px 230px;
  background-color: rgba(183, 156, 109, 0.5);
  cursor: pointer;
  transition: opacity 0.15s, font-weight 0.15s;

  &:hover {
    opacity: 0.8;
    font-weight: bold;
  }
`;

interface Character {
  actor: string;
  image: string;
  name: string;
}

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data: Character[]) => {
        setSelectedCharacter(data[0]);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to connect with the Ministry of Magic.");
      });
  }, []);

  return (
    <>
      {error ? (
        <StyledDiv>
          <StyledHeading> {error} </StyledHeading>
          <StyledButton type="submit"> Try connection </StyledButton>
        </StyledDiv>
      ) : (
        selectedCharacter && (
          <>
            <FormWrapper />

            <Card
              character={selectedCharacter.name}
              image={selectedCharacter.image}
              actor={selectedCharacter.actor}
            />
          </>
        )
      )}
    </>
  );
}

export default App;
