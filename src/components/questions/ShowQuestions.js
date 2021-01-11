// REACT
import React from "react";
// STYLED COMPONENTS
import Container from "../../styles/Container";
import Question from "../../styles/Question";
import Wrapper from "../../styles/Wrapper";
import Answers from "../../styles/Answers";
import Answer from "../../styles/Answer";
import NextQuestion from "../../styles/NextQuestion";
// COMPONENTS
import FinalScore from "../finalScore/FinalScore";

class ShowQuestions extends React.Component {
  // STATES
  state = {
    questions: [],
    currentIndex: 0,
    score: 0,
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
      console.log(data.rQuestions[this.state.currentIndex].answers);
      this.setState({
        questions: data.rQuestions,
        userAnswer: data.rQuestions[this.state.currentIndex].answers,
        score: data.score,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // NEXT QUESTION HANDLER
  nextQuestionHandler = () => {
    const { currentIndex } = this.state;

    this.setState({
      currentIndex: currentIndex + 1, // INCREASE THE INDEX OF QUESTIONS ARRAY EVERY CLICK
    });
  };

  handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      alert("Correct");
      this.setState({ score: +1 });
    } else {
      alert("wrong");
    }
  };

  render() {
    // RENDERING
    // console.log("Rendering.."); // FIRST RENDERING

    const { questions, currentIndex } = this.state;

    // console.log(questions); // NO DATA AT FIRST RENDERING, RENDERS AFTER I HAVE DATA FROM THE FETCH

    return (
      <Container>
        {currentIndex < 5 ? (
          <Wrapper>
            <Question>
              {/* NEED TO CHECK IF I HAVE DATA BEFORE RENDERING, SO THIS LINE TELLS DON'T RENDER TILL I HAVE DATA*/}
              {questions.length > 0 ? questions[currentIndex].text : ""}
            </Question>

            <Answers>
              {/* SAME, DON'T RENDER TILL I HAVE DATA FROM ComponentDidMount */}
              {questions.length > 0 ? (
                questions[currentIndex].answers.map((answer, id) => (
                  <Answer key={id}>
                    <div
                      onClick={() => this.handleAnswerClick(answer.isCorrect)}
                    >
                      {answer.text}
                    </div>
                  </Answer>
                ))
              ) : (
                <div>no data</div>
              )}
            </Answers>
            <NextQuestion>
              <p onClick={this.nextQuestionHandler}>Next</p>
            </NextQuestion>
          </Wrapper>
        ) : (
          <FinalScore score={this.state.score} /> // END OF THE QUIZ COMPONENT WITH SCORE
        )}
      </Container>
    );
  }
}

export default ShowQuestions;
