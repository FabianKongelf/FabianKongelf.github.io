import React from "react";

import "./intro.css";
import * as coverImage from "../../images/ai1.jpg";

const Intro = ():React.JSX.Element => {

    return(
        <>
            <img className="coverImage" src={coverImage} alt="ai1" />
        </>
    )
}

export default Intro;