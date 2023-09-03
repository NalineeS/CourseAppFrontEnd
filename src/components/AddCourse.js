import axios from "axios";
import React, { useEffect, useState } from "react"
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add New Course";
    },[]);

    const[course,setCourse]=useState({});

    const handleForm =(e) =>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    };

    //creating fnction to post data to server
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/add`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course Added Successfully..",{
                    position:"bottom-center"
                }); 
            },(error)=>{
                console.log(error);
                console.log("Somthing went rong");
                toast.error("Error..!Something went wrong",{
                    position:"bottom-center"
                })       
            }
        );
    };
    return(
        <>
        <h3>Fill Course Details To Add New Course</h3>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label htmlFor="courseId">Course Id</label>
                <Input type="text"
                    placeholder="Enter Course Id here"
                    name="id" id="courseId"
                    onChange={(e)=>{
                        setCourse({...course, id:e.target.value})
                    }}
                    required />
            </FormGroup>
           
            <FormGroup>
                <label htmlFor="courseTitle">Course Title</label>
                <Input type="text"
                    placeholder="Enter Course Title here"
                    name="title" id="courseTitle"
                    onChange={(e)=>{
                        setCourse({...course, title:e.target.value})
                    }}
                    required />
            </FormGroup>
            <FormGroup>
                <label htmlFor="courseDesc">Course Description</label>
                <Input style={{height:"100"}} type="textarea"
                    placeholder="Enter Course Description here"
                    name="description" id="courseDesc"
                    onChange={(e)=>{
                        setCourse({...course, description:e.target.value})
                    }}
                    required />
            </FormGroup>
            <Container className="text-center">
                <Button type="submit" color="success">Add Course</Button>
                <Button type="reset" color="secondary ms-3">Clear</Button>
            </Container>
        </Form>
        </>
    );
}

export default AddCourse;