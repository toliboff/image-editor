const file = document.querySelector("#file");
const image = document.querySelector("#img");
const fileBtn = document.querySelector("#file-btn");
const filterName = document.querySelector("#filter-name");
const range = document.querySelector("#range");
const rangeValue = document.querySelector("#range-value");
const resetButton = document.querySelector("#reset-button");

const rotate = 0;
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
    range.value = filters[button.name];
    rangeValue.textContent = filters[button.name]+'%';
  })
});

range.addEventListener('change', (e)=>{
  const activeButton = document.querySelector('.filters .active-btn').name;
  if(activeButton=='brightness' || activeButton=='saturation'){
    range.max = 200
  }
  else {
    range.max = 100
  }
  filters[activeButton] = e.target.value;
  rangeValue.textContent = filters[activeButton]+'%';
  image.style.filter = `brightness(${filters.brightness}%)  saturate(${filters.saturation}%) invert(${filters.inversion}%) grayscale(${filters.grayscale}%)`;
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
         image.style.transform = `rotate(${rotate}deg)`;
      }else if(e.target.name=='right'){
        image.style.transform = 'rotate(90deg)';
      } else if(e.target.name=='up'){
        image.style.transform = 'scaleY(-1)';
      }else {
        image.style.transform = 'scaleX(-1)';
      }
   
    console.log('Left');
  })
});