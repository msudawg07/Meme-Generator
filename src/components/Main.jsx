import { useState, useEffect } from 'react'

export default function Main() {

  const[meme, setMeme] = useState({
    topText: 'Top Text Goes Here',
    bottomText: 'Bottom Text Goes Here',
    url: "https://wallpapers.com/images/featured/game-of-thrones-pictures-ad9d02jxoawpkpqg.jpg"
  })

  const [memeArr, setMemeArr] = useState([])

  const [randNum, setRandNum] = useState()

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setMemeArr(data.data.memes))
  }, [])

  // console.log(memeArr)

  // if(memeArr) {
  //   memeArr.forEach(m => console.log(m.url))
  // }



  // let rand = Math.floor(Math.random() * 100)
  useEffect(() => {
    if(memeArr.length > 0) {
      setMeme(prev => ({
        ...prev,
        url: memeArr[randNum].url
      }))
    }
  }, [randNum])


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

      <button className="getNewImageButton" onClick={() => setRandNum(Math.floor(Math.random() * 100))}>Get a new meme image 🖼</button>

      <div className="meme">
        <div className="topText">{meme.topText}</div>
        <img src={meme.url} className="memeImage"></img>
        <div className="bottomText">{meme.bottomText}</div>
      </div>

    </main>
  )
}