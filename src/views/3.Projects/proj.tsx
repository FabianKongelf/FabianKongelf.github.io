import React from "react";

import "./proj.css";
import * as coverImage from "../../images/ai4.jpg";

const proj = ():React.JSX.Element => {

    return(
        <>
            <img className="coverImage" src={coverImage} alt="ai4" />
        </>
    )
}

export default proj;