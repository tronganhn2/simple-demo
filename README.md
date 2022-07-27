# DESCRIPTION

This is only a small demo project, with the main idea is about showing information of some citizens.
The main purpose of this project is to show my coding style, and not focus on utilizing technology / performance or the business meaning of the project.
Some of the code might be redundant and not really effective in practical situation, yet once again, this project is for demonstrating coding style only.

For the simplified purpose, i have removed a majority of important pattern and tech, including redux, form and modal, and some practical method like useRef, useCallback,...
Also, i do not include testing in this project, normally i would use Jest for testing.

## FOLDER STRUCTURE

```
src/
├── shared                  # Contains things that share among views in the application
|   ├── components          # Common components
|   ├── hooks               # Common custom hooks sharing among components
|   ├── utils               # Utilities, since this is a small project, i include the services in here as well
├── views                   # Define views based on route path
```
Each folder in views folder would be a screen/main component. It would have a set of container / hook / view,... alongside with it. Also, for children components of the current one, each of the would be created in a folder inside the parent components
# DISCLAIMER

This project really small and is not based on any realistic project of any organization.
All the code here is just for demonstrating the coding style and has no business and practical meaning. 




Nguyen Trong Anh, 27-07-2022

