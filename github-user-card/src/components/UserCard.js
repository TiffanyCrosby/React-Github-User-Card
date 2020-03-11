import React from "react";
import { Card, CardBody } from "reactstrap"


function UserCard(props) {
    console.log(props.login);

    return (
        <div className="userCards">
            <Card key={props.id}>
                <div>
                    <img src={props.img} alt={props.id}></img>
                    <CardBody>
                        <p>{`Login: ${props.login}`}</p>
                        <p>{props.bio ? `Bio: ${props.bio}` : null}</p>
                        <p>{`Public Repos: ${props.repos}`}</p>
                    </CardBody>
                </div>
            </Card>
        </div>
    );
}

export default UserCard;