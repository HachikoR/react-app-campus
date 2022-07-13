import { useParams } from "react-router-dom";
import { Row, Col, Container, Spinner, Alert } from "react-bootstrap";
import { useEffect } from "react";
import defaultImage from "./../../assets/images/news_default_image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getNewsById } from "../../store/newsSlice";

export const ReadingNews = () => {
    const {idNews} = useParams();
    const dispatch = useDispatch();
    const {openNews: news, status, error} = useSelector(state => state.news);

    useEffect(() => {
        dispatch(getNewsById(idNews));
    }, [idNews]);

    return (
        <Container fluid className="pt-3">
            {
                status === "pending" &&
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>
                </Row>
            }
            {
                status === "fulfilled" &&
                <>
                    <Row>
                        <Col className="text-center"><h2>{news?.title}</h2></Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <img src={news?.image ?? defaultImage} alt="main-img" className="w-100" />
                        </Col>
                        <Col xs={8}>
                            {news?.body?.split("\n").map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                        </Col>
                    </Row>
                </>
            }

            {

                status === "rejected" &&
                <Row>
                    <Alert variant="danger" key="danger" className="text-center">{error}</Alert>
                </Row>
            }
        </Container>
    );
};