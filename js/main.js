document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.querySelector('.hidden.md\\:flex');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            mobileMenu.classList.toggle('flex-col');
            mobileMenu.classList.toggle('absolute');
            mobileMenu.classList.toggle('top-16');
            mobileMenu.classList.toggle('left-0');
            mobileMenu.classList.toggle('right-0');
            mobileMenu.classList.toggle('bg-white');
            mobileMenu.classList.toggle('shadow-md');
            mobileMenu.classList.toggle('p-4');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && !mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            }
        }
    });
}); 