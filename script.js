        // Function to convert string to hexadecimal
        function convertToHex() {
            const inputString = document.getElementById('inputString').value;
            let hexResult = '';
            for (let i = 0; i < inputString.length; i++) {
                // Convert each character to its hexadecimal code
                hexResult += inputString.charCodeAt(i).toString(16).padStart(2, '0');
            }
            // Display the result
            document.getElementById('result').innerText = `Hexadecimal: ${hexResult}`;
        }