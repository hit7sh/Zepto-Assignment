'use client'

import { useEffect, useState } from "react";
import Entered from "./Entered";


export default function Home() {
  const [availableIds, setAvailableIds] = useState<string[]>([
      'bez@lepo.lb',
      'fezba@kucewkik.ad',
      'ineikeam@opawu.et',
      'pun@everadom.nu',
      'emadewa@febevoc.ua',
      'ela@isvattaw.gy',
      'nowde@lukede.tn',
      'ec@deohuhin.org',
      'pimpeef@ukbuti.gl',
      'murpov@ehota.lc',
      'peb@salueb.cl',
      'labdul@ulukupi.mr',
      'heb@lace.id',
      'abhi@gmail.com',
      'cobsak@cihwiep.io',
      'ka@du.pg'
  ]);
  const [enteredIds, setEnteredIds] = useState<string[]>([
      
  ]);

  useEffect(() => {
    // we can use backend api endpoints to fetch emails

    // setAvailableIds([
      
    // ]);
  });

  const deleteIdFromAvailable = (id:string) => {
    let newIds = availableIds.filter(emailId => emailId != id);
    setAvailableIds(newIds);
  };

  const addIdToAvailable = (id:string) => {
    let newIds = availableIds;
    newIds.push(id);
    setAvailableIds(newIds);
  };

  const deleteIdFromEntered = (id:string) => {
    let newIds = enteredIds.filter(emailId => emailId != id);
    setEnteredIds(newIds);
  };

  const addIdToEntered = (id:string) => {
    let newIds = enteredIds;
    newIds.push(id);
    setEnteredIds(newIds);
  };

  return (
    <>
    <img src="https://play-lh.googleusercontent.com/tjzK0-TCkXB1zxkmiRr5WNGJxQy87s1RdBx10nqLbdxRIH7bPWxTkH_YiUMbYPFRfmj7=w480-h960-rw" className="h-14 w-14" />
    <h1>Assignment</h1>
    <div className="mt-3 bg-white">
      
      <Entered 
        availableIds={availableIds} 
        enteredIds={enteredIds} 
        deleteIdFromEntered={deleteIdFromEntered} 
        deleteIdFromAvailable={deleteIdFromAvailable} 
        addIdToAvailable={addIdToAvailable} 
        addIdToEntered={addIdToEntered} 
        />
    </div>
    </>
  )
}
