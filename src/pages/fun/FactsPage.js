import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Grid, Row} from "rsuite";
import FactItem from "../../components/shared/FactItem";

function FactsPage(props) {

    const fact = {
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
        fact: "Largest steel deposit is found in Tarkwa in the Western Region on Ghana",
        date: "2020-09-11"
    };

    const [facts, setFacts] = useState([fact, fact, fact, fact, fact, fact, fact, fact, fact]);

    return (
        <Layout>
            <div className="Light-Background py-5" style={{minHeight: "90vh"}}>
                <Grid>
                    <Row>
                        {
                            (facts.length === 0) ? (
                                <Col
                                    xs={24}
                                    style={{minHeight: "81vh"}}
                                    className="d-flex flex-grow-1 justify-content-center align-items-center flex-column">
                                    <h4 className="">No Facts Yet</h4>
                                </Col>
                            ) : (
                                facts.map(function (fact, index) {
                                    return (
                                        <Col className="my-3" xs={24} sm={24} md={8} lg={8} key={index}>
                                            <FactItem fact={fact}/>
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

export default FactsPage;
