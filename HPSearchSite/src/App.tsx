import "./App.css";
import { useState, useEffect } from "react";
import FormWrapper from "./components/FormWrapper";
import Card from "./components/Card";

interface Character {
  actor: string;
  image: string;
  name: string;
}

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data: Character[]) => {
        setSelectedCharacter(data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <FormWrapper  />
      {selectedCharacter && (
        <Card
        character={selectedCharacter.name}
        image={selectedCharacter.image}
        actor={selectedCharacter.actor}
        />
      )}
    </>
  );
}

export default App;
