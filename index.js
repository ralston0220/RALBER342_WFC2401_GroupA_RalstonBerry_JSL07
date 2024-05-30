document.addEventListener('DOMContentLoaded', function() {
  // Select DOM elements
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  // Add event listener for form submission
  cardForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Retrieve input values
    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage');
    const courseNameInput = document.getElementById('courseName');

    const studentName = studentNameInput.value.trim();
    const personalMessage = personalMessageInput.value.trim();
    const courseName = courseNameInput ? courseNameInput.value.trim() : "a course"; // Default to "a course" if no input

    // Check if required fields are filled
    if (studentName === '' || personalMessage === '') {
      alert('Please fill in all fields');
      return;
    }

    // Generate certificate content dynamically
    certificateContent.innerHTML = `
      <div class="certificate-container">
        <div class="certificate-header">
          <h2>Certificate of Achievement</h2>
          <p>This is to certify that</p>
        </div>
        <div class="certificate-body">
          <h3>${studentName}</h3>
          <p>has almost completed the</p>
          <h4>${courseName}</h4>
          <p>with legendary perseverance and world-class bad-assery for never giving up🏆</p>
        </div>
        <div class="certificate-footer">
          <img src="logo.png" alt="CodeSpace Logo">
          <p>${personalMessage}</p>
        </div>
      </div>
    `;

    // Display the modal
    modal.style.display = 'block';

    // Clear the form inputs
    studentNameInput.value = '';
    personalMessageInput.value = '';
    if (courseNameInput) courseNameInput.value = '';
  });

  // Add event listener for closing the modal
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
});

  
