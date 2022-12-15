


import React from 'react'
import './portfolio.css'
import Heading from '../Heading/Heading'
import CardList from '../CardList/CardList'

import cabin from './images/cabin.png'
import cake from './images/cake.png'
import circus from './images/circus.png'
import game from './images/game.png'
import safe from './images/safe.png'
import submarine from './images/submarine.png'
import Footer from './../Footer/Footer';

export default function Portfolio() {
    let cardDetails = [
        {
        title:'LOG CABIN',
        imgSrc: cabin},
        {
        title:'TASTY CAKE',
        imgSrc: cake},
        {
        title:'CIRCUS TENT',
        imgSrc: circus},
        {
        title:'CONTROLLER',
        imgSrc: game},
        {
        title:'LOCKED SAFE',
        imgSrc: safe},
        {
        title:'SUBMARINE',
        imgSrc: submarine},]
    return (<>
        <section className='h-100 py-5'>
            <div className='container'>
               <Heading title='Portfolio'/>
                <div className="row gy-3">
                 {cardDetails.map((cardDetail,index)=>(
                   <CardList key={index+1} imgSrc={cardDetail.imgSrc} title={cardDetail.title}  index={index}/>
                   ))}
                </div>
            </div>
        </section>
        <Footer/>
    </>
    )}