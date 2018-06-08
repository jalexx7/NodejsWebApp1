declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
var { Bootstrap, Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } = require('react-bootstrap');
import './style.css';

class App extends React.Component {
    render() {
        return (
            <Grid fluid={true}>
                <Row className="show-grid">
                    <NavigationBar />
                </Row>
                <Row className="hello">
                    <Col xs={6} md={12}>
                        <Header />
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <Content />
                    </Col>
                    <Col xs={4} md={4}>
                        <Content2 />
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={8} md={6}>
                        <Content3 />
                    </Col>
                </Row>
                <Background />
            </Grid>
        );
    }
}

class Background extends React.Component {
    constructor() {
        // @ts-ignore
        super();
        this.state = {
            pictures: []
        };
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=500')
            .then(results => {
                return results.json();
            }).then(data => {
                let pictures = data.results.map((pic) => {
                    return (
                        <div key={pic.results}>
                            <img src={pic.picture.medium} />
                        </div>
                    )
                })
                this.setState({ pictures: pictures });
                console.log("state", this.state.pictures);
            })
    }

    render() {
        return (
            <div className="container2">
                <div className="container1">
                    {this.state.pictures}
                </div>
            </div>
        )
    }
}

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#brand">React-Bootstrap</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} href="#">
                    Link
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    Link
                  </NavItem>
                  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                  </NavDropdown>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">
                    Link Right
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    Link Right
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="hello">
                <h1 className="hello">Header - Make this much longer so that it goes across the screen and maybe we can use react bootstrap to modify. bloop blop</h1>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>This is the text for the CONTENT component!!! VERY COOL. ALSO MAKE THIS A MUCH LONGER MESSAGE THAT GOES ACROSS THE SCREEN SO THAT WE CAN TEST IT OUT USING REACT BOOTSTRAP IF I CAN FIGURE OUT HOW TO MAKE IT WORK!</h2>
            </div>
        );
    }
}

class Content2 extends React.Component {
    render() {
        return (
            <div>
                <h2>222 This is the text for the CONTENT component!!! VERY COOL. ALSO MAKE THIS A MUCH LONGER MESSAGE THAT GOES ACROSS THE SCREEN SO THAT WE CAN TEST IT OUT USING REACT BOOTSTRAP IF I CAN FIGURE OUT HOW TO MAKE IT WORK!</h2>
            </div>
        );
    }
}

class Content3 extends React.Component {
    render() {
        return (
            <div>
                <h2>333 This is the text for the CONTENT component!!! VERY COOL. ALSO MAKE THIS A MUCH LONGER MESSAGE THAT GOES ACROSS THE SCREEN SO THAT WE CAN TEST IT OUT USING REACT BOOTSTRAP IF I CAN FIGURE OUT HOW TO MAKE IT WORK!</h2>
            </div>
        );
    }
}

class Hello extends React.Component {
    render() {
        return (
            <h1>Welcome to React!!</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));