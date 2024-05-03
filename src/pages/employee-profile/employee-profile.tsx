import React from "react";
import {Badge, Button, Card, CardBody, CardTitle, Col, Form, Image, Row} from "react-bootstrap";
import {ArrowLeft, PersonAdd, PersonUp, PersonX} from "react-bootstrap-icons";
import {CommentItem} from "entities/comment-item";
import {ApplicationItem} from "entities/application-item";
import {ApplicationStatus} from "../../entities/application-item/models";
import {HistoryItem} from "../../entities/history-item";


export const EmployeeProfile = () => {
    return(
        <>
            <div className={"px-5"}>
                <div className={"mt-3 mb-5 d-flex flex-row justify-content-between"}>
                    <div className={"d-flex"}>
                        <Button variant={"light rounded"}>
                            <ArrowLeft size={24}/>
                        </Button>

                        <h5 className={"mx-5 my-auto"}>
                            <a href={"#"} className={"text-decoration-none text-secondary"}>Текущие сотрудники</a> | <a
                            href={"#"} className={"text-decoration-none text-light"}>Бывшие сотрудники</a>
                        </h5>
                    </div>
                    <Button variant={"light"}>
                        Редактировать
                    </Button>
                </div>

                <div>
                    <Row>
                        <Col sm={12} md={4} className={"position-sticky"}>
                            <Card className={"p-2 position-sticky"}>
                                <CardBody>
                                    <CardTitle className={"text-start fw-bold"}>Основная информация</CardTitle>
                                    <div className={"d-flex flex-column justify-content-start"}>
                                        <Image
                                            roundedCircle
                                            height={128}
                                            width={128}
                                            src={"https://images.hdqwalls.com/download/spaceman-4k-h0-3840x2400.jpg"}
                                            className={`border border-light`}
                                            style={{objectFit: 'cover'}}
                                        />
                                    </div>

                                    <div className={"text-start"}>
                                        <h5>Нектов Никто Нектович</h5>
                                    </div>
                                    <div className={"text-start fw-bold text-muted"}>
                                        UI/UX дизайнер
                                    </div>

                                    <hr/>

                                    <div className={"text-start"}>
                                        Дата начала работы: {"01.01.2021"}
                                    </div>

                                    <div className={"text-start my-3"}>
                                        <h5>Основные компетенции:</h5>
                                    </div>

                                    <Row>
                                        <Col>
                                            <Badge bg={"dark"}>Figma</Badge>
                                        </Col>
                                        <Col>
                                            <Badge bg={"dark"}>Bootstrap</Badge>
                                        </Col>
                                        <Col>
                                            <Badge bg={"dark"}>Adobe Illustrator</Badge>
                                        </Col>
                                        <Col>
                                            <Badge bg={"dark"}>Adobe Photoshop</Badge>
                                        </Col>
                                        <Col>
                                            <Badge bg={"dark"}>html</Badge>
                                        </Col>
                                        <Col>
                                            <Badge bg={"dark"}>react</Badge>
                                        </Col>
                                        <Col>
                                            <Badge bg={"dark"}>Ui/Ux дизайн</Badge>
                                        </Col>
                                        <Col>
                                            <Badge bg={"dark"}>Frontend</Badge>
                                        </Col>
                                        <Col>
                                            <Badge bg={"dark"}>Графический дизайн</Badge>
                                        </Col>
                                        <Col>
                                            <Badge bg={"dark"}>Figma</Badge>
                                        </Col>
                                        <Col>
                                            <Badge bg={"dark"}>Figma</Badge>
                                        </Col>

                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col>

                            <Card id={"applications-card"} className={"text-right p-2 mb-4"}>
                                <CardBody>
                                    <div>
                                        <h5 className={"text-start"}>Запросы</h5>
                                    </div>

                                    <Col>
                                        <ApplicationItem href={"#"} applicationId={2} style={undefined} className={""} title={"Можно мне стул?"} body={"Прошу предоставить стул"} date={"19 марта 2024 00:09"} status={ApplicationStatus.declaimed}/>
                                        <ApplicationItem href={"#"} applicationId={2} style={undefined} className={""} title={"Можно мне стул 2?"} body={"Пожалуйста, дайте стул :("} date={"19 марта 2024 00:09"} status={ApplicationStatus.ready}/>
                                        <ApplicationItem href={"#"} applicationId={2} style={undefined} className={""} title={"Можно мне стул 3?"} body={"Без него очень неудобно"} date={"19 марта 2024 00:09"} status={ApplicationStatus.active}/>

                                        <Button variant={"link"} className={"text-decoration-none text-dark fw-bold"}>Показать больше</Button>
                                    </Col>

                                </CardBody>
                            </Card>


                            <Card id={"comments-card"} className={"text-right p-2"}>
                                <CardBody>
                                    <div>
                                        <h5 className={"text-start"}>Комментарии</h5>
                                    </div>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea" rows={3} placeholder={"Оставьте комментарий"}/>
                                        </Form.Group>
                                    </Form>
                                    <div className={"d-flex justify-content-end"}>
                                        <Button variant={"dark"} className={"ms-auto rounded"}>Отправить</Button>
                                    </div>

                                    <Col>
                                        <CommentItem />
                                        <CommentItem />
                                        <CommentItem />
                                        <Button variant={"link"} className={"text-decoration-none text-dark fw-bold"}>Показать больше</Button>
                                    </Col>

                                </CardBody>
                            </Card>


                            <Card id={"history-card"} className={"text-right p-2 my-4"}>
                                <CardBody>
                                    <div>
                                        <h5 className={"text-start"}>История сотрудника в компании</h5>
                                    </div>
                                    {/*<Form>*/}
                                    {/*    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">*/}
                                    {/*        <Form.Control as="textarea" rows={3} placeholder={"Оставьте комментарий"}/>*/}
                                    {/*    </Form.Group>*/}
                                    {/*</Form>*/}
                                    {/*<div className={"d-flex justify-content-end"}>*/}
                                    {/*    <Button variant={"dark"} className={"ms-auto rounded"}>Отправить</Button>*/}
                                    {/*</div>*/}

                                    <div className={"my-4 text-start"}>
                                        {/*<Row>*/}
                                        {/*    <div className="col-auto text-center flex-column d-none d-lg-flex">*/}
                                        {/*        <Row className="h-50">*/}
                                        {/*            <div className="col">&nbsp;</div>*/}
                                        {/*            <div className="col">&nbsp;</div>*/}
                                        {/*        </Row>*/}
                                        {/*        <h5 className="m-2">*/}
                                        {/*            <PencilSquare className={"text-success"} width={32} size={24}/>*/}
                                        {/*        </h5>*/}
                                        {/*        <div className="row h-50">*/}
                                        {/*            <div className="col border-end">&nbsp;</div>*/}
                                        {/*            <div className="col">&nbsp;</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col py-2">*/}
                                        {/*        <Card>*/}
                                        {/*            <CardBody>*/}
                                        {/*                <CardTitle className={""}><h4>Заполнение</h4></CardTitle>*/}
                                        {/*            </CardBody>*/}
                                        {/*        </Card>*/}
                                        {/*    </div>*/}
                                        {/*</Row>*/}
                                        {/*<Row>*/}
                                        {/*    <div className="col-auto text-center flex-column d-none d-lg-flex">*/}
                                        {/*        <div className="row h-50">*/}
                                        {/*            <div className="col border-end">&nbsp;</div>*/}
                                        {/*            <div className="col">&nbsp;</div>*/}
                                        {/*        </div>*/}
                                        {/*        <h5 className="m-2">*/}
                                        {/*            /!*<ExclamationTriangleFill className={"text-danger"}/>*!/*/}
                                        {/*            <CheckLg className={"text-success"} size={32}/>*/}
                                        {/*        </h5>*/}
                                        {/*        <div className="row h-50">*/}
                                        {/*            <div className="col border-end">&nbsp;</div>*/}
                                        {/*            <div className="col">&nbsp;</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col py-2">*/}
                                        {/*        <Card>*/}
                                        {/*            <CardBody>*/}
                                        {/*                <CardTitle className={""}><h4>Проверки</h4></CardTitle>*/}
                                        {/*                <CardText>Некоторые проверки не пройдены</CardText>*/}
                                        {/*            </CardBody>*/}
                                        {/*        </Card>*/}
                                        {/*    </div>*/}
                                        {/*</Row>*/}
                                        {/*<Row>*/}
                                        {/*    <div className="col-auto text-center flex-column d-none d-lg-flex">*/}
                                        {/*        <div className="row h-50">*/}
                                        {/*            <div className="col border-end">&nbsp;</div>*/}
                                        {/*            <div className="col">&nbsp;</div>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="m-2">*/}
                                        {/*            <Spinner animation={"border"}/>*/}
                                        {/*        </h6>*/}
                                        {/*        <div className="row h-50">*/}
                                        {/*            <div className="col border-end">&nbsp;</div>*/}
                                        {/*            <div className="col">&nbsp;</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col py-2">*/}
                                        {/*        <Card>*/}
                                        {/*            <CardBody>*/}
                                        {/*                <CardTitle className={""}><h4>Андерайтинг</h4></CardTitle>*/}
                                        {/*                <CardText>Ожидание решения</CardText>*/}
                                        {/*            </CardBody>*/}
                                        {/*        </Card>*/}
                                        {/*    </div>*/}
                                        {/*</Row>*/}
                                        {/*<Row>*/}
                                        {/*    <div className="col-auto text-center flex-column d-none d-lg-flex">*/}
                                        {/*        <div className="row h-50">*/}
                                        {/*            <div className="col border-end">&nbsp;</div>*/}
                                        {/*            <div className="col">&nbsp;</div>*/}
                                        {/*        </div>*/}
                                        {/*        <h4 className="m-2 text-muted">*/}
                                        {/*            <FileEarmarkText width={32} size={24}/>*/}
                                        {/*        </h4>*/}
                                        {/*        <div className="row h-50">*/}
                                        {/*            <div className="col border-end">&nbsp;</div>*/}
                                        {/*            <div className="col">&nbsp;</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col py-2">*/}
                                        {/*        <Card>*/}
                                        {/*            <CardBody>*/}
                                        {/*                <CardTitle className={"text-muted"}><h4>Договор</h4></CardTitle>*/}
                                        {/*            </CardBody>*/}
                                        {/*        </Card>*/}
                                        {/*    </div>*/}
                                        {/*</Row>*/}
                                        {/*<Row>*/}
                                        {/*    <div className="col-auto text-center flex-column d-none d-lg-flex">*/}
                                        {/*        <div className="row h-50">*/}
                                        {/*            <div className="col border-end">&nbsp;</div>*/}
                                        {/*            <div className="col">&nbsp;</div>*/}
                                        {/*        </div>*/}
                                        {/*        <h4 className="m-2 text-muted">*/}
                                        {/*            <CashCoin width={32} size={24}/>*/}
                                        {/*        </h4>*/}
                                        {/*        <Row className="h-50">*/}
                                        {/*            <div className="col">&nbsp;</div>*/}
                                        {/*            <div className="col">&nbsp;</div>*/}
                                        {/*        </Row>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col py-2">*/}
                                        {/*        <Card>*/}
                                        {/*            <CardBody>*/}
                                        {/*                <CardTitle className={"text-muted"}><h4>Перечисление денежных*/}
                                        {/*                    средств</h4></CardTitle>*/}
                                        {/*            </CardBody>*/}
                                        {/*        </Card>*/}
                                        {/*    </div>*/}
                                        {/*</Row>*/}
                                        
                                        <HistoryItem icon={<PersonX size={24} width={32}/>} title={"Уволен"} value={"Приказом №123. Причина: съел обед директора"} userName={"Эйчар Менеджер"} isFirst={true} isLast={false}/>
                                        <HistoryItem icon={<PersonUp size={24} width={32}/>} title={"Повышение"} value={"Повышен до старшего Backend-разработчика"} userName={"Эйчар Менеджер"} isFirst={false} isLast={false}/>
                                        <HistoryItem icon={<PersonAdd size={24} width={32}/>} title={"Принят на работу"} value={"Принят на работу приказом №123 на должность младшего Backend-разработчика"} userName={"Эйчар Менеджер"} isFirst={false} isLast={true}/>
                                    </div>

                                </CardBody>
                            </Card>

                        </Col>
                    </Row>
                </div>


            </div>
        </>
    )
}