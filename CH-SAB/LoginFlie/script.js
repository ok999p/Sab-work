// ฟังก์ชันสำหรับการจัดการฟอร์มล็อกอิน
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันฟอร์มจากการส่งแบบปกติ

    // รับค่าจากฟอร์ม
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ส่งข้อมูลฟอร์มไปยังเซิร์ฟเวอร์
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (response.ok) {
            // ถ้าล็อกอินสำเร็จ ให้เปลี่ยนเส้นทางไปยังหน้า index.html
            window.location.href = '../Voteflie/vote.html';
        } else {
            // ถ้าล็อกอินไม่สำเร็จ แสดงข้อความผิดพลาด (คุณสามารถปรับแต่งได้)
            alert('Login failed. Please check your username and password.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
