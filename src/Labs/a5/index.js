import EncodingParametersInURLs from "./EncodingParametersInURLs";
import IntegratingReactWithAPIs from "./IntegratingReactWithAPIs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";
import httpClient from './httpClientConfig.js';

function Assignment5() {
    const baseURL = httpClient.defaults.baseURL;
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href= {`${baseURL}/a5/welcome`}
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