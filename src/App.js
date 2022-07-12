import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useBreakpoint } from "./hooks/useBreakpoint";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";
import { News } from "./components/News/News";

import { sidebarItems } from "./constants";
import { navbarItems } from "./constants";
import "bootstrap/dist/css/bootstrap.min.css";

const news = [
    {
        image: "https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg",
        title: "Very long long long long long some title",
        to: "/",
    }, {
        image: "https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg",
        title: "Very long long long long long some title",
        to: "/",
    }, {
        image: "https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg",
        title: "Very long long long long long some title",
        to: "/",
    },
];

function App() {
    const externalSidebar = useBreakpoint(992);

    return (
        <Container fluid="lg">
            <Row>
                <Col xs="12" lg="2"> {externalSidebar && <Sidebar items={sidebarItems} />} </Col>
                <Col xs="12" lg="10" className="m-0 p-0">
                    <Navbar items={navbarItems} />
                    {!externalSidebar && <Sidebar items={sidebarItems} />}

                    <News items={news} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
