
export function layout(title, content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} | Campus University</title>
        <link rel="stylesheet" href="/css/style.css">
      </head>

      <body>
        <header class="site-header">
          <nav class="navbar">
            <a class="brand" href="/">Campus University</a>

            <div class="nav-links">
              <a href="/">Home</a>
              <a href="/programmes">Programmes</a>
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </div>
          </nav>
        </header>

        <main class="container">
          ${content}
        </main>

        <footer class="site-footer">
          <p>&copy; ${new Date().getFullYear()} Campus University</p>
          <p>Discover your future with us.</p>
        </footer>
      </body>
    </html>
  `;
}
