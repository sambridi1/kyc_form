function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
    var address = document.getElementById('address').value;
    var idNumber = document.getElementById('idNumber').value;

    if (!name || !email || !phone || !dob || !address || !idNumber) {
        alert("Please fill in all fields");
        return false;
    }
    return true;
}
