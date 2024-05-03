import {Col, Image, Row} from "react-bootstrap";
import React from "react";

export const CommentItem = () => {
    return(
        <Row className={"my-3"}>
            <Col sm={1}>
                <Image
                    roundedCircle
                    height={48}
                    width={48}
                    src={"https://images.hdqwalls.com/download/spaceman-4k-h0-3840x2400.jpg"}
                    className={`border border-light`}
                    style={{objectFit: 'cover'}}
                />
            </Col>
            <Col>
                <Row className={"text-start"}>
                    <div className={"mx-0"}>
                        <span className={"fw-bold me-2"}>Эйчар Менеджер</span>
                        <span className={"text-muted"}>18 марта 2023 21:56</span>
                    </div>

                </Row>
                <Row className={"text-start"}>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </div>
                </Row>
            </Col>
        </Row>
    )
}