import React, { useEffect, useRef } from "react";

const App = () => {
  const elementRef = useRef();

  useEffect(_ => {
    let cleanup;
    // lazy load the module that loads the JSAPI
    // and initialize it
    import("./esri/map").then(
      app => cleanup = app.initialize(elementRef.current)
    );
    return () => cleanup && cleanup();
  }, []);

  // assign elementRef to the ref of our component
  return (
    <>
      <div className="viewDiv" ref={elementRef}></div>
    </>
  );
};

export default App;
