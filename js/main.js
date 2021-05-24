var data = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: []
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"]
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: []
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"]
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"]
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"]
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"]
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"]
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  }
];

var filters = {
  role: "",
  level: "",
  languages: [],
  tools: []
};

function addFilter(filter) {
  if (filter.role != "") {
    filters.role = filter.role;
  }
  if (filter.level != "") {
    filters.level = filter.level;
  }
  if (filter.language != "") {
    let found = false;
    for (i = 0; i < filters.languages.length; i++) {
      if (filters.languages[i] === filter.language) {
        found = true;
      }
    }
    if (!found) {
      filters.languages.push(filter.language);
    }
  }
  if (filter.tool != "") {
    let found = false;
    for (i = 0; i < filters.tools.length; i++) {
      if (filters.tools[i] === filter.tool) {
        found = true;
      }
    }
    if (!found) {
      filters.tools.push(filter.tool);
    }
  }
}

function removeFilter(filter) {
  if (filter.role != "") {
    filters.role = "";
  }
  if (filter.level != "") {
    filters.level = "";
  }
  if (filter.language != "") {
    let i = filters.languages.indexOf(filter.language);
    if (i > -1) {
      filters.languages.splice(i, 1);
    }
  }
  if (filter.tool != "") {
    let i = filters.tools.indexOf(filter.tool);
    if (i > -1) {
      filters.tools.splice(i, 1);
    }
  }
}

for (var i = 0; i < data.length; i++) {
  renderOffer(i);
}

function renderOffer(tableIndex) {
  var offersDiv = document.getElementsByClassName("offersDiv")[0];

  var offer = document.createElement("div");
  offer.classList.add("offer");
  if (data[tableIndex].featured) {
    offer.classList.add("featuredOffer");
  }
  offer.setAttribute('id', data[tableIndex].id);
  offersDiv.appendChild(offer);

  var logo = document.createElement("img");
  logo.setAttribute('src', data[tableIndex].logo);
  offer.appendChild(logo);

  var offerDescription = document.createElement("div");
  offerDescription.classList.add("offerDescription");

  var companyInfo = document.createElement("div");
  companyInfo.classList.add("companyInfo");

  var companyName = document.createElement("div");
  companyName.classList.add("companyName");
  companyName.innerHTML = data[tableIndex].company;
  companyInfo.appendChild(companyName);

  if (data[tableIndex].new) {
    var newOffer = document.createElement("div");
    newOffer.classList.add("new");
    newOffer.innerHTML = "NEW!";
    companyInfo.appendChild(newOffer);
  }

  if (data[tableIndex].featured) {
    var featuredOffer = document.createElement("div");
    featuredOffer.classList.add("featured");
    featuredOffer.innerHTML = "FEATURED";
    companyInfo.appendChild(featuredOffer);
  }

  offerDescription.appendChild(companyInfo);

  var position = document.createElement("div");
  position.classList.add("position");
  position.innerHTML = data[tableIndex].position;

  offerDescription.appendChild(position);

  var positionInfo = document.createElement("div");
  positionInfo.classList.add("positionInfo");

  var middlePoint = document.createElement("div");
  middlePoint.classList.add("item");
  middlePoint.innerHTML = "<b>&#183;</b>";

  var postedAt = document.createElement("div");
  postedAt.classList.add("item");
  postedAt.innerHTML = data[tableIndex].postedAt;

  var contract = document.createElement("div");
  contract.classList.add("item");
  contract.innerHTML = data[tableIndex].contract;

  var location = document.createElement("div");
  location.classList.add("item");
  location.innerHTML = data[tableIndex].location;

  positionInfo.appendChild(postedAt);
  positionInfo.appendChild(middlePoint);
  positionInfo.appendChild(contract);
  positionInfo.appendChild(middlePoint);
  positionInfo.appendChild(location);

  offerDescription.appendChild(positionInfo);
  offer.appendChild(offerDescription);

  var tagsDiv = document.createElement("div");
  tagsDiv.classList.add("tagsDiv");

  var role = document.createElement("div");
  role.classList.add("tag");
  role.innerHTML = data[tableIndex].role;

  var level = document.createElement("div");
  level.classList.add("tag");
  level.innerHTML = data[tableIndex].level;

  tagsDiv.appendChild(role);
  tagsDiv.appendChild(level);

  for (j = 0; j < data[tableIndex].languages.length; j++) {
    language = document.createElement("div");
    language.classList.add("tag");
    language.innerHTML = data[tableIndex].languages[j];
    tagsDiv.appendChild(language);
  }

  for (k = 0; k < data[tableIndex].tools.length; k++) {
    tool = document.createElement("div");
    tool.classList.add("tag");
    tool.innerHTML = data[tableIndex].tools[k];
    tagsDiv.appendChild(tool);
  }

  offer.appendChild(tagsDiv);
}

function filterOffers(operation, selectedFilter) {
  var filteredOffers = [...data];
  if (operation === "addFilter") {
    addFilter(selectedFilter);
  } else {
    removeFilter(selectedFilter);
  }
  if (filters.role != "") {
    for (i = 0; i < filteredOffers.length; i++) {
      filteredOffers = [...data];
    }
  } 
}