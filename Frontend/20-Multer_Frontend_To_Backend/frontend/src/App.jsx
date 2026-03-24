import './App.css'

function App() {

  return (
    <>
      <form method='post' encType='multipart/form-data' action="http://localhost:3000/signup">
        <input type="text" name="name" id="" /><br />
        <input type="file" name="profile" /><br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
