const xlsx = require('xlsx');
const fs = require('fs');
const filePath = './survey_data.xlsx';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        let workbook;
        if (fs.existsSync(filePath)) {
            workbook = xlsx.readFile(filePath);
        } else {
            workbook = xlsx.utils.book_new();
            workbook.SheetNames.push('SurveyData');
            workbook.Sheets['SurveyData'] = xlsx.utils.aoa_to_sheet([[
                '현장', '연령대', '성별', '근속 년 수', '직종',
                '나는 작업에 대한 안전규정을 알고 있다',
                '작업 전/중/후 안전점검을 실제로 이행하고 있다',
                '공사관리자(관리감독자)는 업무 시 안전에 대한 지도와 지적을 이행하고 있는 것 같다',
                '공사 일정보다는 안전규정의 준수가 우선 시 되고 있다고 생각한다',
                '작업의 영향으로 신체의 통증이나 이상이 발생한 경우가 없다',
                '사고 발생 시 보고절차를 정확하게 알고있다',
                '본인, 반장(팀장), 동료 중 위험성평가에 참여하고 있는 사람이 있다',
                'TBM, 교육시간 중 위험성평가 내용을 공유 받고 있다',
                '개선 요청 사항(VOC)'
            ]]);
        }

        const worksheet = workbook.Sheets['SurveyData'];
        const newRow = [
            data.site, data.ageGroup, data.gender, data.yearsOfService, data.jobCategory,
            data.question1, data.question2, data.question3, data.question4, data.question5,
            data.question6, data.question7, data.question8, data.voc
        ];
        xlsx.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });
        workbook.Sheets['SurveyData'] = worksheet;

        xlsx.writeFile(workbook, filePath);

        res.status(200).json({ status: 'success' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
