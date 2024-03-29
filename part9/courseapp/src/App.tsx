import {Header} from './components/Header';
import {Content} from './components/Content';
import {Total} from './components/Total';
import {CoursePart} from './types'


const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: Array<CoursePart> = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is the leisured course part",
      type: "normal"
    },
    {
      name: "Advanced",
      exerciseCount: 7,
      description: "This is the harded course part",
      type: "normal"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      type: "groupProject"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
      type: "submission"
    }
  ];

  return (
    <div>
      <Header text={courseName}></Header>
      <Content courses = {courseParts}></Content>
      <Total courses = {courseParts}></Total>
    </div>
  );
};

export default App;