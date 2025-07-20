'use client'
// "use server"
import {Particles}from 'react-tsparticles';
import {loadFull} from 'tsparticles';
// import type { Engine } from 'tsparticles/dist/Engine'; 
import React,{ useCallback} from 'react';
import { Engine } from 'tsparticles-engine';
// import { BsFullscreen } from 'react-icons/bs';
// import { color, distance } from 'framer-motion';

const Particle=()=>
{
    // type engine = any;
    console.log("inside");
    const particlesInit=useCallback(async (engine: Engine)=>{
        return await loadFull(engine);
    },[loadFull]);
    const particlesloaded=useCallback(async ()=>{},[]);
    console.log("inside");


    return <Particles id='tsparticles' className='w-full h-full asolute translate-z-3'
    init={particlesInit}
    loaded={particlesloaded}
    options={{
        fullscreen:{enable:false},
        background:{
            color:{
                value:'',
            },
        },
        fpslimit:120 ,
        interactivity:{
            events:{
                onclick:{
                    enable:false,
                    mode:'push',
                },
                onhover:{
                    enable:true,
                    mode:'repulse',

                },
                resize:true,
            },
            modes:{
                push:{
                    quantity:90,

                },
                repulse:{
                    distance:200,
                    duration:0.4,
                }
            }
        },
        particles:{
            color:{
                value:'#e68e2e',

            },
            links:{
                color:'#f5d393',
                distance:150,
                enable:true,
                opacity:0.5,
                width:1
            },
            collisions:{
                enable:true,
            },
            move:{
                direction:'none',
                enable:true,
                outModes:{
                    default:'bounce'
                },
                random:false,
                speed:1,
                straight:false
            },
            number:{
                density:{
                    enable:true,
                    area:800
                },
                value:80
            },
            opacity:{
                value:0.5,
            },
            shape:{
                type:'circle'
            },
            size:{
                value:{min:1,max:5},

            },


        },
        detectRetina:true,
    }}
    />

   
    
};

export default Particle;