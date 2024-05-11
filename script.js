


const container = document.querySelector('.container');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');

container.addEventListener('mouseover', function(event) {
  const target = event.target.closest('.image-container');
  if (!target) return;
  
  const imageURL = target.getAttribute('data-image');
  if (!imageURL) return;

  popupImage.src = imageURL;
  popup.style.display = 'block';
});

container.addEventListener('mouseout', function(event) {
  const relatedTarget = event.relatedTarget;
  if (!relatedTarget || !container.contains(relatedTarget)) {
    popup.style.display = 'none';
  }
});