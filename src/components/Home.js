import React, { useEffect } from "react";
import { Card, Container, Button} from 'reactstrap';

function Home(){
    useEffect(() => {
        document.title="Home || Learn React JS";
    },[]);
    return(<>
        <div className="text-center">
            <Card className="pt-3 pb-3 bg-light">
            <h2 className="display-6" style={{"color":"purple"}}>Welcome To Online Courses Application</h2>
            <p>This is my first full stack application having front end UI in React JS and <br></br>
            Back end in Spring Boot Application. Database Configured is Mysql Version 8.</p>
            <Container>
                <Button color="warning">Get Started</Button>
            </Container>
            </Card>
        </div>
    </>)
}

export default Home;