import { useState } from 'react'

export default function Main() {

  const[meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    url: "https://wallpapers.com/images/featured/game-of-thrones-pictures-ad9d02jxoawpkpqg.jpg"
  })

  function inputChange(e) {
    setMeme(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main>

      <div className="formContainer">
        <div>
          <label>Top Text</label>
          <input
            type="text"
            name="topText"
            onChange={inputChange}
            value={meme.topText}
            maxlength='26'
          >
          </input>
        </div>

        <div>
          <label>Bottom Text</label>
          <input
            type="text"
            name="bottomText"
            onChange={inputChange}
            value={meme.bottomText}
            maxlength='26'
          >
          </input>
        </div>
      </div>

      <button className="getNewImageButton">Get a new meme image 🖼</button>

      <div className="meme">
        <div className="topText">{meme.topText}</div>
        <img src={meme.url} className="memeImage"></img>
        <div className="bottomText">{meme.bottomText}</div>
      </div>

    </main>
  )
}