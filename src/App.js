import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/calculator';
import './App.css';
import './index.css';

function Quotes() {
  return (
    <>
      <main className="quote">
        <h3>
          Mathematics is nt about numbers,
          equations, computaions, or algorithms:
          it is about understanding. - William Paul Thurston
        </h3>
      </main>
    </>
  );
}

function Home() {
  return (
    <>
      <h3>Welcome to our page!</h3>
      <main>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          autem provident ex asperiores veritatis a hic atque distinctio
          architecto earum! Sed vitae officiis tempore sequi eum hic debitis
          ipsum fugiat dolor nam sapiente quaerat fuga, nobis dolorem quia porro
          consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis eveniet pariatur eius cum ex earum aliquam consectetur quis
          dolore quos assumenda laborum et, doloribus enim temporibus illo,
          alias eligendi ratione ad corrupti optio veniam. Deleniti doloribus id
          corrupti fugit inventore in voluptate esse pariatur eos amet vitae
          minima voluptates, nihil dolore error, iste tempora, libero neque
          maxime ullam sunt atque natus dignissimos! Dicta libero corrupti quas
          itaque nihil dolorum officia.
          <br />
          <br />

          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis eveniet pariatur eius cum ex earum aliquam
          consectetur quis dolore quos assumenda laborum et, doloribus enim
          temporibus illo, alias eligendi ratione ad corrupti optio veniam.
          Deleniti doloribus id corrupti fugit inventore in voluptate esse
          pariatur eos amet vitae minima voluptates, nihil dolore error, iste
          tempora, libero neque maxime ullam sunt atque natus dignissimos! Dicta
          libero corrupti quas itaque nihil dolorum officia. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Debitis eveniet pariatur eius
          cum ex earum aliquam consectetur quis dolore quos assumenda laborum
          et, doloribus enim temporibus illo, alias eligendi ratione ad corrupti
          optio veniam. Deleniti doloribus id corrupti fugit inventore in
          voluptate esse pariatur eos amet vitae minima voluptates, nihil dolore
          error, iste tempora, libero neque maxime ullam sunt atque natus
          dignissimos! Dicta libero corrupti quas itaque nihil dolorum officia.
        </p>
      </main>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <div className="top">
        <h1>Math Magicians</h1>
        <nav className="nav-container">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link calculator" to="/components/calculator">Calculator</Link>
          <Link className="nav-link" to="/Quotes">Quotes</Link>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/Quotes" element={<Quotes />} />
          <Route path="/components/calculator" element={<Calculator pre="" operand="" curr="0" />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
