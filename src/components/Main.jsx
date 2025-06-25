export default function Main() {
  return (
    <main>

      <div className="formContainer">
        <div>
          <label>Top Text</label>
          <input type="text"></input>
        </div>

        <div>
          <label>Bottom Text</label>
          <input type="text"></input>
        </div>
      </div>

      <button className="getNewImageButton">Get a new meme image 🖼</button>

      <div className="meme">
        <div className="topText">Top writiogt</div>
        <img src="https://wallpapers.com/images/featured/game-of-thrones-pictures-ad9d02jxoawpkpqg.jpg" className="memeImage"></img>
        <div className="bottomText">Bottom writiogt</div>
      </div>

    </main>
  )
}