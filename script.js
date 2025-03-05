document.getElementById("check-btn").addEventListener("click", function () {
    const userInput = document.getElementById("user-input").value;
    const resultsDiv = document.getElementById("results-div");
  
    if (userInput === '') {
        alert('Please provide a phone number');
        return;
      }

    if (isValidUSPhoneNumber(userInput)) {
      resultsDiv.textContent = `Valid US number: ${userInput}`;
    } else {
      resultsDiv.textContent = `Invalid US number: ${userInput}`;
    }
  });
  
  function isValidUSPhoneNumber(number) {
    number = number.trim();
  
    const usPhoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  
    if ((number.includes("(") && !number.includes(")")) || (number.includes(")") && !number.includes("("))) {
      return false;
    }
  
    return usPhoneRegex.test(number);
  }
  
  document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('results-div').textContent = '';
  });
  