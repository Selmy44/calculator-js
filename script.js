const checkPalindrome = () => {
    const inputElement = document.getElementById('text-input');
    const resultElement = document.getElementById('result');
    const text = inputElement.value.trim();

    if (!text) {
        alert('Please input a value');
        return;
    }

    const processedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = processedText.split('').reverse().join('');

    if (processedText === reversedText) {
        resultElement.textContent = `${text} is a palindrome`;
    } else {
        resultElement.textContent = `${text} is not a palindrome`;
    }
};

document.getElementById('check-btn').addEventListener('click', checkPalindrome);
