
const errorLogger = (error : any) => {
  if (error.response) {
    // Server responded with error status code
    console.error('Request error - Response > 200:', error.response.data);
  } else if (error.request) {
    // Never received a response
    console.error('Request error - No server response:');
  } else {
    // Request erred before it was sent
    console.error('Request error:', error.message);
  }

  // Do not attempt to recover from the error.
  return Promise.reject(error);
};

export default errorLogger;
