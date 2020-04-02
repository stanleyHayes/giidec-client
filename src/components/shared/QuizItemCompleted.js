import React from "react";
import {Card, Image, Label} from "semantic-ui-react";

function QuizItemCompleted(props) {
    const styles = {
        title: {
            fontWeight: "bold",
            fontSize: "24px"
        },
        week: {
            fontSize: "20px",
            fontWeight: "bold"
        },
        panel: {
            borderRadius: "4px",
            backgroundColor: "white",
            padding: "0px"
        },
        body: {
            padding: "16px"
        },
        questions: {
            fontSize: "16px",
            fontWeight: "bold"
        },
        submissions: {
            fontSize: "16px",
            fontWeight: "bold"
        },
        duration: {
            fontSize: "20px",
            fontWeight: "bold"
        },
        separator: {
            fontWeight: "bold",
            paddingLeft: "8px",
            paddingRight: "8px",
            color: "blue"
        },
    };
    return (
        <Card link={true} raised={true} fluid={true} color="green">
            <Image style={styles.image} src={props.quiz.image} alt={props.quiz.week} fluid={true}/>
            <Label color="green" ribbon={true} size="big">Quiz of the Week</Label>
            <Card.Content>
                <Card.Meta>
                    <span>Week {props.quiz.week}</span>
                    <span style={styles.separator}>|</span>
                    <span>{props.quiz.questions.length} Questions</span>
                    <span style={styles.separator}>|</span>
                    <span>{props.quiz.submissions.length} Submissions</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content>
                <Card.Header className="my-2">{props.quiz.winner.name}</Card.Header>
            </Card.Content>
        </Card>
    )
}

export default QuizItemCompleted;
