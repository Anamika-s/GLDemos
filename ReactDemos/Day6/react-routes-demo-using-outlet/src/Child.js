const Child = (props) => {
  
  let data = 100;
  props.func(data);
  
  return (
    <>
      <h1>I am the Child Component!</h1>
    </>
  );
}

export default Child;