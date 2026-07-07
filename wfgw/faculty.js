document.addEventListener('DOMContentLoaded', () => {
    const requestDetails = document.getElementById('requestDetails');
    const noRequests = document.getElementById('noRequests');
    
    // Poll every second to check if a new request has been submitted
    setInterval(() => {
        const currentRequest = localStorage.getItem('currentOutpassRequest');
        const status = localStorage.getItem('facultyApprovalStatus');

        // If there's a request and no decision has been made yet
        if (currentRequest && !status) {
            const data = JSON.parse(currentRequest);
            document.getElementById('reqAddress').innerText = data.address;
            document.getElementById('reqDate').innerText = data.leaveDate;
            document.getElementById('reqOutTime').innerText = data.outTime;
            document.getElementById('reqInTime').innerText = data.inTime;
            document.getElementById('reqDays').innerText = data.days;
            document.getElementById('reqReason').innerText = data.reason;
            
            requestDetails.style.display = 'block';
            noRequests.style.display = 'none';
        } else {
            requestDetails.style.display = 'none';
            noRequests.style.display = 'block';
        }
    }, 1000);

    document.getElementById('approveBtn').addEventListener('click', () => {
        localStorage.setItem('facultyApprovalStatus', 'approved');
    });

    document.getElementById('denyBtn').addEventListener('click', () => {
        localStorage.setItem('facultyApprovalStatus', 'denied');
    });
});