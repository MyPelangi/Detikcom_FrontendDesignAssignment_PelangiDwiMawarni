const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Validate email and number
const emailInput = document.getElementById('email');
const nomorTeleponInput = document.getElementById('nomor_telepon');

// Event listeners for input validation
emailInput.addEventListener('input', validateEmail);
nomorTeleponInput.addEventListener('input', validateNumber);

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailPattern.test(emailInput.value.trim());
        emailInput.setCustomValidity(isValid ? '' : 'Email tidak valid');
    }

      function validateNumber() {
        const isValid = /^\d+$/.test(nomorTeleponInput.value.trim());
        nomorTeleponInput.setCustomValidity(isValid ? '' : 'Nomor Telepon hanya boleh berisi angka');
    }

// Display upload image
const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", validateAndUploadImage);

function validateAndUploadImage() {
    const file = inputFile.files[0];
    if (file) {
        const maxSizeInBytes = 200 * 1024; // 200 KB
            if (file.size > maxSizeInBytes) {
                alert("Maksimal ukuran file 200KB");
                inputFile.value = ""; // Clear the file input field
                return;
            }

        let imgLink = URL.createObjectURL(file);
        imageView.style.backgroundImage = `url(${imgLink})`;
        imageView.textContent = "";
        imageView.style.border = "none";
    }
}

dropArea.addEventListener("dragover", function (e) {
    e.preventDefault();
});

dropArea.addEventListener("drop", function (e) {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    validateAndUploadImage();
});

// Upload file tentang perusahaan
const fileInput = document.getElementById('upload');
const uploadLabel = document.getElementById('uploadLabel');

fileInput.addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Check the file format (extension)
        const allowedFormats = ['.pdf'];
        const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
        if (!allowedFormats.includes(fileExtension)) {
            alert('Invalid file format. Please upload a PDF file.');
            fileInput.value = ''; // Clear the file input field
            return;
        }

        // Check the file size (in bytes)
        const maxSizeInBytes = 20 * 1024 * 1024; // 20 MB
        if (file.size > maxSizeInBytes) {
            alert('File size exceeds the limit of 20 MB.');
            fileInput.value = ''; // Clear the file input field
            return;
        }

        uploadLabel.textContent = file.name;

        console.log('File Name:', file.name);
        console.log('File Type:', file.type);
        console.log('File Size:', file.size, 'bytes');
    } else {
        uploadLabel.textContent = 'Profil Perusahaan atau Deck (opsional)';
    }
}

// Validate textarea (max.200 character)
var maxCount = 200;
const counter = document.querySelector('.counter');

const limitedTextarea = document.querySelector('.tentang');

limitedTextarea.addEventListener('keydown', function(e) {
    if (maxCount == 0 && e.key != 'Backspace' || maxCount == 200 && e.key == 'Backspace'){
        e.preventDefault();
        return;
    }
    if (e.key == 'Backspace'){
        maxCount = maxCount + 1;
        counter.innerHTML = maxCount;
    }else{
        maxCount = maxCount - 1;
        counter.innerHTML = maxCount;
    }
});

//Validate URL
const inputElement = document.getElementById('link_web');
    const protocolRegex = /^(https?:\/\/)/i;

    inputElement.addEventListener('input', validateURL);

    function validateURL() {
    const url = inputElement.value.trim();

    if (protocolRegex.test(url)) {
        console.log('URL with protocol:', url);
    } else {
        const validURL = 'https://' + url; // Assume https:// if protocol is missing
        console.log('Assumed URL with protocol:', validURL);
    }
}