import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Container, Image} from "react-bootstrap";

import "../../index.css";
import {List} from "semantic-ui-react";
import StrategyListItem from "../../components/shared/StrategyListItem";
import CoreValueListItem from "../../components/shared/CoreValueListItem";
import {Col, Grid, Row} from "rsuite";
import LeaderItem from "../../components/shared/LeaderItem";


function AboutOrganisationPage(props) {
    const value1 = {
        icon: {name: "lightbulb", color: "purple"},
        name: "Creativity and Innovation",
        description: "We are creative in delivering value to our clients, shareholders, manufacturers and the community. We anticipate change and capitalize on the many opportunities that arise."
    };

    const value2 = {
        icon: {name: "hand rock", color: "blue"},
        name: "Integrity",
        description: "In the discharge of our mandate, we will be fair, honest, transparent and ethical"
    };

    const value3 = {
        icon: {name: "heartbeat", color: "red"},
        name: "Life, Health and Environment",
        description: "We seek to improve our wellbeing, our working conditions and the surroundings in which we live in. "
    };

    const value4 = {
        icon: {name: "handshake", color: "purple"},
        name: "Teamwork",
        description: "Our team is supportive of each other’s efforts, loyal to one another, and care for each other both personally and professionally."
    };

    const value5 = {
        icon: {name: "anchor", color: "yellow"},
        name: "Accountability",
        description: "We accept our individual and team responsibilities and we meet our commitments. We take responsibility for our performance in all of our decisions and actions."
    };

    const strategy1 = {
        icon: {name: "cogs", color: "pink"},
        name: "Our People",
        description: "GIISDEC is people centered. We foster teamwork, nurture talent and enhance leadership capabilities."
    };

    const strategy2 = {
        icon: {name: "key", color: "green"},
        name: "Our Conduct",
        description: "GIISDEC is people centered. We foster teamwork, nurture talent and enhance leadership capabilities."
    };

    const strategy3 = {
        icon: {name: "cogs", color: "brown"},
        name: "Our Policies",
        description: "GIISDEC is people centered. We foster teamwork, nurture talent and enhance leadership capabilities."
    };

    const strategy4 = {
        icon: {name: "lightbulb", color: "orange"},
        name: "Our Innovative approach",
        description: "GIISDEC is people centered. We foster teamwork, nurture talent and enhance leadership capabilities."
    };


    const kwaminaArcherFrimpong = {
        image: `${process.env.PUBLIC_URL}/images/kwamina-archer-frimpong.jpeg`,
        name: "Kwabena Bonsu Fordwor",
        position: "Chairman",
        profile: "Highly proficient and competent mechanical engineer with 10 years working experience. A very talented professional with a genuine concern for sustainable, safety and environmentally friendly policies. A dedicated, team player, self-motivated, good interpersonal and communication skills and hardworking with in-depth mechanical knowledge and experience."
    };

    const kwabenaBonsuFodwor  = {
        image: `${process.env.PUBLIC_URL}/images/kwamena-bonsu.jpeg`,
        name: "Kwamina Archer Frimpong",
        position: "Chairman",
        profile: "Kwabena Bonsu Fordwor is a lawyer and a business executive and currently the Chief Executive Officer of Ghana Integrated Iron and Steel Development Corporation (GIISDEC), a flagship project of the Presidency which was formed by Act 988 and assented to by His Excellency the President Nana Addo Dankwa Akufo Addo on 13th May 2019. "
    };

    const hanifatuYahaya = {
        image: `${process.env.PUBLIC_URL}/images/hanifatu-yahaya.jpeg`,
        name: "Ms. Hanifatu Yahaya Esq",
        position: "Chairman",
        profile: "Ms. Hanifatu Yahaya Esq is a lawyer by profession who was called to the Ghana Bar in October, 2010.  Prior to that she obtained a Bachelors Degree in Social Work and Sociology at the University of Ghana Legon between 2000 and 2003 with First Class Honours."
    };

    const johnNtim = {
        image: `${process.env.PUBLIC_URL}/images/john-ntim.jpeg`,
        name: "JOHN NTIM FORDJOUR, MP",
        position: "Chairman",
        profile: "John Ntim Fordjour is an astute and visionary entrepreneur, affable and selfless politician, and an ordained reverend minister. Ntim Fordjour is a regular TEDx Speaker, social commentator and bold advocate of anti-corruption and conservative social values in the Parliament of Ghana."
    };



    const [leaders] = useState([kwaminaArcherFrimpong, hanifatuYahaya, johnNtim, kwabenaBonsuFodwor]);


    const [values] = useState([value1, value2, value3, value4, value5]);

    const [visionStrategies] = useState([strategy1, strategy2, strategy3, strategy4]);

    const styles = {
        displayText: {
            fontSize: "20px",
            lineHeight: "2"
        }
    };

    return (
        <Layout>
            <div style={{minHeight: "91vh"}}>
                <div style={{height: "60vh"}}>
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

                    <h3 className="text-center">GHANA INTEGRATED IRON AND STEEL DEVELOPMENT CORPORATION
                        (GIISDEC)</h3>
                </div>


                <div className="Light-Background py-5">
                    <Container>
                        <h3 className="text-uppercase">Mission</h3>
                        <p style={styles.displayText}> To lead the sustainable development, promotion and disposal of an
                            integrated Iron and steel
                            industry of Ghana, by leveraging the right mix of domestic and foreign investments in
                            partnership with the people of Ghana. </p>
                    </Container>
                </div>

                <div className="Dark-Background py-5 Section">
                    <Container>
                        <h3 className="text-uppercase">Vision</h3>
                        <p style={styles.displayText}>
                            To be a leading global integrated Iron and Steel development corporation, whose operations
                            have a profound impact on the quality of life of the people of Ghana.
                        </p>
                        <h6 className="py-5 text-center">We do this through</h6>
                        <List
                            selection={true}
                            divided={true}
                            animated={true}
                            celled={true}
                            relaxed="very"
                            size="big"
                            verticalAlign="middle">

                            {
                                visionStrategies.map(function (strategy, index) {
                                    return (
                                        <StrategyListItem key={index} strategy={strategy}/>
                                    )
                                })
                            }
                        </List>
                    </Container>
                </div>

                <div className="Light-Background py-5 Section">
                    <Container>
                        <h3 className="text-uppercase">Core Values</h3>
                        <List
                            selection={true}
                            divided={true}
                            animated={true}
                            celled={true}
                            relaxed="very"
                            size="big"
                            verticalAlign="middle">

                            {
                                values.map(function (value, index) {
                                    return (
                                        <CoreValueListItem key={index} value={value}/>
                                    )
                                })
                            }
                        </List>
                    </Container>
                </div>
                <div className="Dark-Background py-5 Section">
                    <Container>
                        <h3 className="text-uppercase">Profile</h3>
                        <div>
                            <p style={styles.displayText} className="py-5">Ghana Integrated Iron and Steel Development
                                Corporation (GIISDEC) was established by an
                                Act of Parliament in 2019 to support the government's objective of building strong
                                industrialization through the provision of an integrated Iron and Steel Industry and
                                reduce the country’s high dependence on imported iron and steel products through the
                                development of the country’s own iron ore and its related mineral resources.</p>
                            <p style={styles.displayText} className="py-5"> The Ghana Integrated Iron and Steel
                                Development Act 2019 (ACT 988) was subsequently
                                enacted to provide the regulatory framework for the exploitation and development of the
                                country’s Iron and Steel industry. Act 2019 (ACT 988) establishes the contractual
                                relationship among the state, GIISDEC and prospective investors in the development and
                                promotion of the economy and efficiency of the integrated iron and steel industry along
                                the entire iron and steel value chain: from the mining of iron ore and its related
                                minerals to the production of iron and steel for industrialization and economic growth
                                (upstream to downstream operations). This Act also grants GISDEC the right of entry into
                                joint venture operations to develop and promote the Iron and Steel industry and to
                                facilitate the establishment of industrial parks to promote the manufacture of iron and
                                steel, alloys and other related products and the provision of services in the integrated
                                iron and steel industry. The corporation, which started operations in 2019, is partner
                                in all iron ore concession agreements in Ghana. </p>
                        </div>
                    </Container>
                </div>

                <div className="Light-Background py-5 Section">
                    <Grid>
                        <Row>

                            <Col xs={24} className="my-5">
                                <h6 className="text-uppercase">Board Memers</h6>
                                <h2>Learn about our board members</h2>
                            </Col>
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
            </div>

        </Layout>
    )
}

export default AboutOrganisationPage;
