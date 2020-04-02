import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Container, Image} from "react-bootstrap";

import "../../index.css";
import {Col, Grid, Row} from "rsuite";
import {Button, Card, Form, Icon, List} from "semantic-ui-react";
import {off} from "uikit/src/js/util";
import OfficeItem from "../../components/shared/OfficeItem";

function FindUsPage(props) {

    const headquarters = {
        image: `${process.env.PUBLIC_URL}/images/headquarters.jpg`,
        country: "Ghana",
        city: "Accra",
        landmark: "Academic City College",
        latlng: [-123.7, 89.4],
        email: "hayfordstanley@gmail.com",
        phone: "+233270048319",
        type: "Headquarters"
    };

    const office = {
        image: `${process.env.PUBLIC_URL}/images/branchoffice.jpg`,
        country: "Ghana",
        city: "Kumasi",
        landmark: "KNUST",
        latlng: [-123.7, 89.4],
        email: "stanleyhayford@gmail.com",
        phone: "+233555180048",
        type: "Branch Office"
    };

    const facebook = {
        platform: "facebook",
        name: "GIISDEC",
        username: "GIISDEC",
        icon: "facebook",
        color: "facebook"
    };

    const instagram = {
        platform: "instagram",
        name: "GIISDEC",
        username: "@giidec",
        icon: "instagram",
        color: "instagram"
    };

    const twitter = {
        platform: "twitter",
        name: "GIISDEC",
        username: "@giidec",
        icon: "twitter",
        color: "twitter"
    };
    const youtube = {
        platform: "youtube",
        name: "GIISDEC",
        username: "@giisdec",
        icon: "youtube",
        color: "youtube"
    };

    const [offices, setOffices] = useState([headquarters, office, office, office, office, office]);

    const [socialMedia, setSocialMedia] = useState([facebook, twitter, instagram, youtube]);

    return (
        <Layout>
            <div style={{minHeight: "91vh"}}>
                <div  style={{height: "60vh"}}>
                    <Image fluid={true}
                           style={{
                               height: "60vh",
                               width: "100vw",
                               backgroundSize: "cover",
                               backgroundPosition: "center",
                               position: "absolute",
                               backgroundColor: "rgba(174,174,174,0.9)",
                               objectFit: "cover"
                           }}
                           src={`${process.env.PUBLIC_URL}/images/banner.jpg`}/>
                </div>

                <div className="Dark-Background py-5">
                    <h4 className="text-center">Follow us on social media</h4>
                    <Container>
                        <Grid>
                            <Row>
                                <Col className="my-3 d-flex justify-content-center" xs={24} sm={24} md={12} mdOffset={6}
                                     lg={12} lgOffset={6}>
                                    {
                                        socialMedia.map(function (platform, index) {
                                            return (
                                                <Button
                                                    className="mx-2"
                                                    icon={<Icon size="big" name={platform.icon}/>}
                                                    circular={true}
                                                    key={index}
                                                    color={platform.color}/>
                                            )
                                        })
                                    }
                                </Col>
                            </Row>
                        </Grid>
                    </Container>
                </div>

                <div className="Light-Background py-5 Section">
                    <h2 className="text-center">Our offices</h2>
                    <Grid fluid={false}>
                        <Row>
                            {
                                offices.map(function (office, index) {
                                    return (
                                        <Col xs={24} sm={24} md={12} lg={8} key={index}>
                                            <OfficeItem office={office}/>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Grid>
                </div>

                <div className="Dark-Background py-5 Section">
                    <h2 className="text-center my-5">Send us a message</h2>
                    <Grid fluid={false}>
                        <Row>
                            <Col xs={24} sm={24} md={10} mdOffset={7} lg={10} lgOffset={7}>
                                <Card fluid={true} raised={true} link={true} color="yellow" className="bg-white">
                                    <Form className="p-4">
                                        <Form.Input
                                            fluid={false}
                                            label="Name"
                                            required={true}
                                            placeholder="Type full name here..."
                                        />

                                        <Form.Input
                                            fluid={true}
                                            label="Email"
                                            required={false}
                                            placeholder="Type full email here..."
                                        />

                                        <Form.Input
                                            fluid={true}
                                            label="Phone"
                                            required={true}
                                            placeholder="Type full email here..."
                                        />

                                        <Form.Input
                                            fluid={true}
                                            label="Subject"
                                            required={true}
                                            placeholder="Type subject here..."
                                        />

                                        <Form.TextArea
                                            fluid={true}
                                            label="Message"
                                            required={true}
                                            placeholder="Type message here..."
                                        />

                                        <Button fluid={true} color="green">Submit message</Button>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                {/*<div className="Light-Background py-5 Section">*/}
                {/*    <h2 className="text-center">Map View</h2>*/}
                {/*</div>*/}
            </div>
        </Layout>
    )
}

export default FindUsPage;
