import React from "react";
import {Link} from "react-router-dom";
import {Card, Icon, Image, List} from "semantic-ui-react";

function OfficeItem(props) {
    const styles = {
        heading: {
            fontSize: "20px"
        },
        caption: {
            paddingTop: "8px",
            paddingBottom: "8px"
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
        category: {},
        author: {},
        container: {
            position: "relative"
        }, panel: {
            borderRadius: "16px",
            backgroundColor: "white",
            padding: "0px"
        },
        readMore: {
            textDecoration: "underline",
            fontWeight: "bold",
            fontSize: "16px",
            color: "blue"
        },
        metaContainer: {
            display: "flex"
        },
        image: {
            display: "absolute",
            width: "100%"
        }, body: {
            padding: "16px"
        }
    };

    return (
        <Card raised={true} link={true} fluid={true} color="red" className="my-2">
            <Image wrapped={true} ui={false} rounded={true} src={props.office.image}
                   alt={props.office.city} fluid={false}/>
            <Card.Content>

                <List
                    className="my-2"
                    horizontal={true}
                    divided={true}
                    animated={true}
                    size="medium"
                    items={[props.office.country, props.office.city, props.office.type]}/>

                <Card.Header className="my-2">
                    <Icon circular={true} color="red" name="phone" className="mr-5"/>
                    {props.office.phone}
                </Card.Header>
                <Card.Meta className="my-2">
                    <Icon circular={true} color="red" name="mail" className="mr-5"/>
                    {props.office.email}
                </Card.Meta>
                <Card.Description className="my-2">
                    <Icon circular={true} color="red" name="map pin" className="mr-5"/>
                    {props.office.landmark}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default OfficeItem;
