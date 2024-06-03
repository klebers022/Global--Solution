document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
      const details = this.querySelector('.details');
      details.hidden = !details.hidden;
    });
  });
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
      this.classList.toggle('expanded');
    });
  });