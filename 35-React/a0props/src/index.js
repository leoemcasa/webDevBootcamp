import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

function Card(props){
    return(
        <div className={props.clas}>
            <h2>{props.name}</h2>
            <img 
                src={props.src}
                alt="avatar_img"
            />
            <p>{props.phone}</p>
            <p>{props.mail}</p>
        </div>
    );
}

root.render(
    <div>
        <h1>My Contacts</h1>
        <Card
            clas="note"
            name="Beyonce"
            src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            phone="+123 456 789"
            mail="b@beyonce.com"
        />
        <Card
            clas="note"
            name="Jack Bauer"
            src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
            phone="+987 654 321"
            mail="jack@nowhere.com"
        />
        <Card
            clas="note"
            name="Chuck Norris"
            src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
            phone="+918 372 574"
            mail="gmail@chucknorris.com"
        />
    </div>
);

// root.render(
//     <div>
//       <h1>My Contacts</h1>
  
//       <h2>Beyonce</h2>
//       <img
//         src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//         alt="avatar_img"
//       />
//       <p>+123 456 789</p>
//       <p>b@beyonce.com</p>
  
//       <h2>Jack Bauer</h2>
//       <img
//         src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
//         alt="avatar_img"
//       />
//       <p>+987 654 321</p>
//       <p>jack@nowhere.com</p>
  
//       <h2>Chuck Norris</h2>
//       <img
//         src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
//         alt="avatar_img"
//       />
//       <p>+918 372 574</p>
//       <p>gmail@chucknorris.com</p>
//     </div>
// );