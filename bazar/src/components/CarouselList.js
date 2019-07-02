import React, { useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './CarouselList.css'




import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { Link as RouterLink, BrowserRouter } from "react-router-dom";

import Button from '@material-ui/core/Button';






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












export default function CarouselList() {





  const [currentIndex, setCurrentIndex] = useState(0);


  const [itemsInSlide, setItemsInSlide] = useState(1);

  const [responsive, setResponsive] = useState({ 0: { items: 5 } });

  const [galleryItems, setGalleryItems] = useState([]);



  const classes = useStyles();


  
  const GalleryItem = (props) => {
    return (
      <RouterLink to="/repos/reactjs/react-router">
      <div className={classes.root} >
        <GridList className={classes.gridList} cols={1} style={{height:"210px", width:"150px"}}>
          <GridListTile key={props.img}>
            <img src={props.img} alt={props.title}  />
            <GridListTileBar
              title={props.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}            
            />
          </GridListTile>
        </GridList>
      </div>
      </RouterLink>
    );
  }


  const initGalleryItems = (result) => {
    return (
      result.map((item, i) =>
      
        <GalleryItem key={i} img={item.img} title={item.title} url='https://material-ui.com/components/grid-list/'/>
      )
    )
  }




  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'http://localhost:3001/title',
      );
      const result = await data.json();
      if (result) {
        setGalleryItems(initGalleryItems(result));
      }
    };
    fetchData();
  }, []);


  const slidePrevPage = () => {
    setCurrentIndex(currentIndex - itemsInSlide)
  }

  const slideNextPage = () => {

    if ((currentIndex + itemsInSlide) > galleryItems.length)
      setCurrentIndex(galleryItems.length)
    else
      setCurrentIndex(currentIndex + itemsInSlide)
  }

  const handleOnSlideChange = (event) => {
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
        playButtonEnabled={false}
        disableAutoPlayOnAction={false}
        showSlideInfo={true}
        duration={400}

        buttonsDisabled={true}

        dotsDisabled={true}

        

      
          
      />
     
      <Button onClick={slidePrevPage} size="small" color="primary">
      Prev Page
        </Button>

        <Button onClick={slideNextPage} size="small" color="primary">
      Next Page
        </Button>


      
      
    </div>
  )
}


