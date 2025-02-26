import './App.css'
import Header from './Header'
import {courses} from './Data'
import Courses from './Courses'

function App() {
  return (
    <div>
      <Header />
      <div className='courses-main'>
      {
  courses?.map((course) => (
      <Courses key={course.id} course={course} />
  ))
      }
      </div>
    </div>
  )
}

export default App
