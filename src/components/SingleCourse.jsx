import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/Courses';
import { useEffect } from 'react';

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate()
  const course = courses.find((course) => course.slug === params.courseSlug);
 useEffect(() => {
  if (!course) {
  navigate('..', { relative: 'path' })
 }
}, [course, navigate])
 
 
  // // Simply show NotFound component
  // if (!course) {
  //   return <NotFount />;
  // }

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
