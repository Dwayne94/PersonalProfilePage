document.addEventListener('DOMContentLoaded', function() 
{
    // Get all header elements
    const headers = document.querySelectorAll('h2');

    // Add event listeners for each header
    headers.forEach(header => 
        {
        header.addEventListener('mouseover', function() 
        {
            // Change color to red on hover
            this.style.color = 'red';
        });

        header.addEventListener('mouseout', function() 
        {
            // Revert to original color on mouseout
            this.style.color = 'aliceblue';
        });
    });
});