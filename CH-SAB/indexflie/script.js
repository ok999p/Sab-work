document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn').forEach(function(btn) {
        btn.addEventListener('mouseenter', function() {
            this.querySelector('.image').classList.add('hovered');
        });
        btn.addEventListener('mouseleave', function() {
            this.querySelector('.image').classList.remove('hovered');
        });
    });
});
