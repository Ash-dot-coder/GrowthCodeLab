import './App.css';

// ---Example - 1
const Button = () => {
  // const handleClick = () => console.log("You clicked me");
  const handleClick = () => console.log(Math.round(Math.random() * 10));
  return <button onClick={handleClick}>Click</button>;
};

// ---Example - 2
const Copy = () => {
  function copyHandler() {
    console.log("Stop Stealing My Content.");
  }

  return (
    <p onCopy={copyHandler}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, magnam minus! Cupiditate voluptatem possimus excepturi atque dignissimos molestiae, voluptate sapiente eius impedit sed obcaecati in veritatis. Laudantium, earum enim velit quae molestiae mollitia soluta aliquam ipsum, iste voluptates ullam ex adipisci similique nesciunt?
    </p>
  );
};

// ---Example - 3
const Move = () => {
  function moveHandler() {
    alert("Mouse Move Event Fired");
    console.log("Mouse Move Event Fired");
  }

  return (
    <p onMouseOver={moveHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id quidem numquam doloribus at, blanditiis accusamus recusandae ullam eos quae atque dicta quasi, ut quisquam aliquid sed, labore quibusdam porro architecto modi iste similique. Ut pariatur possimus laudantium. Enim ipsam molestias perspiciatis dolore pariatur necessitatibus dolorum quisquam.
    </p>
  );
};

const App = () => {
  return (
    // <Button />
    // <Copy />
    <Move />
  )
}

export default App