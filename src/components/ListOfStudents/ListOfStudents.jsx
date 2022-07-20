import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Col, Spinner, Table } from "react-bootstrap";
import { getListOfStudents } from "../../store/ratingSlice";

export const ListOfStudents = () => {
    const dispatch = useDispatch();
    const {list, listStatus: status, listError: error} = useSelector(state => state.rating);
    useEffect(() => {
        dispatch(getListOfStudents());
    }, [dispatch]);

    return (
        <>
            {
                status === "pending" &&
                <Col className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Col>
            }
            {
                (status === "fulfilled" || list.length !== 0) &&
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Имя</th>
                            <th>Логин</th>
                            <th>Рейтинг</th>
                        </tr>
                    </thead>
                    <tbody>
                    {list.map(s => (
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.username}</td>
                            <td>1</td>
                        </tr>
                    ))
                    }
                    </tbody>
                </Table>
            }
            {
                status === "rejected" &&
                <Alert variant="danger" key="danger" className="text-center">{error}</Alert>
            }
            {
                status === "fulfilled" && list.length === 0 &&
                <Alert variant="dark" key="dark" className="text-center">Нет студентов</Alert>
            }
        </>
    );
};