// Base class for coded error messages
class ReasonedError extends Error {
    constructor({ errorCode, message }) {
      super();
      this.errorCode = errorCode;
      this.message = message;
    }
  }
  
  // Base class for HTTP errors
  class ApiError extends ReasonedError {
    constructor({ statusCode, errorCode, message }) {
      super({ errorCode, message });
      // Create the field "statusCode" as a transient property
      Object.defineProperty(this, "statusCode", {
        value: statusCode,
        writable: true,
      });
    }
  }
  
  // Generic HTTP status errors
  
  /**
   * Error class for HTTP 401 status
   */
  class ApiUnauthorizedError extends ApiError {
    constructor({ errorCode, message }) {
      super({
        statusCode: 401,
        errorCode: errorCode || 401,
        message: `User not authorized : ${message}`,
      });
    }
  }
  
  /**
   * Error class for HTTP 403 status
   */
  class ApiForbiddenError extends ApiError {
    constructor({ errorCode, message }) {
      super({
        statusCode: 403,
        errorCode: errorCode || 403,
        message: `User forbidden : ${message}`,
      });
    }
  }
  
  /**
   * Error class for HTTP 404 status
   */
  class ApiNotFoundError extends ApiError {
    constructor({ errorCode, message }) {
      super({
        statusCode: 404,
        errorCode: errorCode || 404,
        message: `Resource not found: ${message}`,
      });
    }
  }
  
  /**
   * Error class for HTTP 500 status
   */
  class ApiServerError extends ApiError {
    constructor({ errorCode, message }) {
      super({
        statusCode: 500,
        errorCode: errorCode || 500,
        message: `Server error: ${message}`,
      });
    }
  }
  

  /**
   * Error if given request path does not exist
   */
  class ApiInvalidPathError extends ApiNotFoundError {
    constructor(path) {
      super({ message: `Invalid path '${path}'` });
    }
  }
  
  export {
    ApiError,
    ApiUnauthorizedError,
    ApiForbiddenError,
    ApiNotFoundError,
    ApiInvalidPathError,
  };
  