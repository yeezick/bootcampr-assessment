export const handleSubmit = async (signupDetails, addUserFunction, onSuccess, onFailure) => {
    try {
      const apiResponse = await addUserFunction(signupDetails);
      if (apiResponse && apiResponse.status === 200) {
        onSuccess(); 
      } else {
        onFailure('Internal server error, please try again later'); 
      }
    } catch (err) {
      console.error(err);
      onFailure(err.message); 
  };
}