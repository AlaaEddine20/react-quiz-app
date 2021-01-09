// REACT
import React from "react";
// STYLED COMPONENTS
import Container from "../../styles/Container";
import Question from "../../styles/Question";
import Wrapper from "../../styles/Wrapper";
import Answers from "../../styles/Answers";
import Answer from "../../styles/Answer";
import NextQuestion from "../../styles/NextQuestion";

class ShowQuestions extends React.Component {
  // STATES
  state = {
    questions: [],
    answers: [],
  };

  // FETCH
  async componentDidMount() {
    console.log("Getting data..");
    try {
      const response = await fetch(
        "http://localhost:5050/exams/" + this.props.match.params.id,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data.rQuestions[0].answers);
      this.setState({ questions: data.rQuestions[0].text });
      this.setState({ answers: data.rQuestions[0].answers });
    } catch (error) {
      console.log(error);
    }
  }

  // RENDERING
  render() {
    const { questions, answers } = this.state;
    // console.log(questions.text);
    return (
      <Container>
        <Wrapper>
          <Question>{questions}</Question>

          <Answers>
            {answers.map((answer) => (
              <Answer>{answer.text}</Answer>
            ))}
          </Answers>
          <NextQuestion>
            <p>Next</p>
          </NextQuestion>
        </Wrapper>
      </Container>
    );
  }
}

export default ShowQuestions;
