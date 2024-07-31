import React from 'react'
import { AuroraBackground } from './ui/Aurora'

const Hero = () => {
  return (
    <div>
        <AuroraBackground> 
           <h1 className="text-white uppercase text-2xl">Alba Ginés</h1>
           <h2 className="text-white uppercase mb-6">Transforming user needs into engaging digital products</h2>
              <button className="p-[3px] relative">
                 <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold-900 rounded-lg" />
                 <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  My projects
                 </div>
              </button>
        </AuroraBackground>
        <div>
        </div>
    </div>
  )
}

export default Hero
