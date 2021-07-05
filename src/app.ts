/// <reference path="decorators/autobind.ts" />
/// <reference path="models/drag-drop.ts" />
/// <reference path="models/ProjectModel.ts" />
/// <reference path="state/ProjectState.ts" />
/// <reference path="util/Validation.ts" />
/// <reference path="components/ProjectInput.ts"/>
/// <reference path="components/ProjectList.ts"/>

namespace App {
  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
  projectState.addProject('First project', 'First description', 10);
}
