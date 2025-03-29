
    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

const alphanumericPattern = /^[a-zA-Z0-9]+$/;
document.getElementById("myForm").addEventListener("submit", function(event) {
        
  const inputField = document.getElementById("inputField");
  const inputValue = inputField.value.trim();
        
  if (alphanumericPattern.test(inputValue)) {

    alert("Form submitted successfully!");

  } else {
    alert("Invalid input. Please enter only alphanumeric characters.");
}});
        