/* 
useCallback其实是利用memoize减少不必要的子组件重新渲染

在子组件不需要父组件的值和函数的情况下，只需要使用memo函数包裹子组件即可。
而在使用函数的情况，需要考虑有没有函数传递给子组件,使用useCallback。
而在值有所依赖的项，并且是对象和数组等值的时候而使用useMemo（当返回的是原始数据类型如字符串、数字、布尔值，就不要使用useMemo了）。
*/
import React,{ useState,useCallback } from "react";

function Button(props) {
    const { handleClick, children } = props;
    console.log('Button -> render');

    return (
        <button onClick={handleClick}>{children}</button>
    )
}
const MemoizedButton = React.memo(Button);
export default function() {
    const [clickCount, increaseCount] = useState(0);
    // 没有使用`useCallback`，每次渲染都会重新创建内部函数
    const handleClick1 = () => {
        console.log('handleClick',clickCount);
        increaseCount(clickCount + 1);
    }

    // 使用`useCallback` ，但也每次渲染都会重新创建内部函数作为`useCallback`的实参
    const handleClick = useCallback(() => {
        console.log('handleClick');
        increaseCount(clickCount + 1);
    }, [])

    return (
        <div className='div'>
            <p>useCallback: </p>
            <span>{clickCount}</span>
            <MemoizedButton handleClick={handleClick}>Click-MemoizedButton</MemoizedButton>
        </div>
    )
}