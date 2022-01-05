import React from "react";
import Preloader from "../react kabzda/Components/Common/Preloader/Preloader";




export const withSuspenseHOC = (Component) => {
    return (...props) => {
        return <React.Suspense fallback={<Preloader />}> <Component {...props} /></React.Suspense>
    };
}