
function toggleSwitch() {
    const switchImage = document.getElementById('switchImage');
    if (switchImage.src.includes('switch-off.png')) {
        switchImage.src = 'switch-on.png';
    } else {
        switchImage.src = 'switch-off.png';
    }
}









document.addEventListener('DOMContentLoaded', function () {
    const buttons = [
        {
            buttonId: 'imageButton1',
            imageId: 'buttonImage1',
            originalImage: 'image1.png',
            pressedImage: 'image2.png'
        },
        {
            buttonId: 'imageButton2',
            imageId: 'buttonImage2',
            originalImage: 'image3.png',
            pressedImage: 'image4.png'
        },
        {
            buttonId: 'imageButton3',
            imageId: 'buttonImage3',
            originalImage: 'image3.png',
            pressedImage: 'image4.png'
        },
        {
            buttonId: 'imageButton4',
            imageId: 'buttonImage4',
            originalImage: 'image3.png',
            pressedImage: 'image4.png'
        }
    ];

    buttons.forEach(function (button) {
        const btn = document.getElementById(button.buttonId);
        const btnImage = document.getElementById(button.imageId);

        if (btn && btnImage) {
            btn.addEventListener('mousedown', function () {
                btnImage.src = button.pressedImage;
            });

            btn.addEventListener('mouseup', function () {
                btnImage.src = button.originalImage;
            });

            btn.addEventListener('mouseleave', function () {
                btnImage.src = button.originalImage;
            });

            btn.addEventListener('touchstart', function () {
                btnImage.src = button.pressedImage;
            }, { passive: true });

            btn.addEventListener('touchend', function () {
                btnImage.src = button.originalImage;
            }, { passive: true });

            btn.addEventListener('touchcancel', function () {
                btnImage.src = button.originalImage;
            }, { passive: true });
        }
    });
});
