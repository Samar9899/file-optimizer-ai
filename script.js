const fileInput = document.getElementById('file-input');
const optimizeBtn = document.getElementById('optimize-btn');
const resultBox = document.getElementById('result-box');

optimizeBtn.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (!file) {
        resultBox.innerHTML = "कृपया पहले एक फाइल चुनें!";
        return;
    }

    // सिम्युलेटेड ऑप्टिमाइजेशन प्रक्रिया
    resultBox.innerHTML = "फाइल ऑप्टिमाइज़ हो रही है...";
    
    setTimeout(() => {
        const fileName = file.name;
        const fileSize = file.size / 1024; // KB में साइज़
        const optimizedSize = (fileSize * 0.7).toFixed(2); // 30% कम साइज़ (सिम्युलेशन)

        resultBox.innerHTML = `
            <p><strong>फाइल का नाम:</strong> ${fileName}</p>
            <p><strong>मूल साइज़:</strong> ${fileSize.toFixed(2)} KB</p>
            <p><strong>ऑप्टिमाइज़्ड साइज़:</strong> ${optimizedSize} KB</p>
            <p>ऑप्टिमाइज़ेशन सफल! 30% साइज़ कम किया गया।</p>
        `;
    }, 2000); // 2 सेकंड की देरी सिम्युलेशन के लिए
});