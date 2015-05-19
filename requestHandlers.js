function start(){
  console.log("Request Handler 'start' was called");
  return "Hello Start";
}

function upload(){
  console.log("Request handler 'upload' was called.");
  return "Hello upload";
}

exports.start = start;
exports.upload = upload;

