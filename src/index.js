import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

//CSS
import "./index.css";

function BookList(){
  return (
    <section className="container">
      <div className="bookList row">
        <Book />
        <Book />
        <Book />
      </div>
    </section>
  );
}

const Book = () => {
  return(
    <div className="bookDiv card col-lg-3 col-md-4 col-sm-6">
      <BookImg />
      <hr className="hrDesign"/>
      <BookName />
      <BookAuthor />
      <BookPrice />
    </div>
  );
}

const BookImg = () => {
  return(
    <img className="bookImg" src="https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL200_SR200,200_.jpg" alt="BookImage" />
  );
}
const BookName = () => {
  return(
    <p className="bookName" >It's Not Easy Being a Bunny</p>
  );
}
const BookAuthor = () => {
  return(
    <p className="bookAuthor">Marilyn Sadler</p>
  );
}
const BookPrice = () => {
  return(
    <p className="bookPrice">Price: $3.90</p>
  );
}


ReactDom.render(
  <div>
    <App />
    {/* <BookList />  */}
  </div>
  ,document.getElementById("root")
);