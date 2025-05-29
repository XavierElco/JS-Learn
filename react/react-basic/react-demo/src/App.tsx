import React, { useLayoutEffect, useState, useReducer, useTransition, useDeferredValue } from 'react';
import { Input, List } from 'antd';
import mockjs from 'mockjs';
interface Iitem {
    id: string;
    name: number;
    title: string;
    address: string;
    age: number;
}
function App() {
    const [inputValue, setInputValue] = useState('');
    const [list] = useState<Iitem[]>(() => {
        return mockjs.mock({
            'a|10000': [
                {
                    id: '@id',
                    name: '@natural', // 数字
                    title: '@cname',
                    address: '@county(true)',
                    age: '@integer(18, 60)',
                },
            ],
        }).a;
    });
    const deferedQuery = useDeferredValue(inputValue);
    console.log(deferedQuery, '======', inputValue);
    const isSame = deferedQuery !== inputValue;
    const findName = () => {
        return list.filter((item) => item.name.toString().includes(deferedQuery));
    };
    return (
        <>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <List
                style={{ opacity: isSame ? 0.5 : 1, transition: 'opacity 0.5s ease-in-out' }}
                dataSource={findName()}
                renderItem={(item) => (
                    <List.Item>
                        {item.name}
                        <br />
                        {item.address}
                    </List.Item>
                )}
            />
        </>
    );
}

export default App;
