import React from "react";
import {Card, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

function LeaderItem(props) {

    return (
        <Card fluid={true} link={true} raised={true} color="black">
            <Image
                fluid={true}
                bordered={true}
                rounded={true}
                wrapped={true}
                ui={true}
                dimmer={true}
                src={props.leader.image}
            />
            <Card.Content>
                <Card.Header>{props.leader.name}</Card.Header>
                <Card.Meta>{props.leader.position}</Card.Meta>
                <Card.Description>{props.leader.profile}</Card.Description>
            </Card.Content>
            <Card.Content>
                <Link to="/">Read More</Link>
            </Card.Content>
        </Card>
    )
}

export default LeaderItem;
