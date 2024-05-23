document.addEventListener("DOMContentLoaded", function() {
    // Display the message box
    const messageBox = document.getElementById("message-box");
    messageBox.classList.remove("hidden");

    // Add event listener to the back button
    const backButton = document.getElementById("back-button");
    backButton.addEventListener("click", function() {
        window.location.href = "index.html"; // เปลี่ยน URL ไปยังหน้าหลัก
    });

    // Add event listener to the vote button
    const voteButton = document.getElementById("vote-button");
    voteButton.addEventListener("click", function() {
        window.location.href = "sumvote.html"; // เปลี่ยน URL ไปยังหน้าสรุปผลโหวต
    });
});
