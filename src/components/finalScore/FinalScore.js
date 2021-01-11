import React from "react";

// STYLES
import Container from "../../styles/Container";
import Wrapper from "../../styles/Wrapper";

const FinalScore = (props) => {
  return (
    <>
      <Container>
        <Wrapper>
          <div style={{ display: "flex", justifyContent: "center" }}>
            Score {props.score}/5
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default FinalScore;
