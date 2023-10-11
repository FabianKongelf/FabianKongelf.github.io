import React from "react";

import "./about.css";
import * as coverImage from "../../images/ai5.jpg";

const about = ():React.JSX.Element => {

    return(
        <>
            <img className="coverImage" src={coverImage} alt="ai5" />
        </>
    )
}

export default about;