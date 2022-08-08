import './App.css';
import { FaStar } from "react-icons/fa";
import React from 'react';

const colors ={
  orange: "#FFBA5A",
  grey: "#a9a9a9"
}
const styles={

  container : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea :{
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 278,
    margin: "20px 0",
    padding: 10,
    minHeight: 100,
  },
  button :{
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
    cursor:'pointer',
  },
  
}


function App() {

  const stars = Array(5).fill(0)
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value)
  };

  const handleMouseOver= (value) => {
    setHoverValue(value)
  };

  const handleMouseLeave= () => {
    setHoverValue(undefined)
  };

  const submit = () => {
    alert("Thank you.");
  }



  return (
    <div style={styles.container}>
      <h2>Star Ratings in React</h2>
      <div style={styles.stars}>
        {stars.map((_, index)=>{
        return(
          <FaStar 
            key={index}
            size={30}
            style={{
              marginRight:10,
              cursor:'pointer'
            }}
            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
            onClick={() => handleClick( index + 1)}
            
            // onMouseOver={() => handleClick( index + 1)}
            // 이거 살리면 클릭없이 드래그로 별점선택 가능. 
            onMouseLeave={handleMouseLeave}
          />
        )
      })}</div>
      <textarea
        style={styles.textarea}
        placeholder="What's your feedback"
        onChange={(e)=>{ console.log(e.target.value); }}
      />
      <button 
      style={styles.button} 
      onClick={() => submit()}
      >Submit</button>
    </div>
  );
}

export default App;
