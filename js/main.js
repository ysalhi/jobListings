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

function isInArray(array, value) {
  found = false;
  for (var m=0; m<array.length;m++) {
    if (array[m] === value) {
      found = true;
    }
  }
  return found;
}

function addFilter(filter) {
  if (filter.role != "" && filter.role != null) {
    filters.role = filter.role;
    filterDiv = document.createElement("div");
      filterDiv.classList.add("filter");
      filterButton = document.createElement("div");
      filterButton.classList.add("filterButton");
      filterButton.innerHTML = filter.role;
      deleteButton = document.createElement("div");
      deleteButton.classList.add("deleteButton")
      crossImg = document.createElement("img");
      crossImg.setAttribute("src", "./images/icon-remove.svg");
      deleteButton.appendChild(crossImg);
      deleteButton.setAttribute("onclick", `filterOffers("removeFilter", { role : "${filter.role}"})`);
      filterDiv.appendChild(filterButton);
      filterDiv.appendChild(deleteButton);
      document.getElementsByClassName("filterBox")[0].appendChild(filterDiv);
  }
  if (filter.level != "" && filter.level != null) {
    filters.level = filter.level;
    filterDiv = document.createElement("div");
      filterDiv.classList.add("filter");
      filterButton = document.createElement("div");
      filterButton.classList.add("filterButton");
      filterButton.innerHTML = filter.level;
      deleteButton = document.createElement("div");
      deleteButton.classList.add("deleteButton")
      crossImg = document.createElement("img");
      crossImg.setAttribute("src", "./images/icon-remove.svg");
      deleteButton.appendChild(crossImg);
      deleteButton.setAttribute("onclick", `filterOffers("removeFilter", { level : "${filter.level}"})`);
      filterDiv.appendChild(filterButton);
      filterDiv.appendChild(deleteButton);
      document.getElementsByClassName("filterBox")[0].appendChild(filterDiv);
  }
  if (filter.language != "" && filter.language != null) {
    let found = false;
    for (i = 0; i < filters.languages.length; i++) {
      if (filters.languages[i] === filter.language) {
        found = true;
      }
    }
    if (!found) {
      filters.languages.push(filter.language);
      filterDiv = document.createElement("div");
      filterDiv.classList.add("filter");
      filterButton = document.createElement("div");
      filterButton.classList.add("filterButton");
      filterButton.innerHTML = filter.language;
      deleteButton = document.createElement("div");
      deleteButton.classList.add("deleteButton")
      crossImg = document.createElement("img");
      crossImg.setAttribute("src", "./images/icon-remove.svg");
      deleteButton.appendChild(crossImg);
      deleteButton.setAttribute("onclick", `filterOffers("removeFilter", { language : "${filter.language}"})`);
      filterDiv.appendChild(filterButton);
      filterDiv.appendChild(deleteButton);
      document.getElementsByClassName("filterBox")[0].appendChild(filterDiv);
    }
  }
  if (filter.tool != "" && filter.tool != null) {
    let found = false;
    for (i = 0; i < filters.tools.length; i++) {
      if (filters.tools[i] === filter.tool) {
        found = true;
      }
    }
    if (!found) {
      filters.tools.push(filter.tool);
      filterDiv = document.createElement("div");
      filterDiv.classList.add("filter");
      filterButton = document.createElement("div");
      filterButton.classList.add("filterButton");
      filterButton.innerHTML = filter.tool;
      deleteButton = document.createElement("div");
      deleteButton.classList.add("deleteButton")
      crossImg = document.createElement("img");
      crossImg.setAttribute("src", "./images/icon-remove.svg");
      deleteButton.appendChild(crossImg);
      deleteButton.setAttribute("onclick", `filterOffers("removeFilter", { tool : "${filter.tool}"})`);
      filterDiv.appendChild(filterButton);
      filterDiv.appendChild(deleteButton);
      document.getElementsByClassName("filterBox")[0].appendChild(filterDiv);
    }
  }
}

