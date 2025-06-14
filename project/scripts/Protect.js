const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navBar.classList.toggle('show');
  });
  
// Dynamically set current year in footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("footer-year");
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
});

const tasks = [
  "Use strong, unique passwords",
  "Enable two-factor authentication",
  "Avoid clicking suspicious links",
  "Update your software regularly",
  "Lock your devices when not in use"
];

function renderChecklist() {
  const list = document.getElementById("checklist-items");
  list.innerHTML = tasks.map((task, i) => {
    const checked = localStorage.getItem(`task-${i}`) === "true" ? "checked" : "";
    return `<li>
      <label>
        <input type="checkbox" data-index="${i}" ${checked}>
        ${task}
      </label>
    </li>`;
  }).join("");
}

renderChecklist();


document.getElementById("checklist-items").addEventListener("change", (e) => {
  if (e.target.matches("input[type='checkbox']")) {
    const index = e.target.dataset.index;
    localStorage.setItem(`task-${index}`, e.target.checked);
  }
});

document.getElementById("save").addEventListener("click", () => {
  alert("Progress saved!");
});

document.getElementById("clear").addEventListener("click", () => {
  tasks.forEach((_, i) => localStorage.removeItem(`task-${i}`));
  renderChecklist(); // Refresh
});



// QUIZ SECTION

const questions = [
    {
      question: "What is phishing?",
      choices: ["A hacking tool", "A type of firewall", "A scam to steal personal info", "An antivirus software"],
      correct: 2
    },
    {
      question: "Why should you use a strong password?",
      choices: ["To access your email", "To confuse your friends", "To avoid getting hacked", "To use emojis"],
      correct: 2
    },
    // Add more questions as needed
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  const quizContainer = document.getElementById("quiz-container");
  const nextBtn = document.getElementById("next-btn");

  function showQuestion() {
    const current = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
      <div class="question">
        <p>${current.question}</p>
        <ul>
          ${current.choices.map((choice, index) => `
            <li><button class="choice-btn" data-index="${index}">${choice}</button></li>
          `).join('')}
        </ul>
      </div>
    `;

    // Add listeners to choice buttons
    document.querySelectorAll(".choice-btn").forEach(btn => {
      btn.addEventListener("click", selectAnswer);
    });
  }

  function selectAnswer(event) {
    const selected = parseInt(event.target.getAttribute("data-index"));
    const correct = questions[currentQuestionIndex].correct;

    if (selected === correct) {
      event.target.style.backgroundColor = "#c8e6c9"; // green
      score++;
    } else {
      event.target.style.backgroundColor = "#ffcdd2"; // red
    }

    // Disable all buttons after answer is selected
    document.querySelectorAll(".choice-btn").forEach(btn => {
      btn.disabled = true;
    });
  }

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  });

  function showResults() {
    quizContainer.innerHTML = `
      <div class="results">
        <p>You got ${score} out of ${questions.length} correct!</p>
      </div>
    `;
    nextBtn.style.display = "none";
  }

  // Show first question on load
  showQuestion();

// Tips

const tips = [
  "Use a password manager to stay organized",
  "Never share your login details with anyone",
  "A legitmate site will never ask you for your lgin details",
  "longer passwords are way better than short complex passwords!",
  "Most hacks happen through social engineering. So don't share sensitive info"
]

const tipsContainer = document.getElementById("tips-container");

let currentTipsIndex = 0;

function ShowTips(tipsList){
  const currentTip = tipsList[currentTipsIndex];
  tipsContainer.innerHTML = `<p>${currentTip}</p>`;
};

document.getElementById("next-tip").addEventListener('click', () => {
  currentTipsIndex ++;
  if (currentTipsIndex >= tips.length) {
    currentTipsIndex -= tips.length;
    ShowTips(tips);
  }
  ShowTips(tips);

});

document.getElementById("previous-tip").addEventListener('click', () => {
  if (currentTipsIndex > 0) {
    currentTipsIndex--;
  } else {
    currentTipsIndex = tips.length - 1; // Loop to the last tip
  }
  ShowTips(tips);
});


ShowTips(tips);
