//your JS code here. If required.
// Get references to the elements by their IDs
const statusParagraph = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

// Add a click event listener to the button
enterButton.addEventListener("click", function() {
    // Create a new h1 element
    const newHeading = document.createElement("h1");
    
    // Copy the text and attributes from the p tag to the new h1 tag
    newHeading.innerText="Entered Metaverse";
	
    
    // Replace the p tag with the new h1 tag
    statusParagraph.parentNode.replaceChild(newHeading, statusParagraph);
});
