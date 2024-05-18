let intro = document.querySelector(".intro");
let rest = document.querySelector(".rest");
let leftBtn = document.querySelector(".leftBtn");
let rightBtn = document.querySelector(".rightBtn");

let index = 0;
let arr = [
  {
    content:
      "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
    name: "Eva Sawyer",
    picture: "img/profile-image-1.png",
    role: "CEO, Fashworks",
  },
  {
    content:
      "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
    name: "Katey Topaz",
    picture: "img/profile-image-2.png",
    role: "Developer, TechCrew",
  },
  {
    content:
      "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
    name: "Jae Robin",
    picture: "img/profile-image-3.png",
    role: "UI Designer, Affinity Agency",
  },
  {
    content:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    name: "Nicola Blakely",
    picture: "img/profile-image-4.png",
    role: "CEO, Zeal Wheels",
  },
];

function backBtn() {
  if (index === 0) {
    index = 3;
  } else {
    index = index - 1;
  }
  intro.innerHTML = `<p>${arr[index].content}</p>`;
  let restHTML = `<img src="${arr[index].picture}" alt="">
<h4 class="name">${arr[index].name}</h4>
<h6 class="position">${arr[index].role}</h6>
`;

  rest.innerHTML = restHTML;
}

function forwardBtn() {
  if (index === 3) {
    index === 0;
  } else {
    index = index + 1;
  }
  intro.innerHTML = `<p>${arr[index].content}</p>`;
  let restHTML = `<img src="${arr[index].picture}" alt="">
<h4 class="name">${arr[index].name}</h4>
<h6 class="position">${arr[index].role}</h6>
`;

  rest.innerHTML = restHTML;
}

leftBtn.addEventListener("click", backBtn);
rightBtn.addEventListener("click", forwardBtn);
