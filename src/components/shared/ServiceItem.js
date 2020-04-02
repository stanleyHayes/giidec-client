import React from "react";
import {Card, Image} from "semantic-ui-react";

function ServiceItem(props) {
    return (
        <Card fluid={true} raised={true} color="violet" link={true}>
            <Image
                ui={true}
                wrapped={true}
                bordered={true}
                src={props.service.image}
                alt={props.service.title}
                fluid={true}/>
            <Card.Content>
                <Card.Header>{props.service.name}</Card.Header>
                <Card.Description>{props.service.description}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default ServiceItem;
