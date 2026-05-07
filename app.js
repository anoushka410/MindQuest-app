const paths = [
  {
    id: "history",
    title: "History",
    icon: "🏛",
    color: "#d95f43",
    blurb: "Empires, revolutions, turning points, and the humans who made a mess of Tuesday.",
    lessons: [
      {
        title: "Ancient Power",
        questions: [
          {
            type: "choice",
            topic: "History",
            prompt: "Which river valley hosted one of the world’s earliest urban civilizations, including cities such as Ur and Uruk?",
            options: ["Tigris-Euphrates", "Amazon", "Danube", "Mississippi"],
            answer: "Tigris-Euphrates",
            explanation: "Sumerian city-states grew in Mesopotamia between the Tigris and Euphrates rivers."
          },
          {
            type: "choice",
            topic: "History",
            prompt: "What was the main purpose of the Code of Hammurabi?",
            options: ["To record laws and penalties", "To list royal recipes", "To map ocean routes", "To design aqueducts"],
            answer: "To record laws and penalties",
            explanation: "The Babylonian code is one of the best-known early written legal collections."
          },
          {
            type: "choice",
            topic: "History",
            prompt: "The Maurya Empire reached its greatest extent under which ruler?",
            options: ["Ashoka", "Akbar", "Ramses II", "Pericles"],
            answer: "Ashoka",
            explanation: "Ashoka ruled much of the Indian subcontinent in the 3rd century BCE and later promoted Buddhism."
          },
          {
            type: "truefalse",
            topic: "History",
            prompt: "The Roman Republic existed before the Roman Empire.",
            answer: "True",
            explanation: "The Republic traditionally dates from 509 BCE and preceded imperial rule under Augustus."
          }
        ]
      }
    ]
  },
  {
    id: "politics",
    title: "Politics",
    icon: "⚖",
    color: "#4f7cac",
    blurb: "Power, institutions, constitutions, elections, and the fine art of arguing with rules.",
    lessons: [
      {
        title: "How States Work",
        questions: [
          {
            type: "choice",
            topic: "Politics",
            prompt: "In political science, sovereignty usually means a state has what?",
            options: ["Supreme authority over its territory", "A permanent king", "No taxes", "A single official language"],
            answer: "Supreme authority over its territory",
            explanation: "Sovereignty is the recognized authority to govern a territory and population."
          },
          {
            type: "choice",
            topic: "Politics",
            prompt: "Which system divides government authority among executive, legislative, and judicial branches?",
            options: ["Separation of powers", "Mercantilism", "Feudalism", "Monopoly"],
            answer: "Separation of powers",
            explanation: "The idea limits concentrated power by assigning different functions to different branches."
          },
          {
            type: "truefalse",
            topic: "Politics",
            prompt: "A federal system shares authority between national and regional governments.",
            answer: "True",
            explanation: "Federal systems, such as India and the United States, divide powers across levels of government."
          },
          {
            type: "choice",
            topic: "Politics",
            prompt: "What does proportional representation generally try to match?",
            options: ["Seats to vote share", "Age to office rank", "Tax rates to rainfall", "Cabinet posts to city size"],
            answer: "Seats to vote share",
            explanation: "PR systems aim for legislative seats to reflect parties’ share of votes."
          }
        ]
      }
    ]
  },
  {
    id: "geography",
    title: "Geography",
    icon: "🧭",
    color: "#2f9d80",
    blurb: "Places, climates, maps, borders, rivers, and why mountains keep interrupting history.",
    lessons: [
      {
        title: "Planet Basics",
        questions: [
          {
            type: "choice",
            topic: "Geography",
            prompt: "Which line of latitude is at 0 degrees?",
            options: ["Equator", "Tropic of Cancer", "Arctic Circle", "Prime Meridian"],
            answer: "Equator",
            explanation: "The Equator divides Earth into the Northern and Southern hemispheres."
          },
          {
            type: "choice",
            topic: "Geography",
            prompt: "Which desert is the largest hot desert on Earth?",
            options: ["Sahara", "Gobi", "Kalahari", "Atacama"],
            answer: "Sahara",
            explanation: "Antarctica is the largest desert overall, but the Sahara is the largest hot desert."
          },
          {
            type: "choice",
            topic: "Geography",
            prompt: "The Andes mountain range runs mainly along which continent?",
            options: ["South America", "Europe", "Australia", "Africa"],
            answer: "South America",
            explanation: "The Andes stretch along western South America from Venezuela toward Chile and Argentina."
          },
          {
            type: "truefalse",
            topic: "Geography",
            prompt: "The Prime Meridian passes through Greenwich, England.",
            answer: "True",
            explanation: "Greenwich is the reference point for 0 degrees longitude."
          }
        ]
      }
    ]
  },
  {
    id: "mind",
    title: "Psychology",
    icon: "🧠",
    color: "#b85aa8",
    blurb: "Memory, bias, behavior, personality, and the mind doing jazz in the background.",
    lessons: [
      {
        title: "Thinking Traps",
        questions: [
          {
            type: "choice",
            topic: "Psychology",
            prompt: "Confirmation bias is the tendency to favor information that does what?",
            options: ["Supports existing beliefs", "Uses large fonts", "Comes from strangers", "Is written recently"],
            answer: "Supports existing beliefs",
            explanation: "Confirmation bias makes people notice and value evidence that fits what they already think."
          },
          {
            type: "choice",
            topic: "Psychology",
            prompt: "Which memory system holds small amounts of information briefly while you use it?",
            options: ["Working memory", "Episodic memory", "Procedural memory", "Genetic memory"],
            answer: "Working memory",
            explanation: "Working memory helps you hold and manipulate information in the moment."
          },
          {
            type: "truefalse",
            topic: "Psychology",
            prompt: "Classical conditioning was famously studied by Ivan Pavlov.",
            answer: "True",
            explanation: "Pavlov’s experiments with dogs helped establish classical conditioning."
          },
          {
            type: "choice",
            topic: "Psychology",
            prompt: "The Big Five personality model includes openness, conscientiousness, extraversion, agreeableness, and what?",
            options: ["Neuroticism", "Nostalgia", "Ambition", "Humor"],
            answer: "Neuroticism",
            explanation: "The Big Five traits are often abbreviated as OCEAN."
          }
        ]
      }
    ]
  },
  {
    id: "philosophy",
    title: "Philosophy",
    icon: "💭",
    color: "#7961c9",
    blurb: "Reality, ethics, knowledge, meaning, and people asking suspiciously large questions.",
    lessons: [
      {
        title: "Big Questions",
        questions: [
          {
            type: "choice",
            topic: "Philosophy",
            prompt: "Epistemology is mainly the study of what?",
            options: ["Knowledge", "Volcanoes", "Elections", "Muscle tissue"],
            answer: "Knowledge",
            explanation: "Epistemology asks what knowledge is and how we can justify beliefs."
          },
          {
            type: "choice",
            topic: "Philosophy",
            prompt: "Utilitarian ethics is often summarized as seeking what?",
            options: ["The greatest good for the greatest number", "Rule by philosophers", "Complete solitude", "Perfect symmetry"],
            answer: "The greatest good for the greatest number",
            explanation: "Utilitarianism evaluates actions by their consequences for overall welfare."
          },
          {
            type: "truefalse",
            topic: "Philosophy",
            prompt: "Socrates wrote many surviving philosophical books himself.",
            answer: "False",
            explanation: "Socrates left no known writings; we know him largely through Plato and others."
          },
          {
            type: "choice",
            topic: "Philosophy",
            prompt: "In Plato’s allegory of the cave, the cave represents what kind of condition?",
            options: ["Mistaking appearances for reality", "Perfect scientific method", "A farming calendar", "A legal contract"],
            answer: "Mistaking appearances for reality",
            explanation: "The allegory explores education, illusion, and the difficult turn toward truth."
          }
        ]
      }
    ]
  },
  {
    id: "religion",
    title: "Religion",
    icon: "🕯",
    color: "#c88b31",
    blurb: "Traditions, texts, rituals, symbols, and humanity’s long conversation with the sacred.",
    lessons: [
      {
        title: "World Traditions",
        questions: [
          {
            type: "choice",
            topic: "Religion",
            prompt: "The Four Noble Truths are central to which tradition?",
            options: ["Buddhism", "Shinto", "Zoroastrianism", "Sikhism"],
            answer: "Buddhism",
            explanation: "They describe suffering, its cause, its cessation, and a path toward liberation."
          },
          {
            type: "choice",
            topic: "Religion",
            prompt: "The Torah is especially central to which religion?",
            options: ["Judaism", "Taoism", "Jainism", "Confucianism"],
            answer: "Judaism",
            explanation: "The Torah contains the first five books of the Hebrew Bible."
          },
          {
            type: "truefalse",
            topic: "Religion",
            prompt: "The Hajj is a pilgrimage associated with Islam.",
            answer: "True",
            explanation: "The Hajj to Mecca is one of the Five Pillars of Islam for those able to undertake it."
          },
          {
            type: "choice",
            topic: "Religion",
            prompt: "Dharma is an important concept in Hinduism, Buddhism, Jainism, and Sikhism. It broadly relates to what?",
            options: ["Duty, order, or teaching", "Ocean navigation", "Coin minting", "Military rank"],
            answer: "Duty, order, or teaching",
            explanation: "The meaning varies by tradition, but it often concerns cosmic order, right conduct, or teachings."
          }
        ]
      }
    ]
  },
  {
    id: "science",
    title: "Science",
    icon: "🔬",
    color: "#277da1",
    blurb: "Matter, life, energy, experiments, and why evidence keeps asking for a badge.",
    lessons: [
      {
        title: "Scientific Habits",
        questions: [
          {
            type: "choice",
            topic: "Science",
            prompt: "A scientific hypothesis should usually be what?",
            options: ["Testable", "Unchangeable", "Secret", "Based only on authority"],
            answer: "Testable",
            explanation: "Science relies on claims that can be checked against evidence."
          },
          {
            type: "choice",
            topic: "Science",
            prompt: "DNA’s double-helix structure helps explain how cells do what?",
            options: ["Store and copy genetic information", "Produce gravity", "Block all mutations", "Turn light into sound"],
            answer: "Store and copy genetic information",
            explanation: "Base pairing lets DNA encode information and replicate."
          },
          {
            type: "truefalse",
            topic: "Science",
            prompt: "In physics, energy can be created from nothing in ordinary closed systems.",
            answer: "False",
            explanation: "The law of conservation of energy says total energy in a closed system remains constant."
          },
          {
            type: "choice",
            topic: "Science",
            prompt: "What does peer review primarily help scientists do?",
            options: ["Evaluate methods and claims before publication", "Choose journal cover colors", "Avoid all errors forever", "Turn opinions into facts"],
            answer: "Evaluate methods and claims before publication",
            explanation: "Peer review is imperfect, but it adds expert scrutiny to research claims."
          }
        ]
      }
    ]
  },
  {
    id: "space",
    title: "Space",
    icon: "🪐",
    color: "#334e9e",
    blurb: "Planets, stars, galaxies, cosmic history, and the universe being wildly extra.",
    lessons: [
      {
        title: "Cosmic Scale",
        questions: [
          {
            type: "choice",
            topic: "Space",
            prompt: "A light-year measures what?",
            options: ["Distance", "Time", "Brightness", "Temperature"],
            answer: "Distance",
            explanation: "A light-year is the distance light travels in one year."
          },
          {
            type: "choice",
            topic: "Space",
            prompt: "Which force keeps planets in orbit around the Sun?",
            options: ["Gravity", "Magnetism only", "Friction", "Chemical bonding"],
            answer: "Gravity",
            explanation: "Gravity pulls planets toward the Sun while their motion carries them forward."
          },
          {
            type: "truefalse",
            topic: "Space",
            prompt: "The Milky Way is a galaxy.",
            answer: "True",
            explanation: "Our Solar System is part of the Milky Way galaxy."
          },
          {
            type: "choice",
            topic: "Cosmology",
            prompt: "The cosmic microwave background is often described as evidence for what?",
            options: ["The Big Bang model", "Earth being flat", "The Sun orbiting Earth", "Stars being cold"],
            answer: "The Big Bang model",
            explanation: "It is leftover radiation from the early universe, now cooled to microwave wavelengths."
          }
        ]
      }
    ]
  }
];

