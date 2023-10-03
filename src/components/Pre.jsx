import React from "react";
function Pre(props) {
  // eslint-disable-next-line react/prop-types
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
