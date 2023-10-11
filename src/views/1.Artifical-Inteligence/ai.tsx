import React from "react";

import "./ai.css";
import * as coverImage from "../../images/ai2.jpg";

const ai = ():React.JSX.Element => {

    return(
        <>
            <img className="coverImage" src={coverImage} alt="ai1" />
        </>
    )
}

export default ai;