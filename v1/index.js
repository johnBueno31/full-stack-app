const initialFacts = [
    {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
    },
    {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
    },
    {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
    },
  ];

  const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];


// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list")


// Create DOM elements: Render facts in list
factsList.innerHTML = "";


// Load data from Supabase
loadFacts()

async function loadFacts() {
    const res = await fetch("https://ndiveuateejxzogoddpw.supabase.co/rest/v1/facts", {
        headers: {
            apikey: 
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kaXZldWF0ZWVqeHpvZ29kZHB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwNjY1ODYsImV4cCI6MjAyODY0MjU4Nn0.nZf_AqT2GCw3kWQNsjxp18kqFF3TEwNT-4p3tx4ToRo",
            authorization: 
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kaXZldWF0ZWVqeHpvZ29kZHB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwNjY1ODYsImV4cCI6MjAyODY0MjU4Nn0.nZf_AqT2GCw3kWQNsjxp18kqFF3TEwNT-4p3tx4ToRo",
        }
    });
    const data = await res.json();


    createFactsList(data)
}


function createFactsList(dataArray) {
    const htmlArr = dataArray.map((fact) => `<li class="fact">
                <p>
                  ${fact.text}
                    <a
                        class="source"
                        href=${fact.source}
                        target="_blank"
                        >(Source)
                    </a>
                </p>
                <span class="tag" style="background-color: ${CATEGORIES.find((cat) => cat.name === fact.category).color}"
                  >${fact.category}</span>
                  </li>`);

const html = htmlArr.join("")

factsList.insertAdjacentHTML("afterbegin", html)
}




// Toggle form visibility
btn.addEventListener("click", () => {
    
    if (form.classList.contains("hidden")) {

        form.classList.remove("hidden");
        btn.textContent = "Close"
    } else {
        form.classList.add("hidden")
        btn.textContent = "Share a Fact"
    }
})




// calulate age with current year. if it is negative then return an error message

// function calcAge(year) {
//     const currentYear = new Date().getFullYear();
//     const age = currentYear - year

//     if (year < currentYear) {
//         return `You are ${age} years old`;
//     } else {
//         return "Impossible year input."
//     }




// }

// const car = {
//     color: "black",
//     year: 2018,
//     model: "civic",
//     make: "honda",
//     lowMiles: true,
//     createSummary: function() {return `this ${this.make} ${this.model} is a ${this.color} and was made in ${this.year}`}
// }

// const { color, createSummary } = car;

// console.log(car.createSummary())


// const nums = [1,2,3,4,5]

// // nums.forEach(e => console.log(e * 2))

// const times2 = nums.map(e => e * 2)

// console.log(times2)

/*
const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];

const allCategories = CATEGORIES.map(el => el.name)

const initialFacts = [
    {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
    },
    {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
    },
    {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
    },
  ];

  const factAges = initialFacts.map((e) => new Date().getFullYear() - e.createdIn)
  

  console.log(factAges.join("-"))
  */