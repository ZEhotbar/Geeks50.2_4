const CustomBlock = React.memo (({setState}) => {
    const  handleClick = () => {
        setState ((prev) => prev +1)
    }
    console.log("render button");
    
  return (
    <div>
      <button onClick={handleClick}> Count ++</button>
    </div>
  )
})


