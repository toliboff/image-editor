const file = document.querySelector("#file");
const image = document.querySelector("#img");
const fileBtn = document.querySelector("#file-btn");
const filterName = document.querySelector("#filter-name");
const range = document.querySelector("#range");
const rangeValue = document.querySelector("#range-value");
const resetButton = document.querySelector("#reset-button");

const filters = {
  brightness:50, 
  saturation:50,
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
  const activeButton = document.querySelector('.filters .active-btn').name
  filters[activeButton] = e.target.value;
  rangeValue.textContent = filters[activeButton]+'%';
});

resetButton.addEventListener('click', ()=>{
  filters.brightness=50; 
  filters.saturation=50;
  filters.inversion=0;
  filters.grayscale=0;
  document.querySelector('[name="brightness"]').click()
});

const rotationButtons = document.querySelectorAll('.rotate-buttons button');
rotationButtons.forEach(button=>{
    button.addEventListener('click', (e)=>{
    console.log(e.target.name)
  })
});