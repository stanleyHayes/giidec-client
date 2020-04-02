import React from "react";
import {Image, List} from "semantic-ui-react";

function ServiceSidebarItem(props) {

    function handleClick() {
        props.handleSelectedService(props.service);
    }

    return (
        <List.Item onClick={handleClick}>
                <Image avatar={true} src={props.service.image} alt={props.service.name} />
            <List.Content>
                <List.Description>{props.service.name}</List.Description>
            </List.Content>
        </List.Item>
    )
}

export default ServiceSidebarItem;
