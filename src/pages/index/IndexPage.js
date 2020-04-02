import React, {useState} from 'react';
import Layout from "../../components/layout/Layout";
import {Col, Grid, Row} from "rsuite";
import {Container, Image} from "react-bootstrap";
import ServiceItem from "../../components/shared/ServiceItem";
import EventItem from "../../components/shared/EventItem";
import FactItem from "../../components/shared/FactItem";
import QuizItem from "../../components/shared/QuizItem";
import WinnerItem from "../../components/shared/WinnerItem";
import ReviewItem from "../../components/shared/ReviewItem";
import "../../index.css";

import {Card} from "semantic-ui-react";

function IndexPage(props) {

    const value1 = {
        title: "Integrity",
        description: "In the discharge of our mandate, we will be fair, honest, transparent and ethical"
    };


    const value2 = {
        title: "Life, Health and Environment",
        description: "We seek to improve our wellbeing, our working conditions and the surroundings in which we live in."
    };


    const value3 = {
        title: "Teamwork",
        description: "Our team is supportive of each other’s efforts, loyal to one another, and care for each other both personally and professionally."
    };


    const value4 = {
        title: "Accountability",
        description: "We accept our individual and team responsibilities and we meet our commitments. We take responsibility for our performance in all of our decisions and actions"
    };

    const value5 = {
        title: "Creativity and Innovation",
        description: "We are creative in delivering value to our clients, shareholders, manufacturers and the community. We anticipate change and capitalize on the many opportunities that arise"
    };

    const service = {
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
        name: "Contemporary and Bold",
        description: "This dark and mysterious color scheme with a vibrant blue accent follows a prevailing Web design trend: The use of dark background colors with bright and bold accent colors."
    };

    const event = {
        date: "2020-08-02",
        category: "extraction",
        caption: "This dark and mysterious color scheme with a vibrant blue accent follows a prevailing Web design trend",
        author: "Stanley Hayford",
        heading: "Extraction of Iron",
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`
    };

    const fact = {
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
        fact: "Largest steel deposit is found in Tarkwa in the Western Region on Ghana",
        date: "2020-09-11"
    };

    const winner = {
        image: `${process.env.PUBLIC_URL}/images/winner.jpg`,
        name: "Kweku Mensah",
        gender: "Female",
        profession: "Chemical Engineer",
        percentage: 95,
        quote: "If you stop learning, you start dying",
        date_of_birth: "1993-08-23",
        quiz: {
            questions: [],
            date: "2020-08-12",
            duration: {
                unit: "Minutes",
                amount: 30
            },
            submissions: [],
            week: 2,
        }
    };

    const quiz = {
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
        questions: [],
        date: "2020-08-12",
        duration: {
            unit: "Minutes",
            amount: 30
        },
        submissions: [],
        week: 2,
        winner: {
            image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
            name: "Kweku Mensah",
            gender: "Female",
            profession: "Chemical Engineer",
            week: 3,
            percentage: 95,
            quote: "If you stop learning, you start dying",
            date_of_birth: "1993-08-23",
        }
    };

    const review = {
        user: {
            name: "Stanley Hayford",
            country: "Ghana"
        },
        date: "2020-11-11",
        review: "This must be the best service I have ever encountered. Thank you.",
        rating: 5
    };

    const styles = {
        displayText: {
            fontSize: "20px",
            lineHeight: "1.5"
        }
    };

    const [coreValues, setCoreValues] = useState([value1, value2, value3, value4, value5]);
    const [services, setServices] = useState([service, service, service, service, service, service]);
    const [events, setEvents] = useState([event, event, event, event, event, event]);
    const [reviews, setReviews] = useState([review, review, review, review, review, review]);
    return (
        <Layout>
            <div className="position-relative" style={{height: "60vh"}}>
                <img src={process.env.PUBLIC_URL + '/images/banner.jpg'}
                     style={{
                         height: "60vh",
                         width: "100vw",
                         backgroundSize: "cover",
                         backgroundPosition: "center",
                         position: "absolute",
                         backgroundColor: "rgba(174,174,174,0.9)",
                         objectFit: "cover"
                     }}
                />

                <h3 className="Centered text-white text-center w-100">
                    GHANA INTEGRATED IRON AND STEEL DEVELOPMENT CORPORATION
                </h3>
            </div>

            <div className="py-5 Dark-Background">
                <Container>
                    <Card fluid={true} raised={true} link={true} color="pink" centered={true}>
                        <Grid fluid={true}>
                            <Row>
                                <Col lg={12} md={12} sm={24} xs={24}>
                                    <Image fluid={true} src={`${process.env.PUBLIC_URL}/images/mission.jpg`}
                                           style={{width: "100%"}}/>
                                </Col>
                                <Col
                                    lg={12}
                                    md={12}
                                    sm={24}
                                    xs={24}
                                    style={styles.container}>
                                    <h2 className="text-center py-5">Mission</h2>
                                    <p style={styles.displayText} className="text-center pb-5">To lead the sustainable
                                        development, promotion and
                                        disposal
                                        of an
                                        integrated Iron and
                                        steel industry of Ghana, by leveraging the right mix of domestic and foreign
                                        investments
                                        in partnership with the people of Ghana</p>
                                </Col>
                            </Row>
                        </Grid>
                    </Card>
                </Container>
            </div>

            <div className="py-5 Light-Background">
                <Container>
                    <Card fluid={true} raised={true} link={true} color="pink" centered={true}>
                        <Grid fluid={true}>
                            <Row>
                                <Col lg={12} md={12} sm={24} xs={24} style={styles.container}>
                                    <h2 className="text-center py-5">Vision</h2>
                                    <p style={styles.displayText} className="text-center pb-5">To be a leading global
                                        integrated Iron and Steel
                                        development
                                        corporation, whose
                                        operations have a profound impact on the quality of life of the people of
                                        Ghana.</p>
                                </Col>

                                <Col lg={12} md={12} sm={24} xs={24}>
                                    <Image fluid={true} src={`${process.env.PUBLIC_URL}/images/vision.jpg`}
                                           style={{width: "100%"}}/>
                                </Col>
                            </Row>
                        </Grid>
                    </Card>
                </Container>
            </div>

            <div className="py-5 Section Dark-Background">
                <Grid>
                    <Row className="align-items-center">
                        <Col xs={24} className="my-5">
                            <h6 className="text-uppercase">Our Services</h6>
                            <h2>what we bring to you</h2>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} className="mb-4">
                            <ServiceItem service={service}/>
                        </Col>

                        <Col xs={24} sm={24} md={8} lg={8} className="mb-4">
                            <ServiceItem service={service}/>
                        </Col>

                        <Col xs={24} sm={24} md={8} lg={8} className="mb-4">
                            <ServiceItem service={service}/>
                        </Col>

                        <Col xs={24} sm={24} md={8} lg={8} className="mb-4">
                            <ServiceItem service={service}/>
                        </Col>

                        <Col xs={24} sm={24} md={8} lg={8} className="mb-4">
                            <ServiceItem service={service}/>
                        </Col>

                        <Col xs={24} sm={24} md={8} lg={8} className="mb-4">
                            <ServiceItem service={service}/>
                        </Col>
                    </Row>
                </Grid>
            </div>

            <div className="py-5 Section Light-Background">
                <Grid>
                    <Row className="align-items-center">
                        <Col xs={24} className="my-5">
                            <h6 className="text-uppercase">Our Events</h6>
                            <h2>Our latest events</h2>
                        </Col>
                        {
                            (events.length === 0) ?
                                (<Col style={{
                                    height: "50vh",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <h5>No Events at the moment</h5>
                                </Col>)
                                :
                                (
                                    events.map(function (event, index) {
                                        return (
                                            <Col xs={24} sm={24} md={8} lg={8} className="mb-4" key={index}>
                                                <EventItem event={event}/>
                                            </Col>
                                        )
                                    })
                                )
                        }
                    </Row>
                </Grid>
            </div>


            <div className="py-5 Section Dark-Background">
                <Grid>
                    <Row className="align-items-center">
                        <Col xs={24} className="my-5">
                            <h6 className="text-uppercase">Be Entertained</h6>
                            <h2>Have fun by learning and winning</h2>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} className="mb-4">
                            <FactItem fact={fact}/>
                        </Col>

                        <Col xs={24} sm={24} md={8} lg={8} className="mb-4">
                            <QuizItem quiz={quiz}/>
                        </Col>

                        <Col xs={24} sm={24} md={8} lg={8} className="mb-4">
                            <WinnerItem winner={winner}/>
                        </Col>
                    </Row>
                </Grid>
            </div>

            <div className="py-5 Section Light-Background">
                <Grid>
                    <Row className="align-items-center">
                        <Col xs={24} className="my-5">
                            <h6 className="text-uppercase">Testimonial</h6>
                            <h2>What our customer says?</h2>
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

export default IndexPage;
