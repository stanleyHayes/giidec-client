import React from "react";
import {Card, Image, Label} from "semantic-ui-react";

function WinnerItem(props) {
    const styles = {
        winner: {
            fontWeight: "bold",
            fontSize: 24
        },
        quote: {
            fontWeight: "bold",
            fontFamily: "cursive",
            fontSize: "16px"
        },
        panel: {
            borderRadius: "4px",
            backgroundColor: "white"
        },
        body: {
            padding: "16px"
        },
        date: {
            paddingRight: "8px"
        },
        separator: {
            fontWeight: "bold",
            paddingLeft: "8px",
            paddingRight: "8px",
            color: "blue"
        },
        profession: {},
        week: {},
        percentage: {
            fontSize: "24px"
        },
        quiz: {},
        gender: {}
    };
    return (
        <Card fluid={true} link={true} raised={true} color="violet">
            <Image wrapped={true} ui={true} dimmer={true} src={props.winner.image} alt={props.winner.name}
                   fluid={true}/>
            <Label as="a" ribbon={true} color="violet" size="big">Winner of Week {props.winner.quiz.week}</Label>
            <Card.Content>
                <Card.Header>{props.winner.name}</Card.Header>
                <Card.Meta>{props.winner.profession}</Card.Meta>
            </Card.Content>
            <Card.Content>
                <Card.Description style={styles.quote}>{props.winner.quote}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default WinnerItem;
