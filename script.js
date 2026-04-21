
window.onload = () => {
  const raffleGrid = document.getElementById('raffleGrid');

  const names = {
    "05": "nicoly",
    "07": "hallaf",
    "11": "jaque",
    "12": "gizelle",
    "19": "dayane",
    "25": "gizelle",
    "32": "dj marcinho",
	"28": "stefany",
	"09": "cristiane",
	"14": "cristiane",
	"02": "beijamira",
	"24": "beijamira",
	"10": "adriano",
	"42": "jaik",
	"18": "hiza",
	"45": "silvana lobo",
	"50": "bianca",
	"27": "hyank",  
	"17": "hyank",
	"31": "danilo",
	"21": "nandin",
	"13": "carol",
	"23": "carol",
	"20": "bruno",
	"04": "bruno",  
    "33": "adrielle"
  };

  function format(n){
    return String(n).padStart(2,'0');
  }

  function render(){
    raffleGrid.innerHTML = "";

    for(let i=1;i<=50;i++){
      let num = format(i);
      let name = names[num];

      let div = document.createElement('div');
      div.className = "number-card " + (name ? "taken":"");

      div.innerHTML = `
        <div class="num">${num}</div>
        <div class="name">${name || "Disponível"}</div>
      `;

      raffleGrid.appendChild(div);
    }
  }

  function snow(){
    const container = document.querySelector('.snow');
    const emojis = ["✨","⭐","💙"];

    setInterval(()=>{
      let e = document.createElement('span');
      e.innerText = emojis[Math.floor(Math.random()*emojis.length)];
      e.style.left = Math.random()*100+"vw";
      e.style.fontSize = (Math.random()*8+12)+"px";
      e.style.animationDuration = (Math.random()*10+8)+"s";

      container.appendChild(e);

      setTimeout(()=>e.remove(),12000);
    },500);
  }

  render();
  snow();
};
