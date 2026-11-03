
import { layout } from "./layout.js";

export function loginPage() {
  const content = `
    <section class="auth-container">

      <h1>Student Login</h1>

      <p>Welcome back! Log in to your student account.</p>

      <form action="/login" method="POST">

        <div class="form-group">
          <label for="email">Email Address</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
          >
        </div>

        <div class="form-group">
          <label for="password">Password</label>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          >
        </div>

        <button type="submit" class="button">
          Login
        </button>

      </form>

      <p>
        Don't have an account?
        <a href="/register">Register here</a>
      </p>

    </section>
  `;

  return layout("Student Login", content);
}
