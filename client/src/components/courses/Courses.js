import axios from 'axios';
import { useState, useEffect } from 'react';
import CourseList from './CourseList';

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect( () => {
    axios.get('/api/courses')
      .then( res => setCourses(res.data) )
      .catch( err => console.log(err))
  }, [])

  return (
    <>
      <h1>Courses</h1>
      <CourseList
        courses={courses}
      />
    </>
  )
}

export default Courses;