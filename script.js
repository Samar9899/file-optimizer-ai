const fileInput = document.getElementById('file-input');
const optimizeBtn = document.getElementById('optimize-btn');
const resultBox = document.getElementById('result-box');
const downloadBtn = document.getElementById('download-btn');

optimizeBtn.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (!file) {
        resultBox.innerHTML = "Please select a file first!";
        downloadBtn.style.display = 'none'; // Hide button if no file
        return;
    }

    // Simulated optimization process
    resultBox.innerHTML = "Optimizing file...";
    downloadBtn.style.display = 'none'; // Hide button during optimization

    setTimeout(() => {
        const fileName = file.name;
        const fileSize = file.size / 1024; // Size in KB
        const optimizedSize = (fileSize * 0.7).toFixed(2); // 30% reduction (simulation)

        resultBox.innerHTML = `
            <p><strong>File Name:</strong> ${fileName}</p>
            <p><strong>Original Size:</strong> ${fileSize.toFixed(2)} KB</p>
            <p><strong>Optimized Size:</strong> ${optimizedSize} KB</p>
            <p>Optimization successful! Size reduced by 30%.</p>
        `;
        downloadBtn.style.display = 'block'; // Show download button
    }, 2000); // 2-second delay for simulation
});

downloadBtn.addEventListener('click', () => {
    // Simulate downloading the optimized file
    alert("Downloading your optimized file: " + fileInput.files[0].name);
    // In a real scenario, this would trigger an actual file download
});
