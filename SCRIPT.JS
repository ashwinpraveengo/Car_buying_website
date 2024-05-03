document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const modelID = urlParams.get('model');

    const imageSources = {
"p911": ["https://cdn.motor1.com/images/mgl/Vzz1qK/s3/most-expensive-2023-porsche-911-gt3-rs.jpg", "p911_2", "p911_3"],
"p718": ["p718_1.jpg", "p718_2.jpg", "p718_3.jpg"],
"Panamera": ["Panamera_1.jpg", "Panamera_2.jpg", "Panamera_3.jpg"],
"Taycan": ["Taycan_1.jpg", "Taycan_2.jpg", "Taycan_3.jpg"],
"Macan": ["Macan_1.jpg", "Macan_2.jpg", "Macan_3.jpg"],
"Cayenne": ["Cayenne_1.jpg", "Cayenne_2.jpg", "Cayenne_3.jpg"]
};

    if (modelID && modelID in imageSources) {
        const carouselInner = document.querySelector('.carousel-inner');
        if (carouselInner) {
            imageSources[modelID].forEach((imageUrl, index) => {
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if (index === 0) {
                    carouselItem.classList.add('active');
                }
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.classList.add('d-block', 'w-100');
                carouselItem.appendChild(imgElement);
                carouselInner.appendChild(carouselItem);
            });
        }
    }
});
