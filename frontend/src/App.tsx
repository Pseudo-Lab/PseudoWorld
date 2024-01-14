// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./modules/Header.tsx";
import Footer from "./modules/Footer.tsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/About" element={<Game />} />
          {/* <Route path="/posts" component={Posts} />
          <Route path="/posts/:id" component={Post} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/edit/:id" component={EditPost} />
          <Route path="/posts/delete/:id" component={DeletePost} />
          <Route path="/posts/search/:query" component={Search} />
          <Route path="/posts/search/:query/:page" component={Search} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

function Home() {
  const longRender = () => {
    const result = [];
    for (let i = 0; i < 100; i++) {
      {
        result.push(<br />);
        result.push(<a>Home</a>);
      }
    }
    return result;
  };

  return <div>{longRender()}</div>;
}

function Test() {
  return <div>Test</div>;
}

function Game() {
  return <div>Game</div>;
}

export default App;
