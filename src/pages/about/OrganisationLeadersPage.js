import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Grid, Row} from "rsuite";
import LeaderItem from "../../components/shared/LeaderItem";

function OrganisationLeadersPage(props) {

    const leader = {
        image: `${process.env.PUBLIC_URL}/images/winner.jpg`,
        name: "Mr. Haruna Andani",
        position: "Chairman",
        profile: "This dark and mysterious color scheme with a vibrant blue accent follows a prevailing Web design trend"
    };

    const [leaders, setLeaders] = useState([leader, leader, leader, leader, leader, leader, leader, leader]);

    return (
        <Layout>
            <div className="Light-Background py-5" style={{minHeight: "91vh"}}>
                <Grid>
                    <Row>
                        {
                            leaders.map(function (leader, index) {
                                return (
                                    <Col className="my-3" xs={24} sm={24} md={8} lg={8} key={index}>
                                        <LeaderItem leader={leader}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Grid>
            </div>
        </Layout>
    )
}

export default OrganisationLeadersPage;
