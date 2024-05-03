import {Badge, Card, CardBody, CardTitle, Col, Image} from "react-bootstrap";
import React from "react";

import style from "./person-card-item.module.css"

type CardProps = {
    imageSrc : string,
    name : string,
    role : string | undefined
    skills : string[]
}

export const PersonCardItem = ({imageSrc, name, role, skills} : CardProps) => {
    return(
        <Col>
            <a href="/employee/5" className={"text-decoration-none"}>
                <Card bg={"light"}>
                    <CardBody>
                        <div>
                            <Image
                                roundedCircle
                                height={128}
                                width={128}
                                src={imageSrc}
                                className={`border border-light`}
                                style={{objectFit: 'cover'}}
                            />
                        </div>
                        <CardTitle>{name}</CardTitle>
                        <CardTitle className={"text-muted"}>{role}</CardTitle>
                        <hr/>
                        {
                            skills.map((value, index) => <Badge key={`skill-${index}-${value}`} className={"mx-1"}
                                                                bg={"dark"}>{value}</Badge>)
                        }
                    </CardBody>
                </Card>
            </a>
        </Col>
    )
}