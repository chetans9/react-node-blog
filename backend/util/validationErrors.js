exports.formErrors = function(errors) {
    const usefulErrors = {};
    errors.map((error) => {
        
      if (!usefulErrors.hasOwnProperty(error.path.join('_'))) {
        usefulErrors[error.path.join('_')] = `${error.message}`;
      }
    });
    return usefulErrors;
  };