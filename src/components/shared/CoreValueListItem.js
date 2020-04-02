import React from "react";
import {Icon, List} from "semantic-ui-react";

function CoreValueListItem(props) {
    return (
        <List.Item
            description={props.value.description}
            header={props.value.name}
            icon={<Icon  size="huge"  color={props.value.icon.color} name={props.value.icon.name}/>}
        />
    )
}

export default CoreValueListItem;
