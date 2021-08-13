import './App.css';
import Profile from './profile/Profile'
const handleName  = fullName => alert(fullName);

function App() {
  return (
    <>
     <Profile fullName="Soumaya Labbene" bio="22, student @ medtech" profession="Software engineer" handleName={handleName}><img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" width="400px" height="400px" alt="profilePhoto"/></Profile>
   </>
  );
}

export default App;
