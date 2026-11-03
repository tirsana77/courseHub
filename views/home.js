
import { layout } from "./layout.js";

export function homePage() {
  const content = `
    <section class="hero">
      <h1>Welcome to Campus University</h1>

      <p>
        Discover your future with us.
        Explore our academic programmes, find your interests
        and take the first step towards your career.
      </p>

      <a href="/programmes" class="button">
        Explore Programmes
      </a>
    </section>

    <section class="home-section">
      <h2>Why Choose Our University?</h2>

      <div class="feature-grid">
        <article class="feature-card">
          <h3>Quality Education</h3>
          <p>
            Explore academic programmes designed to develop
            your knowledge and skills.
          </p>
        </article>

        <article class="feature-card">
          <h3>Student Community</h3>
          <p>
            Become part of a welcoming campus community
            and enjoy student life.
          </p>
        </article>

        <article class="feature-card">
          <h3>Future Opportunities</h3>
          <p>
            Build your skills and prepare for your
            professional future.
          </p>
        </article>
      </div>
    </section>

    <section class="application-section">
      <h2>Ready to Start Your Journey?</h2>

      <p>
        Find the right programme and learn about
        admission requirements and application deadlines.
      </p>

      <a href="/programmes" class="button">
        Find Your Programme
      </a>
    </section>
  `;

  return layout("Home", content);
}
