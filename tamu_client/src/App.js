
import './App.css';
import logo from './images/logo.png';
import {Container, Navbar ,Nav, NavDropdown, Card, Row, Col, NavLink} from "react-bootstrap";
import Home from './components/home';
import Login from './components/login';
import Footer from './components/footer';
import {Route, Link, BrowserRouter} from 'react-router-dom'




function App() {
  return (
    <div className="App">
      
      <BrowserRouter>


      <Navbar collapseOnSelect expand = "lg"  >

        <Container>
          <Navbar.Brand href= "/"><img id = "logo" src={logo} />Tamu</Navbar.Brand>
          <Navbar.Toggle aria-controls ="responsive-navbar-nav"/>
          <Navbar.Collapse id ="responsive-navbar-nav">

            <Nav className = "me-auto">
              <NavDropdown title ="Meals" id ="collapsible-nav-dropdown ">
                <NavDropdown.Item href ="#"> Breakfast</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Lunch</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Dinner</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Snack</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Appetizer</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Soup</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Salad</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Dessert</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Grain</NavDropdown.Item>
                


              </NavDropdown>

              <NavDropdown title ="Diets" id ="collapsible-nav-dropdown ">
                <NavDropdown.Item href ="#"> Low fat</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Sugar Free</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Vegan</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Dairy Free</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Organic</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Low Carbohydrates</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Gluten Free</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Paleo</NavDropdown.Item>
               
                


              </NavDropdown>

              <NavDropdown title ="Cuisines" id ="collapsible-nav-dropdown ">
                <NavDropdown.Item href ="#"> African</NavDropdown.Item>
                <NavDropdown.Item href ="#"> American</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Chinese</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Italian</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Indian</NavDropdown.Item>
                <NavDropdown.Item href ="#"> French</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Japanese</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Asian</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Mediterranean</NavDropdown.Item>
                


              </NavDropdown>

              <NavDropdown title ="Recipe For" id ="collapsible-nav-dropdown ">
                <NavDropdown.Item href ="#"> Chicken</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Beef</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Fish</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Cake</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Mushroom</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Soup</NavDropdown.Item>
                <NavDropdown.Item href ="#"> Salad</NavDropdown.Item>              
                


              </NavDropdown>
              
              

            </Nav>
            {/* <Nav.Brand>login</Nav.Brand> */}
            <NavLink href ="/login" exact> login</NavLink>
          </Navbar.Collapse>


        </Container>
      </Navbar>

      <Container>
      
      <Route exact path="/" component ={Home}/>
      <Route exact path="/login" component ={Login}/>  
           
        
        
       
       
      </Container>

      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
