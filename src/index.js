import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Updater from './App';
import {Button} from './App';
import {Time} from './App';
import './App';
import "./Index.css";
import next from './next.png';
import {List} from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));   //holds the main dom element and is the only one
root.render(
    <>
    <div className='container'>
        <div className='todo'>
            <div className='top'>
                <div className='t1'>
                    <div><h3>TODO</h3></div>
                </div>
                <div className='time'>
                    <Time />
                </div>
            </div>
            <div className='main'>
                <div className="mainBody">
                <div className='list'>
                   <List />
                    </div>
                </div>
            </div>
        </div>    
    </div>
    </>
   
)