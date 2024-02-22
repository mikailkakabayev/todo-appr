import './style/style.css';
import ToDoForm from './components/addtask';

function App() {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <ToDoForm />
      </div>
    </>
  );
}

export default App;