const guideLines = [
  "Tiny lesson, large brain swagger.",
  "Your neurons have entered group chat.",
  "Correct answers get confetti. Incorrect answers get character development.",
  "I believe in you with academically irresponsible intensity.",
  "Today we defeat ignorance with buttons."
];

const state = {
  view: "paths",
  session: null,
  progress: loadProgress()
};

function loadProgress() {
  const fallback = {
    xp: 0,
    streak: 0,
    lastPlayed: "",
    completed: {},
    misses: []
  };

  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem("mindquest-progress")) };
  } catch {
    return fallback;
  }
}

function saveProgress() {
  localStorage.setItem("mindquest-progress", JSON.stringify(state.progress));
}

function allQuestions() {
  return paths.flatMap((path) =>
    path.lessons.flatMap((lesson) =>
      lesson.questions.map((question, index) => ({
        ...question,
        id: `${path.id}-${lesson.title}-${index}`,
        pathId: path.id,
        pathTitle: path.title,
        lessonTitle: lesson.title
      }))
    )
  );
}

function sampleQuestions(count) {
  return [...allQuestions()].sort(() => Math.random() - 0.5).slice(0, count);
}

function updateStats() {
  const completedCount = Object.keys(state.progress.completed).length;
  const totalCount = allQuestions().length;
  const mastery = totalCount ? Math.round((completedCount / totalCount) * 100) : 0;

  document.querySelector("#xpValue").textContent = state.progress.xp;
  document.querySelector("#streakValue").textContent = state.progress.streak;
  document.querySelector("#masteryValue").textContent = `${mastery}%`;
}

