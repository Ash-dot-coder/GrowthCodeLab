const SSOne = ({count, onClickHandler}) => {
    const handleClick = () => onClickHandler();

  return (
    <section>
        <p>{count}</p>
        <button onClick={handleClick}>Increment</button>
    </section>
  )
}

export default SSOne;