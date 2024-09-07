var output


window.onload =  getData('itzblack');
async function getData(user) {
    const endpoint = 'https://ch.tetr.io/api/users/';
    try {
      const response = await fetch(endpoint + user);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      output = json;
    } catch (error) {
      console.warn(error.message);
    }
}
function drawInit(){
  let c = document.getElementById("canvas");
  let ctx = c.getContext("2d");
    ctx.rect(0 , 10 , canvas.width, canvas.height);
    ctx.fillStyle = '#45794f';
    ctx.fill();

    drawImage('https://tetr.io/user-content/banners/' + output.data._id+ '.jpg?rv=' + output.data.banner_revision , 0, 10, canvas.width, canvas.height/4)

    drawImage('https://tetr.io/user-content/avatars/' + output.data._id+ '.jpg?rv=' + output.data.avatar_revision , 5, 0, canvas.width / 7, canvas.width / 7)
}

function drawImage(link, x, y, width, height){
  let c = document.getElementById("canvas");
  let ctx = c.getContext("2d");

    const img = new Image();

    img.addEventListener("load", () => {
      ctx.drawImage(img, x, y, width, height);
    });

    img.src = link;
}

