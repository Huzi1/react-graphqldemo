import React from "react";
import { GET_CHARACTERS } from "../../common/hooks/useGetCharacters";
import { useQuery } from "@apollo/client";

const Characters: React.FC = () => {
interface Character {
  
}

  const {loading, data, error} = useQuery{GET_CHARACTERS};
  return (
    <>
      <h1>This is Characeters page</h1>
    </>
  );
};
export default Characters;
