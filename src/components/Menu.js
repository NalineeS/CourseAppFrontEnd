import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const Menu = ()=>{
    return(
        <>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/">Home</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/add-course">Add Course</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses">View Course</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/aboutus">About Us</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/contact">Contact Us</Link>
            </ListGroup>
        </>

    )
}

export default Menu;