function removeFilter(filter) {
  if (filter.role != "" && filter.role != null) {
    [].forEach.call(document.getElementsByClassName("filterBox")[0].childNodes, function(child) {

      if (child.hasChildNodes && child.nodeName != "#text" && child.childNodes[0].innerHTML === filter.role) {
        document.getElementsByClassName("filterBox")[0].removeChild(child);
      }
    });
    filters.role = "";
  }
  if (filter.level != "" && filter.level != null) {
    [].forEach.call(document.getElementsByClassName("filterBox")[0].childNodes, function(child) {

      if (child.hasChildNodes && child.nodeName != "#text" && child.childNodes[0].innerHTML === filter.level) {
        document.getElementsByClassName("filterBox")[0].removeChild(child);
      }
    });
    filters.level = "";
  }
  if (filter.language != "" && filter.language != null) {
    [].forEach.call(document.getElementsByClassName("filterBox")[0].childNodes, function(child) {

      if (child.hasChildNodes && child.nodeName != "#text" && child.childNodes[0].innerHTML === filter.language) {
        document.getElementsByClassName("filterBox")[0].removeChild(child);
      }
    });
    let i = filters.languages.indexOf(filter.language);
    if (i > -1) {
      filters.languages.splice(i, 1);
    }
  }
  if (filter.tool != "" && filter.tool != null) {
    [].forEach.call(document.getElementsByClassName("filterBox")[0].childNodes, function(child) {

      if (child.hasChildNodes && child.nodeName != "#text" && child.childNodes[0].innerHTML === filter.tool) {
        document.getElementsByClassName("filterBox")[0].removeChild(child);
      }
    });
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
  role.setAttribute("onclick", `filterOffers("addFilter", { role : "${data[tableIndex].role}"})`);

  var level = document.createElement("div");
  level.classList.add("tag");
  level.innerHTML = data[tableIndex].level;
  level.setAttribute("onclick", `filterOffers("addFilter", { level : "${data[tableIndex].level}"})`);

  tagsDiv.appendChild(role);
  tagsDiv.appendChild(level);

  for (j = 0; j < data[tableIndex].languages.length; j++) {
    language = document.createElement("div");
    language.classList.add("tag");
    language.innerHTML = data[tableIndex].languages[j];
    language.setAttribute("onclick", `filterOffers("addFilter", { language : "${data[tableIndex].languages[j]}"})`);
    tagsDiv.appendChild(language);
  }

  for (k = 0; k < data[tableIndex].tools.length; k++) {
    tool = document.createElement("div");
    tool.classList.add("tag");
    tool.innerHTML = data[tableIndex].tools[k];
    tool.setAttribute("onclick", `filterOffers("addFilter", { tool : "${data[tableIndex].tools[k]}"})`);
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
  // Filter offers
  if (filters.role != "" && filters.role != null) {
    for (i = 0; i < filteredOffers.length; i++) {
      if (filteredOffers[i].role != filters.role) {
        filteredOffers.splice(i, 1)
        i--;
      }
    }
  }
  if (filters.level != "" && filters.level != null) {
    for (i = 0; i < filteredOffers.length; i++) {
      if (filteredOffers[i].level != filters.level) {
        filteredOffers.splice(i, 1)
        i--;
      }
    }
  }

  if (filters.languages.length > 0 && filters.languages[0] != null) {
    for (i = 0; i < filteredOffers.length; i++) {
      for (j = 0; j < filters.languages.length; j++) {
        if (!isInArray(filteredOffers[i].languages, filters.languages[j])) {
          filteredOffers.splice(i, 1);
          i--;
        }
      }
    }
  }

  if (filters.tools.length > 0 && filters.tools[0] != null) {
    for (i = 0; i < filteredOffers.length; i++) {
      for (j = 0; j < filters.tools.length; j++) {
        if (!isInArray(filteredOffers[i].tools, filters.tools[j])) {
          filteredOffers.splice(i, 1);
          i--;
        }
      }
    }
  }

  // Render filtered offers
  // First, remove all childs of offersDiv
  var offersDiv = document.getElementsByClassName("offersDiv")[0];
  for (i = 0; i < offersDiv.childNodes.length; i++) {
    offersDiv.removeChild(offersDiv.childNodes[i]);
    i--;
  }
  for (i = 0; i < filteredOffers.length; i++) {
    renderOffer(filteredOffers[i].id - 1);
  }
} 