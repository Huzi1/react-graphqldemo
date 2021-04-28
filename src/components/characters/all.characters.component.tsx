import React from "react";
import { GET_CHARACTERS } from "../../common/hooks/useGetCharacters";
import { useQuery } from "@apollo/client";
import {
  CharacterData,
  AllResponseVars,
  Character,
} from "../../generated/types";
import CharactersList from "./charactersList.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import { Waypoint } from "react-waypoint";
import { CallWaypoint } from "../../common/Waypoint";
import { RectAreaLight } from "three";
interface items {
  resutls: [
    {
      gender: String;
      id?: number;
      image?: String;
      species?: String;
      status?: String;
      type?: String;
    }
  ];
}

const AllCharacters: React.FC = () => {
  // const { data, loading, error } = useQuery<GetUsers, GetUsersVariables>(GET_USERS)
  const { loading, data, error, fetchMore } = useQuery<
    CharacterData,
    AllResponseVars
  >(GET_CHARACTERS, {
    variables: { page: 1 },
  });
  var characters = loading || !data ? [] : data.characters.results;
  if (loading || !data) return <h2>Loading .....</h2>;

  if (error) return <div>Error!!!</div>;
  if (!data) {
    console.log("no data");
  } else {
    console.log(data.characters.results);
  }
  // Infinite scrolling

  const scrollEnd = () =>
    fetchMore({
      variables: {
        page: characters.length / 20 + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log("prev", prev);
        console.log("fetchMore", fetchMoreResult);
        if (!fetchMoreResult) return prev;
        fetchMoreResult.characters.results = [
          ...prev.characters.results,
          ...fetchMoreResult.characters.results,
        ];

        return fetchMoreResult;
        // return {
        //   characters: {
        //     __typename: "Characters",
        //     results: [
        //       ...prev.characters.results,
        //       ...fetchMoreResult.characters.results,
        //     ],
        //   },
        // };
      },
    });

  return (
    <>
      <br />
      <Row className="justify-content-md-center">
        <h1 style={{ color: "#7ACD74", fontFamily: "fantasy" }}>
          All Characters
        </h1>
      </Row>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Container fluid>
        <Row style={{ padding: "0.5%", margin: "0.5%" }}>
          {data.characters.results.map((items: Character, i: number) => (
            <React.Fragment key={Math.random()}>
              <CharactersList
                gender={items?.gender}
                id={items?.id}
                image={items?.image}
                species={items?.species}
                status={items?.status}
                type={items?.type}
                name={items?.name}
              />
              <CallWaypoint
                indexProp={i}
                listProp={data.characters.results}
                fnProps={scrollEnd}
              />
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default AllCharacters;
