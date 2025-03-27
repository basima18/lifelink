document.addEventListener("DOMContentLoaded", function () {
    const chart = echarts.init(document.getElementById('studyChart'));
    const option = {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Study Hours', 'Completion Rate'] },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: [
            { type: 'value', name: 'Hours', min: 0, max: 8 },
            { type: 'value', name: 'Completion %', min: 0, max: 100 }
        ],
        series: [
            { name: 'Study Hours', type: 'bar', data: [3, 4, 5, 3, 4, 2, 1] },
            { name: 'Completion Rate', type: 'line', yAxisIndex: 1, data: [85, 90, 95, 80, 88, 70, 65] }
        ]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
});