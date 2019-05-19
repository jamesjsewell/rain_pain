import React from "react";
import { Button } from "reactstrap";
import { FloodBackground } from "../floodBackground/floodBackground";
import { FaChevronDown } from "react-icons/fa";
import "./home.css";

// ES6 Imports
import * as Scroll from "react-scroll";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

export class Home extends React.Component {

    constructor(props) {
        super( props );
        this.state = {
            hideTopButton:  false,
        };
    }

    componentDidMount() {

        Events.scrollEvent.register( "begin", ( to, element ) => {
            console.log( "begin", to );
        } );

        Events.scrollEvent.register( "end", ( to, element ) => {
            this.setState( { hideTopButton: to === undefined } );

        } );

        scrollSpy.update();

    }

    componentWillUnmount() {
        Events.scrollEvent.remove( "begin" );
        Events.scrollEvent.remove( "end" );
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    scrollToBottom() {
        scroll.scrollToBottom();
    }

    scrollTo() {
        scroll.scrollTo( 100 );
    }

    scrollMore() {
        scroll.scrollMore( 100 );
    }

    handleSetActive = ( to ) => {
        console.log( to );
    }
    render() {
        return (
            <div className="wrapper">
                <div>
                    <div className="title-wrapper">
                        <Link to="aboutSection" spy={true} smooth={true} duration={500}>
                            <FaChevronDown className="down-button" />
                        </Link>
                        <div className="title-contents">
                            <h2>RAIN PAIN</h2>
                            <span className="raindrop-logo"></span>
                        </div>
                        <FloodBackground />
                    </div>
                </div>

                 <Element name="aboutSection">
                    <div className="about-section">
                        {!this.state.hideTopButton ? <a onClick={this.scrollToTop}>To the top!</a> : null}
                    </div>
                </Element>

                <br />
                <a onClick={this.scrollToBottom}>To the bottom!</a>
                <br />
                <a onClick={this.scrollTo}>Scroll to 100px from the top</a>

            </div>
        );
    }
}

{/* <Element name="secondInsideContainer">
            second element inside container
          </Element>

<Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>
Test 6 (anchor)
</Link> */}

{/* <div>
        <div className="title-wrapper">
            <Button><FaChevronDown className="down-button" /></Button>
            <div className="title-contents">
                <h2>RAIN PAIN</h2>
                <span className="raindrop-logo"></span>
            </div>
            <FloodBackground />
        </div>
     </div>*/}

