import React from "react"
import { Card, CardBody } from "reactstrap";

function Header(){
    return(<>
        <div>
        <Card className="my-1 bg-warning">
        <CardBody>
            <h2 className="text-center display-6 my-1">Welcome To Courses Application</h2>
            </CardBody>
            </Card>
        </div>
    </>)
}

export default Header;