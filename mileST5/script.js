// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resumeDisplay');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
var profilePicInput = document.getElementById('profilePicture');
var profilePicDisplay = document.getElementById('profilePicDisplay');
// Handle profile picture upload
profilePicInput.addEventListener('change', function (event) {
    var _a;
    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePicDisplay.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            profilePicDisplay.style.display = 'block'; // Show the image once uploaded
        };
        reader.readAsDataURL(file); // Read the image as Data URL
    }
});
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var name = "".concat(firstName, " ").concat(lastName);
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;
    var education = document.getElementById('education').value;
    var degree = document.getElementById('degree').value;
    var companyName = document.getElementById('companyName').value;
    var position = document.getElementById('position').value;
    var description = document.getElementById('description').value;
    var skills = document.getElementById('skills').value;
    var aboutYourself = document.getElementById('aboutyourself').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        city: city,
        country: country,
        education: education,
        degree: degree,
        companyName: companyName,
        position: position,
        description: description,
        skills: skills,
        aboutYourself: aboutYourself
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Generate the resume content dynamically
    var resumeHTML = "\n        <h2>Editable Resume</h2>\n        <img id=\"profilePicDisplay\" src=\"".concat(profilePicDisplay.src, "\" style=\"width: 150px; height: 150px; border-radius: 50%; margin-bottom: 20px;\">\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> <span contenteditable=\"true\">").concat(name, "</span></p>\n        <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <p><b>Address:</b> <span contenteditable=\"true\">").concat(address, "</span></p>\n        <p><b>City:</b> <span contenteditable=\"true\">").concat(city, "</span></p>\n        <p><b>Country:</b> <span contenteditable=\"true\">").concat(country, "</span></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(degree, " - ").concat(education, "</p>\n        <h3>Work Experience</h3>\n        <p><b>Company:</b> <span contenteditable=\"true\">").concat(companyName, "</span></p>\n        <p><b>Position:</b>  <span contenteditable=\"true\">").concat(position, "</span></p>\n        <p contenteditable=\"true\">").concat(description, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n        <h3>About Yourself</h3>\n        <p contenteditable=\"true\">").concat(aboutYourself, "</p>\n    ");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // Open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('firstName').value = resumeData.name.split(' ')[0];
            document.getElementById('lastName').value = resumeData.name.split(' ')[1];
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('address').value = resumeData.address;
            document.getElementById('city').value = resumeData.city;
            document.getElementById('country').value = resumeData.country;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('degree').value = resumeData.degree;
            document.getElementById('companyName').value = resumeData.companyName;
            document.getElementById('position').value = resumeData.position;
            document.getElementById('description').value = resumeData.description;
            document.getElementById('skills').value = resumeData.skills;
            document.getElementById('aboutyourself').value = resumeData.aboutYourself;
        }
    }
});
