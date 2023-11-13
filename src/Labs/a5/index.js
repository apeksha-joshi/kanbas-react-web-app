import EncodingParametersInURLs from "./EncodingParametersInURLs";
import IntegratingReactWithAPIs from "./IntegratingReactWithAPIs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href="http://localhost:4000/a5/welcome"
             className="list-group-item">
            Welcome
          </a>
        </div>
        {/* <SimpleAPIExamples /> */}
        <h1>SimpleAPIExamples</h1>
        <EncodingParametersInURLs />
        <WorkingWithObjects />
        <WorkingWithArrays />
        <IntegratingReactWithAPIs />
      </div>
    );
  }
  export default Assignment5;