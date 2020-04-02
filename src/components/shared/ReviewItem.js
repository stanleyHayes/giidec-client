import React from "react";
import {Card, Rating} from "semantic-ui-react";


function ReviewItem(props) {
    return (
        <Card fluid={true} raised={true}>
            <Card.Content>
                <Card.Header>{props.review.user.name}</Card.Header>
                <Card.Meta>{props.review.user.country}</Card.Meta>
                <Card.Description>{props.review.review}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Rating
                    icon="star"
                    size="large"
                    maxRating={5}
                    rating={props.review.rating}
                    clearable={false}/>
            </Card.Content>
        </Card>
    )
}

export default ReviewItem;
