// JSX
// ReactJS Component -> When a function returns HTML we call it as React component
document.body.style.backgroundColor = "wheat";

const address = {
  city: "Dehradun",
  state: "UttraKhand",
  zipCode: 32883,
};

const MyReactApp = () => {
  const userName = "ronky";
  const price = 89384;
  return (
    <div>
      <h2>Hey, {userName}</h2>
      <h4>Price:- {price}</h4>
      <p
        style={{
          fontSize: "2.3em",
          color: "orangered",
          textDecoration: "underline",
        }}
      >
        Address: <br /> City: {address.city} <br /> State: {address.state}{" "}
        <br /> ZipCode: {address.zipCode} <br />{" "}
      </p>
      <p style={{ color: "tomato", fontSize: "3rem" }}>
        Hey, this is using Day 1 of React
      </p>
      <p>This is a part of React Module in my practice or learning form</p>
    </div>
  );
};

const rootDiv = document.getElementById("root");
ReactDOM.render(<MyReactApp></MyReactApp>, rootDiv);
