import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Grid, Row} from "rsuite";
import EventItem from "../../components/shared/EventItem";
import "../../index.css";

function EventsPage(props) {

    const event = {
        date: "2020-08-02",
        category: "extraction",
        caption: "This dark and mysterious color scheme with a vibrant blue accent follows a prevailing Web design trend",
        author: "Stanley Hayford",
        heading: "Extraction of Iron",
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`
    };

    const [events, setEvents] = useState([event, event, event, event, event, event, event, event]);

    return (
        <Layout>
            <div className="Light-Background py-5" style={{minHeight: "91vh"}}>
                <Grid>
                    <Row>
                        <Col xs={24} className="my-5">
                            <h6 className="text-uppercase">Our Events</h6>
                            <h2>Our latest events</h2>
                        </Col>
                        {
                            (events.length === 0) ? (
                                <Col
                                    xs={24}
                                    style={{minHeight: "90vh"}}
                                    className="d-flex flex-grow-1 justify-content-center align-items-center flex-column">
                                    <h4 className="">No Events Available</h4>
                                </Col>
                            ) : (
                                events.map(function (event, index) {
                                    return (
                                        <Col className="my-3" xs={24} sm={24} md={8} lg={8} key={index}>
                                            <EventItem event={event}/>
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

export default EventsPage;
