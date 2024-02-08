// Function to handle expelling staff and display message
function expelStaff() {
    // Here you can write code to handle staff expulsion, such as sending a request to your server
    console.log("Staff expelled!");
    // Add your logic here to remove staff

    // Display the message
    document.getElementById('expelMessage').style.display = 'block';
}

// Function to navigate to different sections
function navigate(section) {
    console.log(`Navigating to ${section}`);
    // You can implement navigation logic here
}

// Function to open the hire staff page
function openHirePage() {
    window.location.href = "HIRESTAFF.HTM"; // Change to the URL of your hire staff page
}

// Function to open the expel staff page
function openExpelPage() {
    console.log("Already on the expel staff page.");
}
