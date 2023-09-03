import axios from "axios";
import React from "react";
import { Card, CardBody,CardTitle,CardText,Button,Container} from 'reactstrap';
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Course=({course})=>{
 

  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/delete/${id}`).then(
      (response)=>{
        console.log(response);
        console.log("Course deleted Successfully");
        toast.success("Course deleted Successfully",{position:"top-center"});
        window.location.reload();

      },(error)=>{
        console.log(error);
        console.log("Error ..! Something went wrong");
        toast.success("Error ..! Something went wrong",{position:"top-center"});
      }
    )
  }
    return(<>
  <Card className="text-center mb-3" style={{height:"180px"}} >
    <CardBody>
    <CardTitle tag="h6">
      {course.id}  {course.title}
    </CardTitle>
    <CardText>
    {course.description}
    </CardText>
    <Container>
    <Button color="danger" onClick={()=>{
      deleteCourse(course.id)
    }}>Delete</Button>
    <Link tag="a" to={`/update-course/${course.id}`}>
    <Button color="warning ms-3" >Update</Button>
    </Link>
    </Container> 
    </CardBody>
  </Card> 
    </>)
}

export default Course;