import { ProjectInput } from './components/ProjectInput';
import { ProjectList } from './components/ProjectList';
import { projectState } from './state/ProjectState';

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
projectState.addProject('First project', 'First description', 10);
