// in index.js we required BrowserRouter Tag 
// But in App.js we will requiring Route as a Tag because here we will do some routing work
import { Routes,Route } from "react-router-dom";

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



function App() {
  return (
    //empty tag - when we don't want use any tags but still there is a requirement you can't return anything directly without using any tag if you have to return anything you have put inside the Tag so These empty Tag are called FRAGMENTS.     
    
    <>
   
    <DefaultHOC path = "/" element={<><Navbar /><HeroCarousal /><Homepage /></>} />
    
    <MovieHOC path = "/movie/:id" element = {<> <MovieNavbar /> <Movie /> </>} />
    <DefaultHOC path = "/plays" element={<><Navbar /><Plays /></>} />
    
      
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