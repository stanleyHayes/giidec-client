import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import Gallery from "react-grid-gallery";
import {Container} from "react-bootstrap";
import {Col, Grid, Row} from "rsuite";
import "./../../index.css";

function ImagesPage(props) {
    const image = {
        src: `https://picsum.photos/id/1018/1000/600/`,
        thumbnail: "https://picsum.photos/id/1018/250/150/",
       thumbnailHeight: 50,
        thumbnailWidth: 50,
        caption: "Whatever the fuck you want here"
    };

    const [images, setImages] = useState([image, image, image, image, image, image, image, image, image, image, image, image, image, image, image, image, image, image]);

    return (
        <Layout>
            <Container>
                <Grid className="my-5 Dark-Background Section">
                    <Row>
                        <Col xs={24}>
                            <h6>Our Gallery</h6>
                            <h2>Experience us through pictures</h2>
                        </Col>

                        <Col xs={24} className="my-5">
                            <Gallery images={images} />
                        </Col>
                    </Row>
                </Grid>
            </Container>
        </Layout>
    )
}

export default ImagesPage;
