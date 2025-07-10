import { useState, useEffect } from 'react'

export default function Main() {

  const[meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    url: "https://wallpapers.com/images/featured/game-of-thrones-pictures-ad9d02jxoawpkpqg.jpg"
  })

  const [memeArr, setMemeArr] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setMemeArr(data.data.memes))
  }, [])

  function inputChange(e) {
    setMeme(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  function newImageClick() {
    let rand = Math.floor(Math.random() * memeArr.length)
    setMeme(prev => ({
      topText: '',
      bottomText: '',
      url: memeArr[rand].url
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
            maxLength='26'
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
            maxLength='26'
          >
          </input>
        </div>
      </div>

      <button className="getNewImageButton" onClick={newImageClick}>Get a new meme image 🖼</button>

      <div className="meme">
        <div className="topText">{meme.topText}</div>
        <img src={meme.url} className="memeImage"></img>
        <div className="bottomText">{meme.bottomText}</div>
      </div>

    </main>
  )
}