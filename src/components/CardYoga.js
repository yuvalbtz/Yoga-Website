import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import {CardsContainer, CardItem} from './CardElements'


const useStyles = makeStyles(() => ({
  
}));

export default function CardYoga({yoga1, yoga2, yoga3}) {
  const classes = useStyles();
  
  return (
    <>
     <Fade left>
   
   <CardsContainer>
  
    
     <CardItem>
      <Image fluid={yoga1}/>
      </CardItem>
      
      
     
      <CardItem>
      <Image fluid={yoga2}/>
      </CardItem>
     
      
      
      <CardItem>
      <Image fluid={yoga3}/>
      </CardItem>
      
      </CardsContainer>
      </Fade>
    
    </>
  );
}


