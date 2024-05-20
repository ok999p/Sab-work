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
            // ถ้าล็อกอินสำเร็จ แสดง SweetAlert2 และเปลี่ยนเส้นทางไปยังหน้า index.html
            Swal.fire({
                title: 'ล็อกอินสำเร็จ',
                text: 'คุณได้เข้าสู่ระบบเรียบร้อยแล้ว',
                icon: 'success',
                confirmButtonText: 'ตกลง'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '../Voteflie/vote.html';
                }
            });
        } else {
            // ถ้าล็อกอินไม่สำเร็จ แสดง SweetAlert2 พร้อมปุ่มกลับไปหน้าหลังและปุ่มล็อกอินใหม่
            Swal.fire({
                title: 'ล็อกอินไม่สำเร็จ',
                text: 'กรุณาตรวจสอบชื่อผู้ใช้และรหัสผ่านอีกครั้ง',
                icon: 'error',
                showCancelButton: true,
                confirmButtonText: 'ล็อกอินใหม่',
                cancelButtonText: 'กลับไปหน้าหลัง'
            }).then((result) => {
                if (result.isConfirmed) {
                    // หากผู้ใช้เลือกล็อกอินใหม่
                    document.getElementById('loginForm').reset();
                } else {
                    // หากผู้ใช้เลือกกลับไปหน้าหลัง
                    window.history.back();
                }
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        Swal.fire({
            title: 'เกิดข้อผิดพลาด',
            text: 'เกิดข้อผิดพลาดขณะทำการล็อกอิน กรุณาลองใหม่อีกครั้ง',
            icon: 'error',
            confirmButtonText: 'ตกลง'
        });
    });
});
