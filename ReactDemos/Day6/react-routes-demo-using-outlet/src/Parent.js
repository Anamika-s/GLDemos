import Child from './Child';

function Parent() {
  
  const pull_data = (data) => {
    console.log(data);  
  }
  
  return (
    <div className='App'>
      <Child func={pull_data}
      />
    </div>
  );
}

export default Parent;