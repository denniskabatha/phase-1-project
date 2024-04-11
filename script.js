const breedForm = document.getElementById('breedForm');
        const imageContainer = document.getElementById('image-container');

        breedForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const breedInput = document.getElementById('breed').value.trim();
            if (!breedInput) {
                alert('Please enter a breed name.');
                return;
            }

            const breed = breedInput.toLowerCase();
            const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
            const data = await response.json();

            if (data.status === "success") {
                const imageUrl = data.message;
                displayImage(imageUrl);
            } else {
                alert('Breed not found. Please enter a valid dog breed.');
            }
        });

        function displayImage(url) {
            const imageElement = document.createElement('img');
            imageElement.src = url;
            imageElement.alt = 'Random Dog Image';
            imageContainer.innerHTML = '';
            imageContainer.appendChild(imageElement);
        }

        