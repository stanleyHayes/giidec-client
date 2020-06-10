import React from "react";
import {Card, Image, Label} from "semantic-ui-react";


function FactItem(props) {
    const styles = {
        title: {
            fontWeight: "bold",
            fontSize: 24
        },
        fact: {
            fontWeight: "bold",
            fontSize: "28px"
        },
        date: {
            fontSize: "16px",
            fontFamily: "cursive"
        },
        panel: {
            borderRadius: "4px",
            backgroundColor: "white"
        }
    };
    return (
        <Card raised={true} link={true} fluid={true} color="orange">
            <Label as="a" ribbon={true} color="violet" size="big">Fact of {new Date(props.fact.date).toDateString()}</Label>
            <Card.Content>
                <Card.Header>{props.fact.fact}</Card.Header>
            </Card.Content>
            <Card.Content>
                <Card.Meta style={styles.date}>{new Date(props.fact.date).toDateString()}</Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default FactItem;
