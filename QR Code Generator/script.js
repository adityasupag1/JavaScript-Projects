const imageBox = document.querySelector('.imageBox');
const inputText = document.querySelector('#inputText');
const generateBtn = document.querySelector('.qrGenerate');

generateBtn.addEventListener('click', function (e) {
  if (inputText.value) {
    inputText.classList.remove('error'); // Remove error if any
    imageBox.innerHTML = ""; // Fix: clear old QR
    const imgElement = document.createElement('img');
    imgElement.classList.add('showQr');
    imgElement.src = "https://qrapi.dev/api/generate?data=" + inputText.value;
    imageBox.appendChild(imgElement);
  }
  
     else {
      imageBox.innerHTML = "";
      inputText.classList.remove('error');        // Remove it
      void inputText.offsetWidth;                // Trigger reflow
      inputText.classList.add('error');          // Add again to retrigger animation
    }

  
});
