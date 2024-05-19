document.addEventListener('DOMContentLoaded', () => {
    const faculties = [
        { faculty: "สำนักวิชาครุศาสตร์และศิลปศาสตร์", eligible: 135, voted: 100 },
        { faculty: "สำนักวิชาการจัดการ", eligible: 916, voted: 100 },
        { faculty: "สำนักวิชาการบัญชีและการเงิน", eligible: 598, voted: 100 },
        { faculty: "สำนักวิชานิติศาสตร์", eligible: 571, voted: 100 },
        { faculty: "สำนักวิชารัฐศาสตร์และรัฐประศาสนศาสตร์", eligible: 1004, voted: 100 },
        { faculty: "สำนักวิชาศิลปศาสตร์", eligible: 1026, voted: 100 },
        { faculty: "สำนักวิชาเทคโนโลยีการเกษตรและอุตสาหกรรมอาหาร", eligible: 158, voted: 100 },
        { faculty: "สำนักวิชาวิทยาศาสตร์", eligible: 475, voted: 100 },
        { faculty: "สำนักวิชาวิศวกรรมศาสตร์และเทคโนโลยี", eligible: 1105, voted: 100 },
        { faculty: "สำนักวิชาสถาปัตยกรรมศาสตร์และการออกแบบ", eligible: 337, voted: 100 },
        { faculty: "สำนักวิชาสารสนเทศศาสตร์", eligible: 1153, voted: 100 },
        { faculty: "สำนักวิชาพยาบาลศาสตร์", eligible: 805, voted: 100 },
        { faculty: "สำนักวิชาแพทยศาสตร์", eligible: 578, voted: 100 },
        { faculty: "สำนักวิชาเภสัชศาสตร์", eligible: 698, voted: 100 },
        { faculty: "สำนักวิชาสหเวชศาสตร์", eligible: 1253, voted: 100 },
        { faculty: "สำนักวิชาสาธารณสุขศาสตร์", eligible: 878, voted: 100 },
        { faculty: "วิทยาลัยทันตแพทยศาสตร์นานาชาติ", eligible: 94, voted: 100 },
        { faculty: "วิทยาลัยสัตวแพทยศาสตร์อัครราชกุมารี", eligible: 170, voted: 100 },
        { faculty: "วิทยาลัยนานาชาติ", eligible: 89, voted: 100 },
        { faculty: "นักศึกษาต่างชาติ", eligible: 93, voted: 100 },
    ];

    const gridContainer = document.querySelector("#scoreGrid");
    const totalEligible = faculties.reduce((acc, curr) => acc + curr.eligible, 0);
    const totalVoted = faculties.reduce((acc, curr) => acc + curr.voted, 0);
    const totalPercentage = ((totalVoted / totalEligible) * 100).toFixed(2);

    faculties.forEach(faculty => {
        const percentage = ((faculty.voted / faculty.eligible) * 100).toFixed(2);

        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";

        const facultyInfo = document.createElement("div");
        facultyInfo.className = "faculty-info";

        const facultyName = document.createElement("div");
        facultyName.className = "faculty-name";
        facultyName.textContent = faculty.faculty;
        facultyInfo.appendChild(facultyName);

        const eligibleCount = document.createElement("div");
        eligibleCount.className = "eligible-count";
        eligibleCount.textContent = `จำนวน: ${faculty.eligible}`;
        facultyInfo.appendChild(eligibleCount);

        gridItem.appendChild(facultyInfo);

        const barContainer = document.createElement("div");
        barContainer.className = "bar-container";

        const percentageBar = document.createElement("div");
        percentageBar.className = "percentage-bar";

        const percentageText = document.createElement("div");
        percentageText.className = "percentage-text";
        percentageText.textContent = `${percentage}%`;

        barContainer.appendChild(percentageBar);
        barContainer.appendChild(percentageText);
        gridItem.appendChild(barContainer);

        gridContainer.appendChild(gridItem);

        // Trigger animation
        requestAnimationFrame(() => {
            percentageBar.style.width = `${percentage}%`;
        });
    });

    // เติมข้อมูลในกล่องรวม
    const totalGridItem = document.createElement("div");
    totalGridItem.className = "grid-item";
    const totalFacultyInfo = document.createElement("div");
    totalFacultyInfo.className = "faculty-info";
    const totalFacultyName = document.createElement("div");
    totalFacultyName.className = "faculty-name";
    totalFacultyName.textContent = "รวม";
    const totalEligibleCount = document.createElement("div");
    totalEligibleCount.className = "eligible-count";
    totalEligibleCount.textContent = `จำนวน: ${totalEligible}`;
    totalFacultyInfo.appendChild(totalFacultyName);
    totalFacultyInfo.appendChild(totalEligibleCount);
    totalGridItem.appendChild(totalFacultyInfo);
    const totalBarContainer = document.createElement("div");
    totalBarContainer.className = "bar-container";
    const totalPercentageBar = document.createElement("div");
    totalPercentageBar.className = "percentage-bar";
    const totalPercentageText = document.createElement("div");
    totalPercentageText.className = "percentage-text";
    totalPercentageText.textContent = `${totalPercentage}%`;
    totalBarContainer.appendChild(totalPercentageBar);
    totalBarContainer.appendChild(totalPercentageText);
    totalGridItem.appendChild(totalBarContainer);
    gridContainer.appendChild(totalGridItem);

    // Trigger animation for total bar
    requestAnimationFrame(() => {
        totalPercentageBar.style.width = `${totalPercentage}%`;
    });
});
