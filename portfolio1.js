<script>
document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.getElementById('downloadButton');
    var downloadMessage = document.getElementById('downloadMessage');
    
    if(downloadButton && downloadMessage) {
        downloadButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action of following the href link

            // Show the downloading message
            downloadMessage.style.display = 'block';

            // Simulate a delay (you can remove this if your file downloads quickly)
            setTimeout(function() {
                // Replace the file path with the actual URL of your resume file
                window.location.href = 'C:/Users/Admin/Documents/Aditya/HTML-CSS-CODES/Projects/Latest1 2024 Resume.pdf';
                
                // Hide the downloading message after a short delay (you can adjust the delay as needed)
                setTimeout(function() {
                    downloadMessage.style.display = 'none';
                }, 3000); // 3000 milliseconds = 3 seconds
            }, 1000); // 1000 milliseconds = 1 second (simulated delay)
        });
    } else {
        console.error('Download button or message element not found!');
    }
});
</script>
