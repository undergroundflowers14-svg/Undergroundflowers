const svgs = ['svg/rose.svg','svg/tulip.svg'];
const container = document.getElementById('gallery');
svgs.forEach(path=>{
 fetch(path)
  .then(res=>res.text())
  .then(svg=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = svg + `<div>${path.split('/').pop()}</div>`;
    container.appendChild(card);
  })
  .catch(err=> console.error('Failed to load',path,err));
});
