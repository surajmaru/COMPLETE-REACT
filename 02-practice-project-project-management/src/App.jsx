import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {

  const storedProjects = localStorage.getItem('projects');
  const storedTasks = localStorage.getItem('tasks');
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: storedProjects ? JSON.parse(storedProjects) : [],
    tasks: storedTasks ? JSON.parse(storedTasks) : [],
  });

  function handleAddTask(text){
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        id: taskId,
        projectId: prevState.selectedProjectId,
      }
      localStorage.setItem('tasks', JSON.stringify([...prevState.tasks, newTask]));
      return{
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      }
    })
  }

  function handleDeleteTask(id){
    setProjectsState(prevState => {
      const updatedTasks = prevState.tasks.filter(task => task.id !== id);
      localStorage.removeItem('tasks');
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...prevState,
        tasks: updatedTasks,
      }
    })
  }

  function handleSelectProject(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    });
  }

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function handleCancelAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    });
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {...projectData,id: projectId};
      const updatedProjects = [...prevState.projects, newProject];
      localStorage.setItem('projects', JSON.stringify(updatedProjects));

      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects,
      }
    })
  }

  function handleDeleteProject(){
    setProjectsState(prevState => {
      const updatedProjects = prevState.projects.filter(project => project.id !== prevState.selectedProjectId);
      localStorage.removeItem('projects');
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects,
      }
    })
  }

  // console.log(projectsState);

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject 
  tasks={projectsState.tasks} 
  onAddTask={handleAddTask} 
  onDeleteTask={handleDeleteTask} 
  onDelete={handleDeleteProject} 
  project={selectedProject}
  />;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onCancel={handleCancelAddProject} onAdd={handleAddProject}/>
  } else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar  
      onSelectProject={handleSelectProject} 
      onStartAddProject={handleStartAddProject} 
      projects={projectsState.projects} 
      selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
