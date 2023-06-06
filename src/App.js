
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Weather from './Weather';
import './Weather.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="lines">

       <Weather defaultCity="Toronto"/>

</div>
<div className="end">
   This project was coded by
          <a href="https://www.delac.io/" 
          rel="noreferrer"
          target="_blank">
            Athenah Coucean
          </a>
          and is
          <a
            href="https://github.com/Athens410/react-final.git"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
          and
          <a
            href="https://main--stunning-nasturtium-43eab0.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            hosted on Netlify
          </a>
       </div>
   
   
   
   
    <ul className="nav justify-content-center mt-5">
  <li className="nav-item">
    <a className="nav-link active" href="https://www.shecodes.io/" target="_blank" rel="noreferrer" title="SheCodes profile">
      SheCodes
    </a>
  </li>
  <li className="nav-item">
   
  </li>
  <li className="nav-item">
    <a className="nav-link" href="https://linkedin.com/in/athenah-c-2639251a0" target="_blank" rel="noreferrer" title="LinkedIn profile">
      <i className="fab fa-linkedin"></i>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="https://github.com/Athens410/react-final.git" target="_blank" rel="noreferrer" title="GitHub profile">
      <i className="fab fa-github"></i>
    </a>
  </li>
</ul>


        
      </header>
    </div>
  );
}

export default App;
