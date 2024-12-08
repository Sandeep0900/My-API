function fetchImage() {
    const imageNumber = document.getElementById('image-number').value;
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    fetch(`/api/image/${imageNumber}`)
        .then((response) => {
            if (!response.ok) throw new Error('Image not found');
            return response.blob();
        })
        .then((imageBlob) => {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(imageBlob);
            imageContainer.appendChild(img);
        })
        .catch((err) => {
            imageContainer.innerHTML = `<p style="color: red;">Error: ${err.message}</p>`;
        });
}
