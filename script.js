document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const site = document.getElementById('site').value;
    const ageGroup = document.getElementById('age-group').value;
    const gender = document.getElementById('gender').value;
    const yearsOfService = document.getElementById('years-of-service').value;
    const jobCategory = document.getElementById('job-category').value;
    const question1 = document.querySelector('select[name="question1"]').value;
    const question2 = document.querySelector('select[name="question2"]').value;
    const question3 = document.querySelector('select[name="question3"]').value;
    const question4 = document.querySelector('select[name="question4"]').value;
    const question5 = document.querySelector('select[name="question5"]').value;
    const question6 = document.querySelector('select[name="question6"]').value;
    const question7 = document.querySelector('select[name="question7"]').value;
    const question8 = document.querySelector('select[name="question8"]').value;
    const voc = document.getElementById('voc').value;

    alert(`현장: ${site}\n연령대: ${ageGroup}\n성별: ${gender}\n근속 년 수: ${yearsOfService}\n직종: ${jobCategory}\n\n나는 작업에 대한 안전규정을 알고 있다: ${question1}\n작업 전/중/후 안전점검을 실제로 이행하고 있다: ${question2}\n공사관리자(관리감독자)는 업무 시 안전에 대한 지도와 지적을 이행하고 있는 것 같다: ${question3}\n공사 일정보다는 안전규정의 준수가 우선 시 되고 있다고 생각한다: ${question4}\n작업의 영향으로 신체의 통증이나 이상이 발생한 경우가 없다: ${question5}\n사고 발생 시 보고절차를 정확하게 알고있다: ${question6}\n본인, 반장(팀장), 동료 중 위험성평가에 참여하고 있는 사람이 있다: ${question7}\nTBM, 교육시간 중 위험성평가 내용을 공유 받고 있다: ${question8}\n\n개선 요청 사항(VOC): ${voc}`);
});
