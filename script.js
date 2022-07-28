const file = document.querySelector("#file");
const image = document.querySelector("#img");
const fileBtn = document.querySelector("#file-btn");
const filterName = document.querySelector("#filter-name");
const range = document.querySelector("#range");
const rangeValue = document.querySelector("#range-value");
const resetButton = document.querySelector("#reset-button");
const canvas = document.querySelector("#canvas").getContext('2d');

let rotate = 0;
let flipX = -1;
let flipY = -1;
range.value = 100;
range.max=200

const filters = {
  brightness:100, 
  saturation:100,
  inversion:0,
  grayscale:0
};

file.addEventListener('change', (e)=>{
  const selectedImage = URL.createObjectURL(e.target.files[0]);
  image.src = selectedImage;
});

fileBtn.addEventListener('click', ()=>{
  file.click();
});

const filterButtons = document.querySelectorAll('.filters button');

filterButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
    document.querySelector('.filters .active-btn')?.classList.remove('active-btn')
    button.classList.add('active-btn');
    filterName.textContent = button.textContent;
    if(button.name=='brightness' || button.name=='saturation'){
      range.max = 200
    }
    else {
      range.max = 100
    }
    range.value = filters[button.name];
    rangeValue.textContent = filters[button.name]+'%';
    // drawImage()
  })
});

range.addEventListener('change', (e)=>{
  const activeButton = document.querySelector('.filters .active-btn').name;
 
  filters[activeButton] = e.target.value;
  rangeValue.textContent = filters[activeButton]+'%';
  image.style.filter = `brightness(${filters.brightness}%)  saturate(${filters.saturation}%) invert(${filters.inversion}%) grayscale(${filters.grayscale}%)`;
  drawImage()

});

resetButton.addEventListener('click', ()=>{
  filters.brightness=100; 
  filters.saturation=100;
  filters.inversion=0;
  filters.grayscale=0;
  image.style.transform = 'rotate(0deg)';
  document.querySelector('[name="brightness"]').click()
  image.style.filter = `brightness(${filters.brightness}%)  saturate(${filters.saturation}%) invert(${filters.inversion}%) grayscale(${filters.grayscale}%)`;
});

const rotationButtons = document.querySelectorAll('.rotate-buttons button');

rotationButtons.forEach(button=>{
    button.addEventListener('click', (e)=>{
      if(e.target.name=='left'){
        rotate-=90
      }else if(e.target.name=='right'){
        rotate+=90
      } else if(e.target.name=='up'){
        flipY=flipY==1?-1:1;
      }else {
        flipX=flipX==1?-1:1;
      }
   
      image.style.transform = `rotate(${rotate}deg) scale(${flipY}, ${flipX})`;
      drawImage()
  })
});

function drawImage(){
  canvas.drawImage(image, 0, 0, 300, 200)
  canvas.filter = `brightness(${filters.brightness}%)  saturate(${filters.saturation}%) invert(${filters.inversion}%) grayscale(${filters.grayscale}%)`
  canvas.transform = `rotate(${rotate}deg) scale(${flipY}, ${flipX})`
}

image.addEventListener('load', ()=>{
  if(file.files[0]){
      document.querySelector('#panel').classList.remove('disabled')
  }

})