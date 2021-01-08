import React from "react";
import "./ShowQuestions.css";

class ShowQuestions extends React.Component {
  state = {
    questions: [],
    answers: [],
  };

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
      console.log(data);
      this.setState({ questions: data.rQuestions });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { questions } = this.state;
    // console.log(questions);
    return (
      <div>
        {questions.map((question, idx) => (
          <div ket={idx}>
            <span>{question.text}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default ShowQuestions;
