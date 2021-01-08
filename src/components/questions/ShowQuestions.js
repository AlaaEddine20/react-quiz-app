import React from "react";
import "./ShowQuestions.css";

export default class ShowQuestions extends React.Component {
  state = {
    questions: [],
    answers: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "http://localhost:5050/exams/" + this.props.match.params.id,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      this.setState({ questions: data });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { questions } = this.state;
    // console.log(questions);
    return (
      <div>
        {questions.map((question) => (
          <div>
            <span>{question.rQuestions[0]}</span>
          </div>
        ))}
      </div>
    );
  }
}
