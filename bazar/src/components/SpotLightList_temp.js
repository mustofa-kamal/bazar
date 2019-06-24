import React, {useState, useEffect} from 'react'
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

  const Picture = (props) => {
    return (
      <div>
        <img src={props.src}/>
        {props.children}
      </div>
    )
  }
  


   
  
  
  
  
  export default function SpotLightList() {

   

    

 const [currentIndex, setCurrentIndex] = useState(0);


  const [itemsInSlide, setItemsInSlide] = useState(1);

  const [responsive, setResponsive] = useState({ 0: { items: 3 }});

  const [galleryItems, setGalleryItems] = useState([]);


  const List = () => {
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                'http://localhost:3001/title',
            );
            const result = await data.json();
            //setGalleryItems(result);

            if (result){
              let pp = [];
              pp.push('sohel')

              
              
                const Panel = (props) =>
                <h2 className="item">
                  {props.children}
                </h2>

                

                //setGalleryItems(<Panel {...pp}/>)
              

                




            
            }



        };
        fetchData();
    }, []);
   
}



const ActualList = props => {
    

      

      setGalleryItems(props.galleryItems.map((item, i) =>
      
       <h2 className="item">{item[0].img}</h2>
       
       
       ))

       const posts = props.galleryItems.map((item, index) => {
        return <h2 className="item">{item[0].img}</h2>
      });

      

      setGalleryItems(<div>{posts}</div>)


       




    
    

    let p = 1;
  }


  List();





  

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



  const Picture = (props) => {
    return (
      <div>
        <img src={props.src}/>
        {props.children}
      </div>
    )
  }

  




    return (
      
      <div>


        <div className='container'>
            <Picture key={2} src='https://res.cloudinary.com/demo/image/upload/sample.jpg'>
                <div>sohel</div>  
            </Picture>
        </div>


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
    
  
