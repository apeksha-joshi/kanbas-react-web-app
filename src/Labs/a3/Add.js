import React from "react";
import { useParams } from "react-router-dom";
function Add() {
  const { a, b } = useParams();
  console.log("Inside Add parameter");
  return (
    <> <h2>Add Path Parameters</h2>
      {a} + {b} = {parseInt(a) + parseInt(b)}
    </>
  );
}
export default Add;