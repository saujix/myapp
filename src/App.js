/*
Description : this code is the component of the main index.js file, it provdes time and values for now.
Author: Akshat Pasbola,
Date: 11 nov 2024

*/

import React, {useEffect, useState} from 'react';
import './App.css'

export default function Updater(){
    return <div>Hello</div>
};

export function Button(){
    return <div><button>Hi there</button></div>
};

//updates time every second
export function Time(){

    const [time, setTime] = useState(Date()); //initial value of time = 0

    useEffect(() => {
        const  interval = setInterval(()=>{ //calling anonymous function
            const date = new Date(); //creating a new date on every iterations, just grabbing time out of it
            const showTime = date.getHours() 
                + ':' + date.getMinutes() 
                + ":" + date.getSeconds(); 
            setTime(showTime);
        },1000)
    },[]);
    return <div className='time1'>{time}</div>
}


export function List() {

    let [arrayList, setArrayList] = useState([]);

    const addItem = () => {
        const value = document.querySelector(".valuefield").value;
        const newObject = { value };
        setArrayList([...arrayList, newObject]);
    };

    // document.addEventListener('keydown', function(event) {                     //not working as intended, does clear the box, but doesnt work second time, maybe because the function is not waiting for the upper function
    //     if (event.key === 'Enter') {
    //         addItem();
    //         function hi() {document.querySelector('.valuefield').value =''};
    //         hi();
    //     }
        
    // });

    let text;
    return (
        <div>
            <div className="listContainer">
                {arrayList.map((item, index) => (   //logic : iterate throught all the items in the loop and make return the final blovk with everything.
                        <div className='containerList' id={`item-${index}`} key={index}>
                            <input className='value' placeholder={item.value}></input>
                            <button className='remove' onClick={() => {setArrayList(arrayList = arrayList.slice(0, index).concat(arrayList.slice(index + 1))) }}>Delete</button> 
                        </div>
                ))}
            </div>

            <div className='bottom'>
                <div className='enterValue'>
                    <input className="valuefield" type='text' placeholder='Enter task..'></input>
                </div>
                <div className='enter' onClick={() =>{addItem() ; document.querySelector('.valuefield').value =''}}>
                    Add
                </div>  
            </div>
        </div>
    );
    
    
}