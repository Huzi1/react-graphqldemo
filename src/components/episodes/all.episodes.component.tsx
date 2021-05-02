import React from "react";
import { GET_EPISODES } from "../../common/hooks/useGetEpisodes";
import { useQuery } from "@apollo/client";
import { EpisodeData, AllResponseVars, Episode } from "../../generated/types";
import Row from "react-bootstrap/Row";
import { CallWaypoint } from "../../common/Waypoint";
import { Container } from "react-bootstrap";
import EpisodeList from "./episodes.component";
import Spinner from "react-bootstrap/Spinner";

const AllEpisodes: React.FC = () => {
  const { loading, data, error, fetchMore } = useQuery<
    EpisodeData,
    AllResponseVars
  >(GET_EPISODES, {
    variables: { page: 1 },
  });

  var episodes = loading || !data ? [] : data.episodes.results;

  if (loading || !data)
    return (
      <Container fluid style={{ margin: "2%" }}>
        {" "}
        <Row className="justify-content-md-center">
          <Spinner variant="success" animation="grow" />

          <h3 style={{ color: "#7ACD74", fontFamily: "fantasy" }}>
            {" "}
            Loading...
          </h3>
        </Row>
      </Container>
    );

  if (error)
    return (
      <div style={{ color: "#7ACD74", fontFamily: "fantasy" }}>Error!!!</div>
    );

  // Infinite scrolling

  const scrollEnd = () =>
    fetchMore({
      variables: {
        page: episodes.length / 20 + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult || data.episodes.info.next === null) return prev;

        fetchMoreResult.episodes.results = [
          ...prev.episodes.results,
          ...fetchMoreResult.episodes.results,
        ];

        return fetchMoreResult;
      },
    });

  return (
    <>
      <br />
      <Row className="justify-content-md-center">
        <h1 style={{ color: "#7ACD74", fontFamily: "fantasy" }}>
          All Episodes
        </h1>
      </Row>
      <Container fluid>
        <Row
          className="justify-content-md-center"
          style={{ padding: "0.5%", margin: "0.5%" }}
        >
          {data.episodes.results.map((items: Episode, i: number) => (
            <React.Fragment key={Math.random()}>
              <EpisodeList
                id={items.id}
                name={items.name}
                air_date={items.air_date}
                episode={items.episode}
                created={items.created}
              />
              <CallWaypoint
                indexProp={i}
                listProp={data.episodes.results}
                fnProps={scrollEnd}
                next={data.episodes.info.next}
              />
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default AllEpisodes;
