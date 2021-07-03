import logo from './logo.svg';
import './App.css';
import GlassCard from './glasscard';
import background from './images/bg.png'
function App() {
  return (
    <div className="App" style={{
      height:'100vh', 
      width:'100%',
      backgroundColor:'#171717',
    // backgroundImage:`url(${background})`,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat'
    }}>
     <GlassCard/>
    </div>
  );
}

export default App;
