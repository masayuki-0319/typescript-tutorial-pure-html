import { ProjectInput } from './components/ProjectInput.js';
import { ProjectList } from './components/ProjectList.js';
import { projectState } from './state/ProjectState.js';

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
projectState.addProject('First project', 'First description', 10);
