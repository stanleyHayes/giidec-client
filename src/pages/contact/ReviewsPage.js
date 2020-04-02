import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Grid, Row} from "rsuite";
import ReviewItem from "../../components/shared/ReviewItem";
import {Button, Card, Form, Icon, Rating} from "semantic-ui-react";

function ReviewsPage(props) {

    const review = {
        user: {
            name: "Stanley Hayford",
            country: "Ghana"
        },
        date: "2020-11-11",
        review: "This must be the best service I have ever encountered. Thank you.",
        rating: 5
    };

    const options = [
        {text: "Ghana", value: "Ghana"},
        {text: "Germany", value: "Germany"},
        {text: "England", value: "England"},
        {text: "USA", value: "USA"},
        {text: "Nigeria", value: "Nigeria"},
        {text: "La Cote d'voire", value: "La Cote d'voire"},
        {text: "Zimbabwe", value: "Zimbabwe"},
        {text: "Bukina Faso", value: "ukina Faso"},
    ];

    const [reviews, setReviews] = useState([review, review, review, review, review, review]);
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState(5);

    function handleRate(event, data) {
        setRating(data.rating);
    }

    function handleRatingMessageChange(event, data) {
        console.log(data)
    }


    return (
        <Layout>
            <div className="py-5 Light-Background" style={{minHeight: "91.5vh"}}>
                <Grid>
                    <Row className="align-items-center">
                        <Col xs={24} className="my-5">
                            <h6 className="text-uppercase">Testimonial</h6>
                            <h2>What our customer says?</h2>
                        </Col>

                        <Col xs={24} sm={24} md={10} mdOffset={7} lg={10} lgOffset={7} className="mb-5">
                            <Card fluid={true} raised={true} color="yellow" centered={true} className="p-3">
                                <Form loading={loading}>
                                    <Form.Input
                                        fluid={true}
                                        label="Name"
                                        className="mb-3"
                                        required={true}
                                        placeholder="Enter name"
                                        iconPosition="left"
                                    />

                                    <Form.Select
                                        label="Country"
                                        options={options}
                                        fluid={true}
                                        required={true}
                                        className="mb-3"
                                        selection={true}
                                        defaultValue="Ghana"/>

                                    <Rating
                                        icon="star"
                                        maxRating={5}
                                        clearable={true}
                                        size="massive"
                                        className="mb-3"
                                        rating={rating}
                                        onRate={handleRate}
                                    />


                                    <Form.TextArea
                                        placeholder="Add a message"
                                        id="message"
                                        name="message"
                                        className="mb-3"
                                        onChange={handleRatingMessageChange}
                                    />

                                    <Button
                                        className="mb-3"
                                        fluid={true}
                                        color="green"
                                        loading={loading}
                                        size="medium">
                                        Submit review
                                    </Button>

                                </Form>
                            </Card>
                        </Col>
                        {
                            (reviews.length === 0) ?
                                (<Col xs={24} style={{
                                    height: "50vh",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <h5>Be the first to rate us</h5>
                                </Col>)
                                :
                                (
                                    reviews.map(function (review, index) {
                                        return (
                                            <Col xs={24} sm={24} md={8} lg={8} className="mb-4" key={index}>
                                                <ReviewItem review={review}/>
                                            </Col>
                                        )
                                    })
                                )
                        }
                    </Row>
                </Grid>
            </div>
        </Layout>
    )
}

export default ReviewsPage;
