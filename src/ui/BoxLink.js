import React from "react";
import './css/BoxLink.scss';
export const BoxLink = (props) => (
      <div className="box-1">
        <div className="btn btn-one">
          {props.children}
        </div>
      </div>
    )