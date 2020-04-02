import React from "react";
import {Icon, List} from "semantic-ui-react";

function StrategyListItem(props) {
    return (
        <List.Item
            description={props.strategy.description}
            header={props.strategy.name}
            icon={<Icon size="huge" color={props.strategy.icon.color} name={props.strategy.icon.name}/>}
        />
    )
}

export default StrategyListItem;
