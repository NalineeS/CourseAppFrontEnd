import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { Col, Row } from "reactstrap";
const Allcourses=()=>{
    useEffect(()=> {
        document.title="All Courses||Learn React";
        getAllCoursesFromServer();
    },[]);
    //function to get courses call server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/getall`).then(
            (response)=>{
                //success
                console.log(response);
                toast.success("Courses are loaded Successfully..",{
                    position:"bottom-center"
                });
                setCourses(response.data);
            },
            (error)=>{
                //if error occure
                console.log(error);
                toast.error("Internal Server Error",{
                    position:"bottom-center"
                });
            }
        );
    };
    
    const[courses, setCourses]=useState({});
   
    return(
        <div className="text-center">
            <h2>All Online Courses</h2>
            <p>List of all courses are as follows</p>
            <Row>
            {
                courses.length>0 
                ?courses.map((c)=><Col md={6}><Course key={c.id} course={c} /></Col>)
                :"No Courses Available"
            }
            </Row>
        </div>
    );
}

export default Allcourses;