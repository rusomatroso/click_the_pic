import React from "react";
import "./Header.css";

const Header = props => (
    <div className="jumbotron">
        <h3>Know your Countries</h3>
        <h6>  Click on each flag once to earn points, if you repeat you loose! Good Luck! </h6>
        <div class="row">
            <div className={props.message.indexOf('incorrectly') !== -1 ?
                "desc-incorrect col-md-6" :
                props.message.indexOf('correctly') !== -1 ?
                    "desc-correct col-md-6" :
                    "desc-normal col-md-6"}>{props.message}</div>
            <div class="col-md-6">Score: <span style={{color: "yellow"}}>{props.scoreCurrent}</span> | Top Score: {props.scoreTop}</div>
        </div>
    </div>
);

export default Header;

