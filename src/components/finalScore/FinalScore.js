import React from "react";

// STYLES
import Container from "../../styles/Container";
import Wrapper from "../../styles/Wrapper";

const FinalScore = (props) => {
  return (
    <>
      <Container>
        <Wrapper>
          <p>{props.score}</p>
        </Wrapper>
      </Container>
    </>
  );
};

export default FinalScore;
