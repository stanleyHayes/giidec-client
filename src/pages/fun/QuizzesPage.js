import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Grid, Row} from "rsuite";
import QuizItemCompleted from "../../components/shared/QuizItemCompleted";

function QuizzesPage(props) {

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
        },
        completed: true
    };

    const quiz1 = {
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
        },
        completed: false
    };

    const [quizzes, setQuizzes] = useState([quiz, quiz, quiz, quiz, quiz, quiz, quiz]);

    return (
        <Layout>
            <div className="Light-Background py-5" style={{minHeight: "91vh"}}>
                <Grid>
                    <Row>
                        {
                            (quizzes.length === 0) ? (
                                <Col
                                    xs={24}
                                    style={{minHeight: "81vh"}}
                                    className="d-flex flex-grow-1 justify-content-center align-items-center flex-column">
                                    <h4 className="">No Quiz Yet</h4>
                                </Col>
                            ) : (
                                quizzes.map(function (quiz, index) {
                                    return (
                                        <Col className="my-3" xs={24} sm={24} md={8} lg={8} key={index}>
                                            <QuizItemCompleted quiz={quiz}/>
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

export default QuizzesPage;
