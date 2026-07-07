document.getElementById('outpassForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const statusMessage = document.getElementById('statusMessage');
    const statusLight = document.getElementById('statusLight');
    const statusText = document.getElementById('statusText');
    
    // 1. Set state to Pending (Wait for Faculty)
    submitBtn.disabled = true;
    statusMessage.className = 'status-container status-pending';
    statusLight.className = 'light yellow-light';
    statusText.innerText = 'Notification sent to faculty. Waiting for approval...';
    
    // Gather data (This is what you'd send to your real backend)
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Data to send to backend:", data);

    // Save request to local storage so a "Faculty Dashboard" could theoretically read it
    localStorage.setItem('currentOutpassRequest', JSON.stringify(data));
    // Reset any previous approval status
    localStorage.removeItem('facultyApprovalStatus');

    // Automatically open the faculty dashboard in a new tab
    window.open('faculty.html', '_blank');

    // 2. Wait for Faculty Input using Local Storage polling (replaces setTimeout)
    // Open your browser console and type: localStorage.setItem('facultyApprovalStatus', 'approved') or 'denied'
    const checkInterval = setInterval(() => {
        const status = localStorage.getItem('facultyApprovalStatus');
        
        if (status === 'approved') {
            // Green Light
            statusMessage.className = 'status-container status-approved';
            statusLight.className = 'light green-light';
            statusText.innerText = 'Approved! You have the green light to go.';
            submitBtn.disabled = false;
            clearInterval(checkInterval);
        } else if (status === 'denied') {
            // Red Light
            statusMessage.className = 'status-container status-denied';
            statusLight.className = 'light red-light';
            statusText.innerText = 'Denied. You have a red light and cannot leave.';
            submitBtn.disabled = false;
            clearInterval(checkInterval);
        }
    }, 1000); // Check every 1 second
});