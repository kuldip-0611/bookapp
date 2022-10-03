import React from 'react'

const Modal = ({show,item}) => {
    if(!show)
    {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
        <div className='overplay'>
            <div className='overplay-inner'>
                <button className='close'><i className='fas fa-times' /></button>
                <div className='inner-box'>
                    <img src={thumbnail} alt='this is book'></img>
                    <div className='info'>
                        <h1>{item.volumeInfo.title}</h1> <br />
                        <h3>{item.volumeInfo.authors}</h3><br />
                        <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br />
                        <a href={item.volumeInfo.previewLink}> <button>More</button> </a>
                    </div>
                </div>
                <h4 className='discription'>
                {item.volumeInfo.description}

                </h4>
            </div>
        </div>
      
    </>
  )
}

export default Modal
