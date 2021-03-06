import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import "./Navbar.css"

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="navbar" dark expand="md">
                    <NavbarBrand href="/">RainPain</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Methodology</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Team</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}