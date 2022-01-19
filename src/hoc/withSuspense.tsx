import React from "react";
import Preloader from "../react kabzda/Components/Common/Preloader/Preloader";




export function withSuspenseHOC<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return <React.Suspense fallback={<Preloader />}> <WrappedComponent {...props} /></React.Suspense>
    };
}
//WCP просто название WrappedComponentProps, так же убрали стрелочную функцию ибо он не знал как её типизировать, использовали обычную функцию. 
