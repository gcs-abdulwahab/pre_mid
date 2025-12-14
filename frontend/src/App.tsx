import axios from 'axios';
function App() {


  const handleClick = async () => {
    try {
      const response = (await axios.get('http://localhost:3500/api/students')).data;
      console.log(response)
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


const handlePostDataClick = async () => {
  try {
    const postData = { name: 'John Doe', age: 25 , marks: 88 , address:"some address"};
    const response = (await axios.post('http://localhost:3500/api/students', postData)).data;
    console.log(response);
  } catch (error) {
    console.error('Error posting data:', error);
  }
};


	return (
		<>
      <h1> This is the heading</h1>
      <button onClick={handleClick}> Fetch </button>
      <br />
      <button onClick={handlePostDataClick}> Post Data </button>
		</>
	);
}

export default App;
