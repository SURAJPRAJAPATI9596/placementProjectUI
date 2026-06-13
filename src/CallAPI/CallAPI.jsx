import React, { useState } from "react";

function CallAPI() {
  const [file, setFile] = useState(null);

  function sendData({ file, jobDes }) {
    setFile(file);
    setJobDes(jobDes);
  }

  const [jobDes, setJobDes] = useState(null);
  console.log("Data is fetching from API");
}

export default CallAPI;
