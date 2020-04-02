import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Grid, Row} from "rsuite";
import {Card, List, Image} from "semantic-ui-react";
import ServiceSidebarItem from "../../components/shared/ServiceSidebarItem";

function ServicesPage(props) {

    const styles = {
        serviceName: {
            fontSize: "24px",
            fontWeight: "bold"
        },
        serviceDescription: {
            fontSize: "20px",
            lineHeight: "1.5"
        },
        displayText: {
            fontSize: "20px",
            lineHeight: "1.5"
        }
    };

    const service = {
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
        name: "Planning And Engineering",
        description: "We have years of first-hand underground mine engineering and operating experience in most countries and across multiple commodities using all common mining methods"
    };

    const service1 = {
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
        name: "Planning And Engineering",
        description: "Our engineers have strong operational and technical backgrounds and have gained substantial experience in mines employing a multitude of mining methods, exploiting all commodities on all continents. In addition, we are able to draw on the broader skills across our company’s global workforce."
    };

    const service2 = {
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
        name: "Mining Economics And Finance",
        description: "Commodity price and macro-economic assumptions are frequently required as input to our technical authoring and reviewing mandates which include:"
    };

    const service3 = {
        image: `${process.env.PUBLIC_URL}/images/banner.jpg`,
        name: "Mining Geology",
        description: "In any mining operation, understanding the geology of the orebody and waste rocks is fundamental for successful resource estimation, geotechnical engineering, mine planning and mineral processing."
    };

    const [services, setServices] = useState([service, service2, service3, service1, service1, service3]);
    const [selectedService, setSelectedService] = useState(null);

    function handleSelectedService(service) {
        setSelectedService(service);
    }

    return (
        <Layout>
            <div style={{height: "60vh"}}>
                <Image style={{
                    height: "60vh",
                    width: "100vw",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    backgroundColor: "rgba(174,174,174,0.9)",
                    objectFit: "cover"
                }} fluid={true}
                       src={(selectedService) ? (selectedService.image) : (`${process.env.PUBLIC_URL}/images/banner.jpg`)}/>

                <h3 className="Centered text-white text-center w-100">
                    {selectedService ? (selectedService.name) : "GHANA INTEGRATED IRON AND STEEL DEVELOPMENT CORPORATION"}
                </h3>
            </div>

            <Grid fluid={false} className="my-5">
                <Row>
                    <Col xs={24} className="my-5">
                        <h6 className="text-uppercase">Our Services</h6>
                        <h2>what we bring to you</h2>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} className="mb-5">
                        <List
                            selection={true}
                            relaxed="very"
                            divided={true}
                            animated={true}
                            link={true}
                            size="huge">
                            {
                                services.map(function (service, index) {
                                    return (
                                        <ServiceSidebarItem
                                            handleSelectedService={handleSelectedService}
                                            service={service}
                                            key={index}/>
                                    )
                                })
                            }
                        </List>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} mdOffset={2} lgOffset={2}>
                        <div>
                            {
                                (selectedService) ? (
                                    <div>
                                        <Card color="blue" fluid={true} raised={true} className="mb-5 p-5">
                                            <Card.Header style={styles.serviceName} className="my-2">{selectedService.name}</Card.Header>
                                            <Card.Description style={styles.displayText}>{selectedService.description}</Card.Description>
                                        </Card>
                                    </div>
                                ) : (
                                    <div>
                                        {services.map(function (service, index) {
                                            return (
                                                <Card color="blue" fluid={true} raised={true} className="mb-5">
                                                    <Image fluid={true} src={service.image} rounded={true} />
                                                    <div className="p-3">
                                                    <Card.Header style={styles.serviceName} className="my-2">{service.name}</Card.Header>
                                                    <Card.Description style={styles.displayText}>{service.description}</Card.Description>
                                                    </div>
                                                </Card>
                                            )
                                        })}
                                    </div>
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Grid>
        </Layout>
    )
}

export default ServicesPage;
