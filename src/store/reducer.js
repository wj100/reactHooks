const defaultStates = {
    inputValue: '写入任务',
    list: [
        '睁眼起床',
        '下床刷牙',
        '穿衣出门',
    ],
};

export default (previousState = defaultStates, action) => {
    return previousState;
}