import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Grid, Row} from "rsuite";
import WinnerItem from "../../components/shared/WinnerItem";

function WinnersPage(props) {

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

    const [winners, setWinners] = useState([winner, winner, winner, winner, winner, winner, winner, winner]);
    return (
        <Layout>
            <div className="Light-Background py-5" style={{minHeight: "91vh"}}>
                <Grid>
                    <Row>
                        {
                            (winners.length === 0) ? (
                                <Col
                                    xs={24}
                                    style={{minHeight: "81vh"}}
                                    className="d-flex flex-grow-1 justify-content-center align-items-center flex-column">
                                    <h4 className="">No Winners Yet</h4>
                                </Col>
                            ) : (
                                winners.map(function (winner, index) {
                                    return (
                                        <Col className="my-3" xs={24} sm={24} md={8} lg={8} key={index}>
                                            <WinnerItem winner={winner}/>
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

export default WinnersPage;
