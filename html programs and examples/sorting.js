

    
        function insertionSort(numbers) {
            for (let i = 1; i < numbers.length; i++) {
                let j = i - 1;
                let ele = numbers[i];
                while (j >= 0 && numbers[j] > ele) {
                    numbers[j + 1] = numbers[j];
                    j--;
                }
                numbers[j + 1] = ele;
            }
        }

        function sortNumbers() {
            const inputString = document.getElementById('idNumbers').value.trim();
            const stringArray = inputString.split(/\s+/); // Splits on any whitespace
            const numbers = [];

            for (let i = 0; i < stringArray.length; i++) {
                const num = parseInt(stringArray[i]);
                if (!isNaN(num)) {
                    numbers.push(num);
                }
            }

            insertionSort(numbers); // Sorts the numbers array in-place
            const outputStr = numbers.join(' ');
            document.getElementById('idSortedNumbers').innerText = outputStr;
        }

        // Optional: Alternative sort using comma-separated input
        function sortNumbers2() {
            const inputString = document.getElementById('idNumbers').value.trim();
            const numbers = inputString.split(',').map(num => parseInt(num)).filter(num => !isNaN(num));
            insertionSort(numbers);
            const outputStr = numbers.join(', ');
            document.getElementById('idSortedNumbers').innerText = outputStr;
        }
