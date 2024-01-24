// in index.js we required BrowserRouter Tag 
// But in App.js we will requiring Route as a Tag because here we will do some routing work

// axios

// we have alot of component or pages we dont't have go to all the pages fetch the data  again and again locally for each component or pages we just do it globally in app.js file(as it is a god file). That is importance of axios(just do it once and you are done with everything)
import axios from "axios";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages 
import Homepage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

// Component

// import DefaultLayout from "./layouts/Default.layout";
import Navbar from "./components/Navbar/navbar.component";
import HeroCarousal from "./components/HeroCarousal/HeroCarousal.component";



//import here because App.js is the global file whatever is required here or render here is rendered in all the pages so that we don't need import in each particular functional component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieNavbar from "./components/Navbar/movieNavbar.component";


// axios default setting - baseURL and api_key will remain constant
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {}; // this we have written to avoid erros as we don't have any parameter and we are taking parameter from TMDB api;

// entire error will go reason of writting this is because we are setting up the default parameters for the api which we are trying to fetch and the default parameter here is << api_key >> so we are it to assign certain values which present in my React application but there is one more thing my default parameter is empty so but whatever is present inside the api (entire URL) whatever given by TMDB so inside it we have parameter api_key and we are assigning certain key to that parameter.

// default parameters
// below params is taken from TMDB api that partcular params has a keyword called api_key and we have assign that particular paramter the environments variable values.
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    //empty tag - when we don't want use any tags but still there is a requirement you can't return anything directly without using any tag if you have to return anything you have put inside the Tag so These empty Tag are called FRAGMENTS.     
    
    <>
   <div className="bg-gray-200">


    <DefaultHOC path = "/" element={<><Navbar /><HeroCarousal /><Homepage /></>} />
    
    <MovieHOC path = "/movie/:id" element = {<> <MovieNavbar /> <Movie /> </>} />
    <DefaultHOC path = "/plays" element={<><Navbar /><Plays /></>} />
   
   </div>
    
      
    </>
  );
}
// component(keyword) = {Name} - this is way how you dynamically Render
// / , /movie
export default App;



// const balor = {
//   name: "balor",
//   dob: 1900
// };

// // create another obj and assign it to balor
// const student = balor;

// // Add another parameter in this.
// student.goodStudent = true;

// // this will create another object called student
// const student = {
//   name: "balor",
//   dob: 1900,
//   goodStudent : true
// };

// SPREAD OPERATOR

// const balor = {
//   name: "balor",
//   dob: 1900
// };

// const student = { ...balor,goodStudent:true} // SPREAD OPERATOR DOING SAME THING AS ABOVE CODE (LAME METHOD) IS DOING

// AVOID EXTRA LINES CODE (AVOID LAME METHOD)