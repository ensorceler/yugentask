const lambdaResponse = (statusCode: number, body: Object) => {
  console.log("lambda Response ->", {
    statusCode: statusCode,
    body: JSON.stringify(body),
  });

  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
  };
};

export default lambdaResponse;
