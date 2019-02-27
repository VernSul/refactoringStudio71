# Refactoring Notes

The App file has been split in different files to make the code base more modular and scalable. The components which were not hosting state or logic have been turned into dumb components. That lightens the components tree since a function is ligter to store than a class. The Containers components and the Dumb components have been put in different folders so before diving into the code base the developer has already an idea of the tree structure. 

Jquery declarations have been deleted, instead we access DOM elements through React refs method. React is supposed to replace JQuery so for ergonomy and readability purposes we should do without. Also it reduces the number of external libraries imported which lighten our App and speed up the loading.

The way the form values are recorded has been changed, using the component's state to store the value currently typed to then send it to the container's state that hosts the "To Do List" array. This allows us to have a modular architecture with a total control over the way props flow accross the app. The App state manages global data only, delegating local logic to lower level components.