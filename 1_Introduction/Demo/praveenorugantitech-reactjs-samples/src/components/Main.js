const Main = ({ techs }) => {
  const techsList = techs.map((tech) => <li key={"key-" + tech}>{tech}</li>);
  return (
    <main>
      <div className="main-wrapper">
        <p>Prerequisite to get started React</p>
        <ul>{techsList}</ul>
      </div>
    </main>
  );
};

export default Main;