function setGuideLine(line) {
  document.querySelector("#guideLine").textContent =
    line || guideLines[Math.floor(Math.random() * guideLines.length)];
}

function renderPaths() {
  const grid = document.querySelector("#pathGrid");
  grid.innerHTML = paths
    .map((path) => {
      const questions = path.lessons.flatMap((lesson) => lesson.questions);
      const done = questions.filter((question, index) => {
        const id = `${path.id}-${path.lessons[0].title}-${index}`;
        return state.progress.completed[id];
      }).length;
      const percent = Math.round((done / questions.length) * 100);

      return `
        <article class="path-card" style="--accent:${path.color}">
          <div class="path-icon" aria-hidden="true">${path.icon}</div>
          <div>
            <p class="eyebrow">${path.lessons[0].title}</p>
            <h3>${path.title}</h3>
            <p>${path.blurb}</p>
          </div>
          <div class="card-progress">
            <span>${percent}%</span>
            <div><i style="width:${percent}%"></i></div>
          </div>
          <button class="secondary-action" data-start-path="${path.id}">Start lesson</button>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-start-path]").forEach((button) => {
    button.addEventListener("click", () => startPath(button.dataset.startPath));
  });
}

function renderDailyPreview() {
  const preview = document.querySelector("#dailyPreview");
  preview.innerHTML = paths
    .slice(0, 6)
    .map((path) => `<div class="topic-pill" style="--accent:${path.color}">${path.icon}<span>${path.title}</span></div>`)
    .join("");
}

function renderReview() {
  const misses = state.progress.misses.slice(-8).reverse();
  const list = document.querySelector("#reviewList");
  document.querySelector("#reviewSummary").textContent = misses.length
    ? `${misses.length} missed question${misses.length === 1 ? "" : "s"} ready for round two.`
    : "Missed questions will collect here for extra practice.";

  list.innerHTML = misses.length
    ? misses.map((item) => `<div class="review-item"><strong>${item.topic}</strong><span>${item.prompt}</span></div>`).join("")
    : `<div class="empty-state">No review items yet. Suspiciously competent.</div>`;
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  document.querySelectorAll(".view").forEach((panel) => panel.classList.remove("active"));
  document.querySelector("#lessonView").classList.remove("active");
  document.querySelector(`#${view}View`).classList.add("active");

  const copy = {
    paths: ["Choose a path", "Build a sharper map of the world.", "Pick a lane. I will bring tiny flags."],
    daily: ["Daily quiz", "A mixed quiz for the generally curious.", "Seven questions enter. Your brain leaves taller."],
    review: ["Review", "Turn misses into mastery.", "We respect mistakes here. Then we make them nervous."]
  };
  document.querySelector("#viewEyebrow").textContent = copy[view][0];
  document.querySelector("#viewTitle").textContent = copy[view][1];
  setGuideLine(copy[view][2]);
}

function startPath(pathId) {
  const path = paths.find((item) => item.id === pathId);
  const questions = path.lessons[0].questions.map((question, index) => ({
    ...question,
    id: `${path.id}-${path.lessons[0].title}-${index}`,
    pathTitle: path.title,
    lessonTitle: path.lessons[0].title
  }));

  startSession(`${path.title}: ${path.lessons[0].title}`, questions);
}

function startDaily() {
  startSession("Daily Quiz", sampleQuestions(7));
}

function startReview() {
  const missedIds = new Set(state.progress.misses.map((miss) => miss.id));
  const questions = allQuestions().filter((question) => missedIds.has(question.id)).slice(0, 8);
  if (!questions.length) {
    setGuideLine("Nothing to review. You are either brilliant or just getting started.");
    return;
  }
  startSession("Review", questions);
}

function startSession(title, questions) {
  state.session = {
    title,
    questions,
    index: 0,
    correct: 0,
    answered: false
  };

  document.querySelectorAll(".view").forEach((panel) => panel.classList.remove("active"));
  document.querySelector("#lessonView").classList.add("active");
  document.querySelector("#viewEyebrow").textContent = "Lesson";
  document.querySelector("#viewTitle").textContent = title;
  setGuideLine("Eyes forward. Brain cape on.");
  renderQuestion();
}

function renderQuestion() {
  const session = state.session;
  const question = session.questions[session.index];
  session.answered = false;

  document.querySelector("#lessonProgress").style.width = `${(session.index / session.questions.length) * 100}%`;
  document.querySelector("#lessonCounter").textContent = `${session.index + 1} / ${session.questions.length}`;
  document.querySelector("#questionTopic").textContent = question.topic;
  document.querySelector("#questionText").textContent = question.prompt;
  document.querySelector("#answerFeedback").className = "answer-feedback";
  document.querySelector("#answerFeedback").textContent = "";
  document.querySelector("#nextQuestionBtn").classList.add("hidden");

  const body = document.querySelector("#questionBody");
  const options = question.type === "truefalse" ? ["True", "False"] : question.options;
  body.innerHTML = options
    .map((option) => `<button class="answer-option" data-answer="${escapeHtml(option)}">${option}</button>`)
    .join("");

  document.querySelectorAll(".answer-option").forEach((button) => {
    button.addEventListener("click", () => answerQuestion(button.dataset.answer));
  });
}

function answerQuestion(answer) {
  const session = state.session;
  if (session.answered) return;

  const question = session.questions[session.index];
  const correct = answer === question.answer;
  session.answered = true;

  document.querySelectorAll(".answer-option").forEach((button) => {
    button.disabled = true;
    button.classList.toggle("correct", button.dataset.answer === question.answer);
    button.classList.toggle("incorrect", button.dataset.answer === answer && !correct);
  });

  const feedback = document.querySelector("#answerFeedback");
  feedback.classList.add(correct ? "correct" : "incorrect");
  feedback.textContent = `${correct ? "Nice." : "Not quite."} ${question.explanation}`;
  document.querySelector("#nextQuestionBtn").classList.remove("hidden");

  if (correct) {
    session.correct += 1;
    state.progress.completed[question.id] = true;
    state.progress.misses = state.progress.misses.filter((miss) => miss.id !== question.id);
  } else if (!state.progress.misses.some((miss) => miss.id === question.id)) {
    state.progress.misses.push({
      id: question.id,
      topic: question.topic,
      prompt: question.prompt
    });
  }
}

function nextQuestion() {
  const session = state.session;
  session.index += 1;
  if (session.index < session.questions.length) {
    renderQuestion();
    return;
  }

  finishSession();
}

function finishSession() {
  const session = state.session;
  const earned = session.correct * 10;
  state.progress.xp += earned;

  const today = new Date().toISOString().slice(0, 10);
  if (state.progress.lastPlayed !== today) {
    state.progress.streak += 1;
    state.progress.lastPlayed = today;
  }

  saveProgress();
  state.session = null;
  document.querySelector("#lessonProgress").style.width = "100%";
  setView("paths");
  renderAll();
  setGuideLine(`You earned ${earned} XP. The facts are trembling politely.`);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function renderAll() {
  updateStats();
  renderPaths();
  renderDailyPreview();
  renderReview();
}

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => setView(item.dataset.view));
});

document.querySelector("#startDailyBtn").addEventListener("click", startDaily);
document.querySelector("#startReviewBtn").addEventListener("click", startReview);
document.querySelector("#nextQuestionBtn").addEventListener("click", nextQuestion);
document.querySelector("#exitLessonBtn").addEventListener("click", () => {
  state.session = null;
  setView("paths");
});

renderAll();
