import React from "react";
import {Link} from "react-router-dom";
import {Card, Image, List} from "semantic-ui-react";

function EventItem(props) {
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

    const formattedDate = new Date(props.event.date).toDateString();
    return (
        <Card raised={true} link={true} fluid={true} color="red">
            <Image wrapped={true} ui={false} rounded={true} src={props.event.image}
                   alt={props.event.heading} fluid={false}/>
            <Card.Content>
                <Card.Header className="my-2" style={styles.heading}>{props.event.heading}</Card.Header>
                <List
                    className="my-2"
                    horizontal={true}
                    divided={true}
                    animated={true}
                    size="medium"
                    items={[props.event.category, props.event.author, formattedDate]}/>
                <Card.Description className="my-2">{props.event.caption}</Card.Description>
            </Card.Content>
            <Card.Content extra={true}>
                <Card.Meta>
                    <Link style={styles.readMore} to="/">read more</Link>
                </Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default EventItem;
