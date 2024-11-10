import React, {useEffect, useState} from 'react';
import './App.css'

export default function Updater(){
    return <div>Hello</div>
};

export function Button(){
    return <div><button>Hi there</button></div>
};

export function Time(){
    const [time, setTime] = useState(Date());
    useEffect(() => {
        const  interval = setInterval(()=>{
            const date = new Date();
            const showTime = date.getHours() 
                + ':' + date.getMinutes() 
                + ":" + date.getSeconds(); 
            setTime(showTime);
        },1000)
    },[]);
    return <div className='time1'>{time}</div>
}


export function List() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            // Your code here when Enter is pressed
            addItem();
        }
    });

    let [arrayList, setArrayList] = useState([]);

    const addItem = () => {
        const value = document.querySelector(".valuefield").value;
        const newObject = { value };
        setArrayList([...arrayList, newObject]);
             
        document.querySelector('.valuefield').value ='';
    };

    let text;
    return (
        <div>
            <div className="listContainer">
                {arrayList.map((item, index) => (
                        <div className='containerList' id={`item-${index}`} key={index}>
                            <input className='value' placeholder={item.value}></input>
                            <button className='remove' onClick={() => {setArrayList(arrayList = arrayList.splice(0, index).concat(arrayList.splice(index + 1))) }}>Delete</button>
                        </div>
                ))}
            </div>

            <div className='bottom'>
                <div className='enterValue'>
                    <input className="valuefield" type='text' placeholder={text}></input>
                </div>
                <div className='enter' onClick={addItem}>
                    Add
                </div>
               
            </div>
        </div>
    );

    
}