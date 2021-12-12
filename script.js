console.log("👋");
async function fn() {
    let r= await fetch('https://meme-api.herokuapp.com/gimme');
    let data= await r.json();
    document.getElementById('meme').src=data.preview[0];
  }