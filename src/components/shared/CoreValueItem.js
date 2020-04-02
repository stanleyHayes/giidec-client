import React from "react";
import {Card} from "semantic-ui-react";

function CoreValueItem(props) {
    const styles = {
        valueTitle: {
            fontWeight: "bold",
            fontSize: 24
        },
        valueDescription: {},
        panel: {
            borderRadius: "4px",
            backgroundColor: "white",
            padding: "8px"
        }
    };
    return (
        <Card raised={true} fluid={true} link={true}>
            <Card.Content>
                <Card.Header>{props.value.title}</Card.Header>
                <Card.Description>{props.value.description}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default CoreValueItem;
