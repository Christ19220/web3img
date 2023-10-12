import React from "react"
import Card from "./Card.js"
import image1 from "../assets/perro-cachorro_1f88f901_600x600.jpg"
import image2 from "../assets/covenant.jpg"
import image3 from "../assets/unsc.jpg"

const cards =[

{
    id: 1,
    title: 'fast java-Docker',
    image: image1,
    instructor: "aaaa"
},
{
    id: 2,
    title: 'fast java-Docker',
    image: image2,
    instructor: "fasdf"
},
{
    id: 3,
    title: 'Docker',
    image: image3,
    instructor: "fasdjjf"
}
]


export default function Cards(){
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
              {
                  cards.map (c =>(
                     <div className="col-md-4" key={cards.id}>
                        <Card
                          key={c.id}
                          id={c.id}
                          title={c.title}
                          image={c.image}
                          instructor={c.instructor}
                         />    
                    </div>
                 ))
             }
    </div>
</div>
);
}

