import Header from "./Components/header"
import Eqbeats from "./Components/eqbeats"
import Eqbeats2 from "./Components/eqbeats2"
import Starttest from "./Components/starttest"
import Footer from "./Components/footer"
import OpenVacany from "./Components/openvacancies"
import Workwithus from "./Components/workwithus"
import Soundsfamiliar from "./Components/soundsfamiliar";
import Meetahead from "./Components/meetahead";
import Master from "./Components/master";
import Otherthink from "./Components/otherthink"
import Selfimprove from "./Components/selfimprove";
function App() {
  return (
      <>
        <Header/>
        <Master/>
        <Eqbeats/>
        <Soundsfamiliar/>
        <Meetahead/>
        <Selfimprove/>
        <Eqbeats2/>
        <Otherthink/>
        <Starttest/>
        <Workwithus/>
        <OpenVacany/>
        <Footer/>
      </>
  );
}

export default App;
