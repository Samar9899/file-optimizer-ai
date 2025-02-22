const fileInput = document.getElementById('file-input');
const optimizeBtn = document.getElementById('optimize-btn');
const resultBox = document.getElementById('result-box');

optimizeBtn.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (!file) {
        resultBox.innerHTML = "Please select a file first!";
        return;
    }

    // Simulated optimization process
    resultBox.innerHTML = "File is being optimized...";
    
    setTimeout(() => {
        const fileName = file.name;
        const fileSize = file.size / 1024; // Size in KB
        const optimizedSize = (fileSize * 0.7).toFixed(2); // 30% reduced size (simulation)

        resultBox.innerHTML = `
            <p><strong>File Name:</strong> ${fileName}</p>
            <p><strong>Original Size:</strong> ${fileSize.toFixed(2)} KB</p>
            <p><strong>Optimized Size:</strong> ${optimizedSize} KB</p>
            <p>Optimization successful! Size reduced by 30%.</p>
        `;
    }, 2000); // 2-second delay for simulation
});
