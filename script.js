// Declare your genre arrays here
let womenHoodies=["https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRNmeNKMtA3O97ge6mMgdbU7HofP_llVug4rUrlJwcLP6E0qSWO21MjmNPdLqMOi2NYqQylD40ZYVnEbWAsgNpC9WwPjsfHoe6Sx-G_zMX7VeNhsH_cDjmAdw","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRgv7z8agOITH5xrpylkptxjUJ2Z1VjiAGmVhHXUcbCeyvGA_60EwywCexU2Wd3u6JlOF7WSCvH9hqFUvIny0TAXAHit4ipdSeSFQUQyeTSUUhA7cjEPZpAKg","https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8NtIRW5jAxTRxctYqol5O19PV0ryowWhE1Qi7Pn3UabTBhnVxXWEC2pnpaG4Ia_h2Y9vqgwqaqDj4S15U7CQhO7enH0kCuoF3oVzZQrby5J-Aw1GwCH0S5Q"]


// Make sure to declare your HTML elements as variables! 
let suggestBtn=document.querySelector(".suggest");
let genreInput=document.querySelector(".genre");
let suggestInput=document.querySelector(".links");
let clothes=document.querySelector(".clothes");
// Submit Button 
let submitButton = document.querySelector(".submit");
submitButton.onclick = function() { 
  if(genreInput.value === "Clothes" || genreInput.value==="clothes"){
    for(let hoodies of womenHoodies){
      clothes.insertAdjacentHTML("afterbegin","<img src=" + hoodies + ">")
    }
  }
};


