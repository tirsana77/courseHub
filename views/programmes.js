
import { layout } from "./layout.js";

const programmes = [
  {
    name: "Computer Science",
    level: "Bachelor's Degree",
    duration: "3 years",
    description:
      "Learn programming, software development, databases and computer systems.",
    requirements: "Upper secondary education with relevant entry qualifications.",
    deadline: "Check the official admissions calendar."
  },
  {
    name: "Business Administration",
    level: "Bachelor's Degree",
    duration: "3 years",
    description:
      "Explore management, marketing, finance and entrepreneurship.",
    requirements: "Upper secondary education with relevant entry qualifications.",
    deadline: "Check the official admissions calendar."
  },
  {
    name: "Data Science",
    level: "Bachelor's Degree",
    duration: "3 years",
    description:
      "Study data analysis, statistics, programming and machine learning.",
    requirements: "Relevant mathematics and upper secondary qualifications.",
    deadline: "Check the official admissions calendar."
  }
];

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

export function programmesPage() {
  const cards = programmes.map((programme) => `
    <article class="programme-card">
      <h2>${escapeHTML(programme.name)}</h2>
      <p>${escapeHTML(programme.description)}</p>
      <p><strong>Level:</strong> ${escapeHTML(programme.level)}</p>
      <p><strong>Duration:</strong> ${escapeHTML(programme.duration)}</p>
      <details>
        <summary>Admission and application details</summary>
        <p><strong>Entry requirements:</strong>
          ${escapeHTML(programme.requirements)}</p>
        <p><strong>Application deadline:</strong>
          ${escapeHTML(programme.deadline)}</p>
      </details>
    </article>
  `).join("");

  const content = `
    <section class="page-intro">
      <h1>Explore Our Programmes</h1>
      <p>Discover a programme that matches your interests and future goals.</p>
    </section>

    <section aria-label="University programmes">
      <label for="programme-search">Search programmes</label>
      <input
        type="search"
        id="programme-search"
        placeholder="Search by programme name..."
      >

      <div class="programme-grid">
        ${cards}
      </div>
      <p id="no-results" hidden>No matching programmes found.</p>
    </section>

    <script>
      const searchInput = document.getElementById("programme-search");
      const programmeCards = document.querySelectorAll(".programme-card");
      const noResults = document.getElementById("no-results");

      searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;

        programmeCards.forEach((card) => {
          const matches = card.textContent.toLowerCase().includes(query);
          card.hidden = !matches;
          if (matches) visibleCount++;
        });

        noResults.hidden = visibleCount !== 0;
      });
    </script>
  `;

  return layout("Programmes", content);
}
