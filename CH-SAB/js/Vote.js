document.addEventListener('DOMContentLoaded', (event) => {
  const gridItems = document.querySelectorAll('.grid-item');
  const agreeBtn = document.getElementById('agree-btn');
  const abstainBtn = document.getElementById('abstain-btn');
  let selectedGridItem = null;

  gridItems.forEach(item => {
    item.addEventListener('click', () => {
      if (selectedGridItem === item) {
        // ถ้ากดซ้ำที่กล่องเดิม ให้ยกเลิกการเลือก
        selectedGridItem.classList.remove('selected');
        selectedGridItem = null;
        agreeBtn.disabled = true;
        agreeBtn.classList.remove('active');
      } else {
        if (selectedGridItem) {
          // ถ้าเลือกกล่องอื่นอยู่ให้ยกเลิกการเลือกกล่องเดิมก่อน
          selectedGridItem.classList.remove('selected');
        }
        item.classList.add('selected');
        selectedGridItem = item;
        agreeBtn.disabled = false;
        agreeBtn.classList.add('active');
      }
    });
  });

  agreeBtn.addEventListener('click', () => {
    if (selectedGridItem) {
      Swal.fire({
        title: 'ยืนยันการเลือก',
        text: `คุณเห็นด้วยกับ ${selectedGridItem.querySelector('.party-name').textContent}`,
        icon: 'success',
        confirmButtonText: 'ตกลง'
      }).then((result) => {
        // หลังจากกดตกลงแล้ว
        if (result.isConfirmed) {
          // ทำการ redirect ไปยังหน้า index หลัก
          window.location.href = '../indexflie/index.html';
        }
      });
    }
  });

  abstainBtn.addEventListener('click', () => {
    Swal.fire({
      title: 'ยืนยันการงดออกเสียง',
      text: 'คุณงดออกเสียง',
      icon: 'warning',
      confirmButtonText: 'ตกลง'
    }).then((result) => {
      // หลังจากกดตกลงแล้ว
      if (result.isConfirmed) {
        // ทำการ redirect ไปยังหน้า index หลัก
        window.location.href = '../indexflie/index.html';
      }
    });
  });
});
