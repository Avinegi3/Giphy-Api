let s=document.getElementById("search");
const img=document.getElementById("image");
let result=" ";
function search(){

  const api=`https://api.giphy.com/v1/gifs/search?api_key=LSYkgPK2x6gL2awM27ESoSiz4izgML8q&q=${document.getElementById("search").value}`;
  let f=fetch(api)
  f.then(function(res){
    res.json()
    .then(function(json){
     json.data.forEach(function(x){
      const url= x.images.fixed_width.url;
      const width=x.images.fixed_width.width;
      const height=x.images.fixed_width.height;
      result+=`<img src="${url}" width="${width}" height="${height}" alt="img"/>`;
     })
      
      img.innerHTML=result;   
      
    })
  
})
}





function Post(){
let div = document.createElement("div");
div.innerHTML= `<h3>${document.getElementById("input1").value}</h3> 
  <p>${document.getElementById("input2").value}</p>`;
   
   div.classList.add("card");
document.body.appendChild(div);

}