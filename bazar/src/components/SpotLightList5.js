import React, {useState} from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

 


  


    
   // const { currentIndex, galleryItems, responsive } = this.state

   const  initGalleryItems = () => {
    return (
      Array(7).fill().map((item, i) =>
      
       <h2 className="item">{i + 1}</h2>
       
       
       )
    )
  }


   export default function SpotLightList() {

   

    

 const [currentIndex, setCurrentIndex] = useState(0);


  const [itemsInSlide, setItemsInSlide] = useState(1);

  const [responsive, setResponsive] = useState({ 0: { items: 3 }});

  const [galleryItems, setGalleryItems] = useState(initGalleryItems());






  

  const slidePrevPage = () => {
    //const currentIndex = currentIndex - itemsInSlide
    setCurrentIndex( currentIndex - itemsInSlide )
  }

  const slideNextPage = () => {

    if ((currentIndex + itemsInSlide) > galleryItems.length) 
        setCurrentIndex( galleryItems.length )
     else
         setCurrentIndex(currentIndex + itemsInSlide)   
  }

  const handleOnSlideChange = (event) => {
    //const { itemsInSlide, item } = event
    //this.setState({ itemsInSlide, currentIndex: item })

    setItemsInSlide(event.itemsInSlide);
    setCurrentIndex(event.item)


  }



    return (
      <div>
        <AliceCarousel
          items={galleryItems}
          slideToIndex={currentIndex}
          responsive={responsive}
          onInitialized={handleOnSlideChange}
          onSlideChanged={handleOnSlideChange}
          onResized={handleOnSlideChange}
        />
        <button onClick={slidePrevPage}>Prev Page</button>
        <button onClick={slideNextPage}>Next Page</button>
      </div>
    )
   }
    
  
