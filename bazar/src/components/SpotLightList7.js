import React, {useState, useEffect} from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './slick.css'



import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles(theme => ({
  root: {
    
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

 


  


    
   // const { currentIndex, galleryItems, responsive } = this.state

   /* const Picture = (props) => {
    return (
      <div>
        <img src={props.src}/>
        
      </div>
    )
  } */
  


   


   export default function SpotLightList() {

   

    

 const [currentIndex, setCurrentIndex] = useState(0);


  const [itemsInSlide, setItemsInSlide] = useState(1);

  const [responsive, setResponsive] = useState({ 0: { items: 3 }});

  const [galleryItems, setGalleryItems] = useState([]);



  const classes = useStyles();
  
  const Picture = (props) => {
    return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={1}>
          <GridListTile key={props.img}>
            <img src={props.img} alt={props.title} />
            <GridListTileBar
              title={props.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${props.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
      </GridList>
    </div>
  );
  }


  const  initGalleryItems = (result) => {
    return (
    result.map((item, i) =>
      
       <div className="item">
          <Picture key={i} img={item.img} title={item.title}>
               
          </Picture>
        </div>
       
       
       )
    )
  }




    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                'http://localhost:3001/title',
            );
            const result = await data.json();
            setGalleryItems(initGalleryItems(result));

            //setGalleryItems(initGalleryItems(result));

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
    
  
