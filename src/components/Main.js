import axios from 'axios';
import React, { useState } from 'react';
import Card from './Card';

const Main = () => {
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook = (evt) =>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+':keyes&key=AIzaSyDjAum9Bujvr5obUGXvyicTCiDyus7OUM8'+'&maxResults=40')
            .then(res=>{setData(res.data.items)})
            .catch(err=>{console.log(err)})
        }

    }
  return (
    <>
        <div className='header'>
            <div className='row1'>
                <h1>A room without book is like </h1> <br />
               <h1> a body without soul</h1>
            </div>
            <div className='row2'>
                <h2>find book</h2>
                <div className='search'>
                    <input type='text' placeholder='Enter book name' value={search} onChange={e=>{setSearch(e.target.value)}}
                    onKeyPress={searchBook}
                    >

                    </input>
                    <button><i className='fa fa-search'></i></button>
                </div>
                <img src='https://raw.githubusercontent.com/Kirti-salunkhe/OpenBook/main/public/images/bg2.png' alt='this is image'></img>
            </div>
        </div>
        <div className='container'>
        {
            <Card book={bookData} />

        }
            

        </div>
      
    </>
  )
}

export default Main
// https://raw.githubusercontent.com/Kirti-salunkhe/OpenBook/main/src/Components/bg1.png