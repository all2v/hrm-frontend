import {
    Badge, Button,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Form,
    FormControl,
    FormGroup,
    Image, InputGroup,
    Row
} from "react-bootstrap";
import React from "react";
import {CardImage, Search} from "react-bootstrap-icons";
import {PersonCardItem} from "../../entities/person-card-item";


export const EmployeesList = () => {

    return (
        <>
            <div className={"px-5"}>
                <div className={"mt-3 mb-5 d-flex flex-row justify-content-start"}>
                    <h5 className={"mx-5"}>
                        <a href={"#"} className={"text-decoration-none text-secondary"}>Текущие сотрудники</a> | <a
                        href={"#"} className={"text-decoration-none text-light"}>Бывшие сотрудники</a>
                    </h5>
                </div>

                <div>
                    <Row>
                        <Col sm={12} md={8}>
                            <Row className={"g-3"} xs={1} md={2} lg={3}>
                                <PersonCardItem imageSrc={"https://w7.pngwing.com/pngs/592/884/png-transparent-programmer-computer-programming-computer-software-computer-icons-programming-language-avatar.png"}
                                                name={"Нектов Некто Нектович"}
                                                role={"Ui/UX designer"}
                                                skills={["Figma", "Adobe Illustrator", "Adobe Photoshop", "bootstrap"]}/>

                                <PersonCardItem imageSrc={"https://assets.materialup.com/uploads/9e891d99-30d7-4763-9b73-358cc8e8b2cc/preview.png"}
                                                name={"Нектов Некто Нектович"}
                                                role={"Ui/UX designer"}
                                                skills={["Figma", "Adobe Illustrator", "Adobe Photoshop", "bootstrap"]}/>

                                <PersonCardItem imageSrc={"https://images.hdqwalls.com/download/spaceman-4k-h0-3840x2400.jpg"}
                                                name={"Нектов Некто Нектович"}
                                                role={"Ui/UX designer"}
                                                skills={["Figma", "Adobe Illustrator", "Adobe Photoshop", "bootstrap"]}/>

                                <PersonCardItem imageSrc={"https://pushinka.top/uploads/posts/2023-04/1681762468_pushinka-top-p-kartinki-muzhskie-na-avatarku-odinochestvo-15.jpg"}
                                                name={"Нектов Некто Нектович"}
                                                role={"Ui/UX designer"}
                                                skills={["Figma", "Adobe Illustrator", "Adobe Photoshop", "bootstrap"]}/>

                                <PersonCardItem imageSrc={"https://images.hdqwalls.com/download/spaceman-4k-h0-3840x2400.jpg"}
                                                name={"Нектов Некто Нектович"}
                                                role={"Ui/UX designer"}
                                                skills={["Figma", "Adobe Illustrator", "Adobe Photoshop", "bootstrap"]}/>

                            </Row>

                        </Col>

                        <Col>
                            <Card>
                                <CardBody>
                                    <CardTitle>Поиск кандидата</CardTitle>
                                    <hr/>

                                    <Form>
                                        <FormGroup className={"text-start my-2"}>
                                            <InputGroup>
                                                <FormControl type={"text"} placeholder={"Поиск"}/>
                                                <Button variant={"outline-secondary"}>
                                                    <Search/>
                                                </Button>
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup className={"text-start my-3"}>
                                            <h5>По должности</h5>
                                            <Row className={"justify-content-between my-1"}>
                                                <Col xs={10}>
                                                    <div>UX/UI designer</div>
                                                </Col>
                                                <Col>
                                                    <Row xs={2}>
                                                        <Badge>15</Badge>
                                                        <Form.Check />
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className={"justify-content-between my-1"}>
                                                <Col xs={10}>
                                                    <div>Backend-разработчик</div>
                                                </Col>
                                                <Col>
                                                    <Row xs={2}>
                                                        <Badge>15</Badge>
                                                        <Form.Check />
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className={"justify-content-between my-1"}>
                                                <Col xs={10}>
                                                    <div>Frontend-разработчик</div>
                                                </Col>
                                                <Col>
                                                    <Row xs={2}>
                                                        <Badge>15</Badge>
                                                        <Form.Check />
                                                    </Row>
                                                </Col>
                                            </Row>

                                            <Row className={"justify-content-between my-1"}>
                                                <Col xs={10}>
                                                    <div>CI/CD</div>
                                                </Col>
                                                <Col>
                                                    <Row xs={2}>
                                                        <Badge>15</Badge>
                                                        <Form.Check />
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </FormGroup>

                                        <FormGroup className={"text-start my-3"}>
                                            <h5>По навыкам</h5>
                                            <Row className={"justify-content-between my-1"}>
                                                <Col xs={10}>
                                                    <div>bootstrap</div>
                                                </Col>
                                                <Col>
                                                    <Row xs={2}>
                                                        <Badge>15</Badge>
                                                        <Form.Check />
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className={"justify-content-between my-1"}>
                                                <Col xs={10}>
                                                    <div>react</div>
                                                </Col>
                                                <Col>
                                                    <Row xs={2}>
                                                        <Badge>15</Badge>
                                                        <Form.Check />
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className={"justify-content-between my-1"}>
                                                <Col xs={10}>
                                                    <div>ASP.NET</div>
                                                </Col>
                                                <Col>
                                                    <Row xs={2}>
                                                        <Badge>15</Badge>
                                                        <Form.Check />
                                                    </Row>
                                                </Col>
                                            </Row>

                                            <Row className={"justify-content-between my-1"}>
                                                <Col xs={10}>
                                                    <div>docker</div>
                                                </Col>
                                                <Col>
                                                    <Row xs={2}>
                                                        <Badge>15</Badge>
                                                        <Form.Check />
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                    </Form>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>


        </>
    )
}