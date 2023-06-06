
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="border">
         <button type="button" class="btn btn-primary">Primary</button>


        </div>
         <ul className="nav justify-content-center mt-5">
      <li className="nav-item">
        <a className="nav-link active" href="https://www.shecodes.io/" target="_blank" title="SheCodes profile">
          SheCodes
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fab fa-instagram" title="Instagram"></i>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://linkedin.com/in/athenah-c-2639251a0" target="_blank" title="linkedin profile">
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a className="nav-link" href="https://github.com/Athens410/Portfolio-Project-Git.git" target="_blank" title="github profile">
          <i className="fab fa-github"></i>
        </a>
      </li>
    </ul>
  


        
      </header>
    </div>
  );
}

export default App;
