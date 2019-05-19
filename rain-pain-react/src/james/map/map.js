import React from "react";
import tableau from "tableau-api";
import "./map.css";

export class Map extends React.Component {
  componentDidMount() {
    this.initViz();
  }

  initViz() {
    const vizUrl = "https://public.tableau.com/shared/XNYDSZ85Q?:display_count=yes&:origin=viz_share_link";
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, { width: "90vw", height: "90vh"});
  }

  render() {
      return (
        <div className="map-wrapper">
            <div className="map" ref={(div) => { this.vizContainer = div; }}></div>
        </div>
    );
  }
}
