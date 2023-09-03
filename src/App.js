import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import { Container,Row, Col } from 'reactstrap';
import Home from './components/Home';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import UpdateCourse from './components/UpdateCourse';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
function App() {
  // const notify = () => toast("Wow so easy!");
     return (<>
     <div>
     <Router>
      <Container>
      <Header/>
        <Row>
          <Col md={4}>
           <Menu/>
          </Col>
          <Col md={8}>
          <Routes>
      <Route path="/" element={<Home />} exact/>
      <Route path="/add-course" element={<AddCourse />} exact/>
      <Route path="/view-courses" element={<Allcourses />} exact/>
      <Route path="/update-course/:id" element={<UpdateCourse />} exact /> 
      <Route path="/contact" element={<Contact />} exact /> 
      <Route path="/aboutus" element={<Aboutus/>} exact />
    </Routes>
          </Col>
        </Row>
      </Container>
      <ToastContainer/>
      </Router>
     </div>   
       </>
  );
}

export default App;
