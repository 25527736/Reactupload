import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Display(){
    let [name , setName] = useState([]);

    return(
        <>
            <form>
                <table>
                    <tr>
                        <td>Enter Name</td>
                        <td>:</td>
                        <td><input type="text" onChange={(e) => {
                           name = e.target.value
                        }}/></td>
                    </tr>
                    <tr>
                        <td colSpan="3" align='center'><input type="button" value="Save" onClick={(e) =>{
                            setName([name]);
                        }}/></td>
                    </tr>
                </table>
            </form>
            <h1>{name}</h1>
        </> 
    );
}

root.render(
    <Display />
);