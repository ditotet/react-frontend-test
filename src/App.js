import logo from './logo.svg';
import './App.css';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <h3>React Frontend Test</h3>
        <div className="col-sm-4">
          <input type="text" className="form-control col-sm-2" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
        </div>
        <UsersList />
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Create</button>
      </div>

      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
