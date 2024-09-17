import Header from "./Header/Header" 
import Footer from "./Footer";
import Body from "./Body";
import Card from "./Card";
import Student from "./Student";


function App() {
  return(
 
    
    <>
    <Student name="fhf" age={25} isStudent={true} />
    <Student  />
    <Header/>
    <Card/>
    
    </>
  );



}
export default App;
