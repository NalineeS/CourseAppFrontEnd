import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCourse =() =>{
    useEffect(()=>{
        document.title="Update Course";
    },[]);
       // using useParams for react-router-dom here putting params in id variable
    const {id} = useParams();
    // Used for navigation with logic in javascript
    let navigate = useNavigate();
    const [course , setCourse ] = useState({});

   // let's load that id regarding user here for show in form field 
   const loadCourseById  = async () =>{
    const result = await  axios.get(`${base_url}/getcourse/${id}`);
    setCourse(result.data);
    console.log(result.data)
  }

// let's useEffect hook here for sending request to backend
useEffect(()=>{
    loadCourseById();
    },[]);

   
      // user will be pass here instead of user 
      const updateDataOnServer = (course) =>{
        // calling axious put method for update here passing params to it as id
        console.log(course);
        axios.put(`${base_url}/update`, course).then(
          (response)=>{
     // success 
     console.log(response.data);
     console.log("data loaded successfully");
     toast.success("Data updated successfully");
    //   getAllUserFromServer(); // Fetch updated data and setting new data to ShowAllPost component
      navigate("/view-courses"); // Navigate back to ShowAllPost component
    
          },
          (error)=>{
     // error message 
     console.log(error)
     console.log("server is down")
          }
         )
      }

      const updatehandel = (event) =>{
        event.preventDefault();
    
        // this user agrument is state varible pass to updateDataOnSarve() function
        updateDataOnServer(course) ;
        console.log(course);
      }
    return(
        <>
        <h1>Update Course</h1>
        <Form onSubmit={updatehandel}>
            <FormGroup>
                <Label htmlFor="courseId">Course Id</Label>
                <Input type="text"
                    placeholder="Enter Course Id here"
                    name="id" id="courseId"
                    value={course.id}
                    onChange={(e)=>{setCourse({...course, id:e.target.value})}}
                    disabled  />
            </FormGroup>
           
            <FormGroup>
            <Label htmlFor="courseTitle">Course Title</Label>
                <Input type="text"
                    placeholder="Enter Course Title here"
                    name="title" id="courseTitle"
                    value={course.title}
                    onChange={(e)=>{setCourse({...course, title:e.target.value})}}
                    required />
            </FormGroup>
            <FormGroup>
            <Label htmlFor="courseDesc">Course Description</Label>
                <Input style={{height:"100"}} type="textarea"
                    placeholder="Enter Course Description here"
                    name="description" id="courseDesc"
                    value={course.description}
                    onChange={(e)=>{setCourse({...course, description:e.target.value})}}
                    required />
            </FormGroup>
            <Container className="text-center">
                <Button type="submit" color="success">Update</Button>
                <Button type="reset" color="secondary ms-3">Cancel</Button>
            </Container>
        </Form>
        </>

    );
}

export default UpdateCourse;