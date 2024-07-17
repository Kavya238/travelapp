import React, {useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'




const Data = [
  {
    id:1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: 'Rs.5000',
    description: 'This rich blend of cultures, combined with geologically fascinating landscapes and unique flora and fauna, make New Zealand an exciting country to explore. Discover some interesting facts about New Zealand below. New Zealanders (also known as Kiwis) are friendly and down-to-earth people.'
  
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: 'Rs.7000',
   description:'Machu Picchu is formed of buildings, plazas, and platforms connected by narrow lanes or paths. One sector is cordoned off to itself by walls, ditches, and, perhaps, a moat—built, writes'
  },

  {
   id:3,
   imgSrc: img3,
   destTitle: 'Great Barrier Reef',
   location: 'Australia',
   grade: 'CULTURAL RELAX',
   fees: 'Rs.8000',
   description:'Great Barrier Reef, complex of coral reefs, shoals, and islets in the Pacific Ocean off the northeastern coast of Australia that is the longest and largest reef complex in the world. The Great Barrier Reef extends in roughly a northwest-southeast direction for more than 1,250 miles (2,000 km), at an offshore distance ranging from 10 to 100 miles (16 to 160 km), and its width ranges from 37 to 155 miles (60 to 250 km). '

  },


  {
    id:4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: 'Rs.8000',
    description:'Cappadocia, ancient district in east-central Anatolia, situated on the rugged plateau north of the Taurus Mountains, in the centre of present-day Turkey. The boundaries of the region have varied throughout history. Cappadocia’s landscape includes dramatic expanses of soft volcanic rock, shaped by erosion into towers, cones, valleys, and caves. Rock-cut churches and underground tunnel complexes from the Byzantine and Islamic eras are scattered throughout the countryside.'
  },


  {
    id:5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: 'Rs.9000',
    description:'Guanajuato is in central Mexico. It is bordered by the states of Jalisco to the west, Zacatecas to the northwest, San Luis Potosí to the north, Querétaro to the east, and Michoacán to the south. It covers an area of 30,608 km 2 (11,818 sq mi).'
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: 'Rs.9000',
    description:'The Cinque Terre (Italian pronunciation: [ˈtʃiŋkwe ˈtɛrre]; Ligurian: Çinque Tære, meaning "Five Lands") is a coastal area within Liguria, in the northwest of Italy. It lies in the west of La Spezia Province, and comprises five villages: Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore.'
  },


  {
    id:7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Combodia',
    grade: 'CULTURAL RELAX',
    fees: 'Rs.9500',
    description:'Angkor Wat, temple complex at Angkor, near Siĕmréab, Cambodia, that was built in the 12th century by King Suryavarman II (reigned 1113– c. 1150). It is the world’s largest religious structure, covering some 400 acres (160 hectares), and marks the high point of Khmer architecture.'
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: 'Rs.9500',
    description:'The Taj Mahal is built of white marble that reflects hues according to the intensity of the sunlight or the moonlight. In its harmonious proportions and its fluid incorporation of decorative elements, the Taj Mahal is distinguished as the finest example of Mughal architecture, a blend of Indian, Persian, and Islamic styles.'
  },


  {
    id:9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: 'Rs.10000',
    description:'Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast.'
  },
]
const Main = () => {

    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
 
  return (
    <section className='main container section'>
       <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destinations
        </h3>
       </div>

       <div className="secContent grid">
           
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
                <div key={id} data-aos="fade-up" className="singleDestination">
                    <div className="imageDiv">
                      <img src={imgSrc} alt={destTitle} />
                    </div>

                    <div className="cardInfo">
                      <h4 className="destTitle">
                        {destTitle}
                      </h4>
                      <span className="continent flex">
                        <HiOutlineLocationMarker className='icon' />
                        <span className="name">{location}</span>
                      </span>

                      <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>

                      <div className="desc">
                        <p>{description}</p>
                      </div>

                      <button className='btn flex'>
                         DETAILS <HiOutlineClipboardCheck className="icon" />
                      </button>
                    </div>
                </div>
            )

          })
        }


       </div>
    </section>
  )
}

export default Main
