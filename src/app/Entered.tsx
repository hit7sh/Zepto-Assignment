import React, { useState } from 'react'

type EnteredProps = {
    availableIds:string[], 
    enteredIds:string[], 
    deleteIdFromEntered:(id:string) => void, 
    deleteIdFromAvailable:(id:string) => void,
    addIdToAvailable:(id:string) => void,
    addIdToEntered:(id:string) => void,
};


export default function Entered({
    availableIds, 
    enteredIds, 
    deleteIdFromEntered, 
    deleteIdFromAvailable,
    addIdToAvailable,
    addIdToEntered
}:EnteredProps) {
    const [inputStr, setInputStr] = useState<string>("");
    const [focusTop, setFocusTop] = useState<boolean>(false);
    
    return (
        <>
        <div className="w-full py-2 border-teal-800 border-solid border-4 rounded-lg border flex " onKeyDown={()=>{
            if (focusTop && enteredIds.length) {
                let id = enteredIds[enteredIds.length-1];
                deleteIdFromEntered(id);
                addIdToAvailable(id);
            }
        }}>
            {enteredIds.map((email, index) => {
                return (<div className='flex bg-green-800 mx-1 p-2 rounded-3xl' key={email}>
                    <div className={`px-1 ${focusTop && index == enteredIds.length-1 ? 'bg-orange-700':''}`}>{email}</div>
                    <button 
                    onClick={()=>{
                    deleteIdFromEntered(email);
                    addIdToAvailable(email);}} className="text-red-800 bg-white rounded-xl px-1"
                    >x</button>
                </div>)
                }
            )}

            <input 
            className="text-black w-max" 
            type="text" 
            list="emailIds" 
            onClick={()=>setFocusTop(false)}
            onChange={(e)=>{
                setFocusTop(false);
                setInputStr(e.target.value); 
                let idx = availableIds.indexOf(e.target.value);
            
                if (idx != -1) {
                    addIdToEntered(e.target.value);
                    deleteIdFromAvailable(e.target.value);
                    e.target.value = "";
                    setInputStr("");
                }
            }}
            onKeyDown={()=>{
                if (inputStr.length === 0) {
                    setFocusTop(true);
                }
            }}/>
            <datalist id="emailIds">
            {availableIds.filter(id=>id?.substring(0, inputStr.length)==inputStr).map(id=>(<option  key={id} value={id}/>))}
            </datalist>
        </div>
        </>
    )
}