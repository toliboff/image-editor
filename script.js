const file = document.querySelector("#file");
const image = document.querySelector("#img");
const fileBtn = document.querySelector("#file-btn");
const filterName = document.querySelector("#filter-name");
const range = document.querySelector("#range");
const rangeValue = document.querySelector("#range-value");
const resetButton = document.querySelector("#reset-btn");

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
    console.log(button.name);
    range.value = filters[button.name];
    rangeValue.textContent = filters[button.name]+'%';
  })
});

range.addEventListener('change', (e)=>{
  const activeButton = document.querySelector('.filters .active-btn').name
  filters[activeButton] = e.target.value;
  rangeValue.textContent = filters[activeButton]+'%';
  console.log(filters)
});

