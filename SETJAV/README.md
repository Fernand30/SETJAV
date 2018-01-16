# SET Mobile App

Please take the time to read and understand the project structure before continuing.

#### Features
All development should be completed under the "feature" folder, with a feature representing a part of a user journey. Each feature should be  encapsulated and all data should be self contained unless used by multiple features.

For example, the user authentication can be it's own feature with its own reducer, actions and epics.  But n itinerary feature might use the "appData" global actions, reducers since this data needs to be shared by mulitple features and we do not wish to load it multiple times.

Each feature should have its own "index.js" file which acts like an interface to provide access to internal components, etc.  You will need this to wire up reducers, epics and setup navigation.

#### Async actions
When performing async actions, please always use epics.  We are not using thunk in this project as we want to deal with side effects cleanly.  Review the example feature for how we have used epics.

#### Components vs Containers
Within each feature you will have at least 1 container, which is basically a connected component to Redux.

Components on the other hand are dumb and should only access inputs and outputs via props (no connect statement or context interactions).

We also have the concept of "global" components which we use when a component needs to be shared across multiple features.

#### Support / Help
If you have any questions whilst performing development, please contact the development team and it's important this project structure is maintained.
