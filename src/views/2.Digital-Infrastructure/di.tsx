import React from "react";

import "./di.css";
import * as coverImage from "../../images/ai3.jpg";

const di = ():React.JSX.Element => {

    return(
        <>
            <img className="coverImage" src={coverImage} alt="ai1" />
        </>
    )
}

export default di;