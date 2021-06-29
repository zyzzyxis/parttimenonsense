import React from 'react'
import '../components/bubbles.css'
import { gsap } from 'gsap'

const VisualBubbleWrap = () => {
      let select = s => document.querySelector(s),
      selectAll = s =>  document.querySelectorAll(s),
        mainSVG = select('#mainSVG'),
        bg = select('#bg'),
        allIconButtons = gsap.utils.toArray('.icon'),
        allRects = gsap.utils.toArray('.icon rect'),
        allIcons = gsap.utils.toArray('.icon path'),
        colorArr = [
          {bg: '#FFCC02', accent:'#F6BB02'},
          {bg: '#22CC88', accent:'#21B77A'},
          {bg: '#0099FF', accent:'#018AE6'},
          {bg: '#FF3366', accent:'#C0284D'},
          {bg: '#8849D4', accent:'#6F2DBD'},
        ]

    gsap.set('svg', {
      visibility: 'visible'
    })
    gsap.set(allIcons, {
      transformOrigin: '50% 50%'
    })
    gsap.from(allIconButtons, {
      delay: 0.5,
      duration: 0.75,	
      transformOrigin: '50% 50%',
      scale: 0,
      stagger: {
        each: 0.04
      },
      ease: 'elastic(0.4, 0.4)'
    })
    function clickIcon (e) {

      let tl = gsap.timeline({
        defaults: {
          ease: 'elastic(0.4, 0.4)'
        }
      });	
      
      let iconId = Number(e.currentTarget.getAttribute('data-iconId'));

      //you didn't click an icon
      if(iconId === -1) {
        tl.to('body', {
          backgroundColor:'#b3b3b3'
        })
        .to(allIcons, {
          fill:'#b3b3b3',
          scale: 1,
          x: 0
        }, 0)
        .to(allIconButtons, {
          x: 0
        }, 0)
      .to(allRects, {
          attr: {
            width: 50
          },
          fill: '#FFF',
          x: 0
        }, 0)	
      .to('#bg', {
        fill: '#b3b3b3'
      }, 0)		
        
        return
      }

      let rect = e.currentTarget.querySelector('rect');
      let icon = e.currentTarget.querySelector('path');

      tl.to(allIconButtons, {
        x: (i) => {
          return (i <= iconId) ? 0 : 50
        }
      })
      .to(allRects, {
        attr: {
          width: (i) => {
            return (i === iconId) ? 100 : 50
          }
        },
        fill: (i) => {
          return (i === iconId) ? colorArr[iconId].accent : '#FFF'
        }		
      }, 0)
      .to(allIcons, {
        x: (i) => {
          return (i === iconId) ? 25 : 0
        },
        fill: (i) => {
          return (i === iconId) ? '#FFF' : '#b3b3b3'
        },
        scale: (i) => {
          return (i === iconId) ? 1.35 : 1
        }
      }, 0)
      .to('body', {
        backgroundColor: colorArr[iconId].bg
      }, 0)
      .to('#bg', {
        fill: colorArr[iconId].bg
      }, 0)

    }

    allIconButtons.forEach((target, i) => {
      target.setAttribute('data-iconId', i);
      target.addEventListener('click', clickIcon)
    })
    bg.setAttribute('data-iconId', -1);
    bg.addEventListener('click',clickIcon)
  return (
    <svg id="mainSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
    <rect id="bg" width="800" height="600" fill="#b3b3b3"/>
        <g className="icon" id="camera">
          <rect x="255" y="275" width="50" height="50" rx="25" ry="25" fill="#fff"/>
          <path d="M288.5,294.7h-3.2a.61.61,0,0,1-.46-.28l-.68-1.86a1.59,1.59,0,0,0-1.5-1.06h-6.32a1.59,1.59,0,0,0-1.5,1.06l-.67,1.84a.56.56,0,0,1-.47.3h-3.2a1,1,0,0,0-1,1V306.5a1,1,0,0,0,1,1h18a1,1,0,0,0,1-1V295.7A1,1,0,0,0,288.5,294.7Zm-9,8.8a3.6,3.6,0,1,1,3.6-3.6A3.6,3.6,0,0,1,279.5,303.5Z" fill="#b3b3b3"/>
        </g>
        <g className="icon" id="clip">
          <rect x="315" y="275" width="50" height="50" rx="25" ry="25" fill="#fff"/>
          <path d="M336,309.15a6.16,6.16,0,0,1-4.2-1.62l-.08-.07a5.46,5.46,0,0,1-.33-7.7l.33-.32,10.4-9.41a4.42,4.42,0,0,1,6,0,3.84,3.84,0,0,1,.07,5.77l-9.78,8.82a2.62,2.62,0,0,1-3.55,0,2.36,2.36,0,0,1-.15-3.33l.15-.16,9.14-8.19,1.08,1.21L336,302.31a.75.75,0,0,0-.24.54.73.73,0,0,0,.25.55,1,1,0,0,0,1.35,0l9.78-8.76a2.27,2.27,0,0,0,.15-3.21l-.15-.16a2.8,2.8,0,0,0-3.81,0l-10.43,9.38a3.83,3.83,0,0,0-.27,5.41,3.44,3.44,0,0,0,.27.27l.07.06a4.57,4.57,0,0,0,6.19,0l9.79-8.79,1.09,1.2-9.77,8.78A6.13,6.13,0,0,1,336,309.15Z" fill="#b3b3b3"/>
        </g>
        <g className="icon" id="plane">
          <rect x="375" y="275" width="50" height="50" rx="25" ry="25" fill="#fff"/>
          <path d="M396.1,304.17l-5.31-2.94h0a.85.85,0,0,1-.38-.77.78.78,0,0,1,.46-.71l18.68-9.26a.72.72,0,0,1,.41,0l-13.88,13.74Zm-.1,1.27v4.63a.4.4,0,0,0,.41.4.39.39,0,0,0,.3-.14l3.23-3.95,4,2.23a.82.82,0,0,0,1.23-.45l5.25-16.92a.28.28,0,0,0,0-.13Z" fill="#b3b3b3"/>
        </g>
        <g className="icon" id="pin">
          <rect x="435" y="275" width="50" height="50" rx="25" ry="25" fill="#fff"/>
          <path d="M460,288.13a9.14,9.14,0,0,0-9.4,8.88c0,.15,0,.29,0,.43,0,7.81,8.72,15,9.08,15.32a.5.5,0,0,0,.65,0c.38-.35,9.08-8.29,9.08-15.32a9.13,9.13,0,0,0-9-9.31ZM460,302a4.46,4.46,0,1,1,4.45-4.46A4.46,4.46,0,0,1,460,302Z" fill="#b3b3b3"/>
        </g>
        <g className="icon" id="cog">
          <rect x="495" y="275" width="50" height="50" rx="25" ry="25" fill="#fff"/>
          <path d="M529.2,298.24l-1.3-.24a1.51,1.51,0,0,1-1.1-1.81,1.65,1.65,0,0,1,.18-.41l.74-1a1,1,0,0,0-.12-1.33l-1.08-1.07a1,1,0,0,0-1.32-.12l-1,.74a1.54,1.54,0,0,1-1.34.11,1.6,1.6,0,0,1-.82-1l-.24-1.3a1,1,0,0,0-1-.8h-1.55a1,1,0,0,0-1,.8l-.24,1.3a1.49,1.49,0,0,1-1.82,1.07,1.2,1.2,0,0,1-.37-.15l-1-.74a1,1,0,0,0-1.32.12l-1.08,1.07a1,1,0,0,0-.12,1.33l.74,1a1.49,1.49,0,0,1-.6,2,1.27,1.27,0,0,1-.32.13l-1.3.24a1,1,0,0,0-.8,1v1.55a1,1,0,0,0,.8,1l1.3.24a1.51,1.51,0,0,1,1.1,1.81,1.65,1.65,0,0,1-.18.41l-.74,1a1,1,0,0,0,.12,1.33l1.08,1.07a1,1,0,0,0,1.32.12l1-.74a1.49,1.49,0,0,1,2,.6,1.27,1.27,0,0,1,.13.32l.24,1.3a1,1,0,0,0,1,.8h1.55a1,1,0,0,0,1-.8l.25-1.3a1.51,1.51,0,0,1,1.81-1.1,1.65,1.65,0,0,1,.41.18l1,.74a1,1,0,0,0,1.26-.12l1.08-1.07a1,1,0,0,0,.12-1.33l-.74-1a1.49,1.49,0,0,1,.6-2,1.27,1.27,0,0,1,.32-.13l1.3-.24a1,1,0,0,0,.8-1v-1.55A1,1,0,0,0,529.2,298.24ZM523.6,300a3.6,3.6,0,1,1-3.6-3.6A3.6,3.6,0,0,1,523.6,300Z" fill="#b3b3b3"/>
        </g>
  </svg>
  
  
    
  )
}

export default VisualBubbleWrap
