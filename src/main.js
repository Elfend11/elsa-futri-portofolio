import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <nav>
      <div class="nav-links">
        <a href="#home" class="active">Home</a>
        <a href="#about">About</a>
        <a href="#journey">Journey</a>
        <a href="#works">Works</a>
        <a href="#beyond">Beyond</a>
        <a href="#contact">Contact</a>
      </div>

      <button type="button" aria-label="Change theme"> ☾ </button>
    </nav>
  </header>

  <section id="home" class="opening">
    <div class="opening-content">
      <p class="opening-name">Elsa Futri</p>
        <h1>A little world of mine.</h1>

        <a href="#about" class="enter-button">Enter</a>
    </div>
  </section>
`