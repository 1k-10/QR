document.getElementById('generate-text-qr').addEventListener('click', function() {
  const text = document.getElementById('text-input').value;
  
  if (text.trim() === "") {
    alert("Please enter some text to generate the QR code!");
    return;
  }

  // Clear previous QR code
  document.getElementById('qr-text-container').innerHTML = "";

  // Generate QR Code for text
  QRCode.toDataURL(text, function (err, url) {
    if (err) {
      console.error(err);
      return;
    }
    // Display the QR Code
    const img = document.createElement('img');
    img.src = url;
    document.getElementById('qr-text-container').appendChild(img);
  });
});

document.getElementById('generate-image-qr').addEventListener('click', function() {
  const imageInput = document.getElementById('image-input');
  const file = imageInput.files[0];

  if (!file) {
    alert("Please upload an image to generate the QR code!");
    return;
  }

  const reader = new FileReader();

  reader.onloadend = function () {
    const imageUrl = reader.result;

    // Clear previous QR code
    document.getElementById('qr-image-container').innerHTML = "";

    // Generate QR Code for image URL
    QRCode.toDataURL(imageUrl, function (err, url) {
      if (err) {
        console.error(err);
        return;
      }
      // Display the QR Code
      const img = document.createElement('img');
      img.src = url;
      document.getElementById('qr-image-container').appendChild(img);
    });
  }

  reader.readAsDataURL(file);
});
