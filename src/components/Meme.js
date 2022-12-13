import React from "react";
import memesData from "./memesData.js";

export default function Meme(){
   const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/2hgfw.jpg"
   })

   const [allMemeImages, setAllMemeImages] = React.useState(memesData)

   function getMemeImage(){
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random()*memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(preMeme => ({
            ...preMeme,
            randomImage: url
        }))

        setAllMemeImages(preAllImage => ({
            ...preAllImage,
            url: url
        }))
   }

   function handleChange(event){
    const {name, value} = event.target
    setMeme(preMeme => ({
        ...preMeme,
        [name]:value
    }))
   }

   return (
    <main>
        <div className="form"> 
            <input
                type="text"
                placeholder="Top text"
                className="form--input"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
            />
            <input 
                type = "text"
                placeholder="Bottom text"
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
            />
            <button 
                className="form--button"
                onClick={getMemeImage}
            >    
            Get a new meme image 🖼
            </button>

        </div>
        <div className="meme">
            <img src={meme.randomImage} className="meme--image" alt="" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
   )
}