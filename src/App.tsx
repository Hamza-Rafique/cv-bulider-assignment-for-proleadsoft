import {
  Education,
  WorkHistory,
  Achievements,
  GetInTouch,
  Intro,
  Skills,
  Tools,
  Languages,
} from "./components";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">CV Builder</h1>
      <GetInTouch />
      <Intro />
      <Education />
      <WorkHistory />
      <Skills />
      <Achievements />
      <Tools />
      <Languages />
    </div>
  );
}

export default App;
