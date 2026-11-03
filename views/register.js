
import { layout } from "./layout.js";

export function registerPage() {
  const content = `
    <section class="auth-container">

      <h1>Student Registration</h1>

      <p>Create your student account to get started.</p>

      <form action="/register" method="POST">

        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            required
          >
        </div>

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
            placeholder="Create a password"
            minlength="8"
            required
          >
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            minlength="8"
            required
          >
        </div>

        <button type="submit" class="button">
          Create Account
        </button>

      </form>

      <p>
        Already have an account?
        <a href="/login">Login here</a>
      </p>

    </section>
  `;

  return layout("Student Registration", content);
}
