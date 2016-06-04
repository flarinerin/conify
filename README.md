# Conify
Repository for the Conify project

## Development Instructions
### System requirements
- Ruby 2.2.3
- Node v5.4.0

### Enviromental variables
*none*

### Getting started
#### OSX
See [Quick Start](https://github.com/wildland/guides#setting-up-your-development-enviroment) for getting development machine setup on OSX.
#### Windows
We can provide little help and will be mostly on your own, good luck. Cloud9 has been used by some on this project who are using windows, instead of running the env locally.
#### Linux
While you won't be able to run the install script mentioned in the OSX section, reviewing the guide and manually installing the mentioned packages should be fairly straight forward.

#### Installing dependencies, setting up the DB, and starting the development server
1. Run `$ bundle install && npm install`
2. Run `$ rake wildland:db`
3. Run `$ foreman start -f Procfile.dev` to start the server

### Getting Work Done

#### Creating API endpoints
The api uses a rails gem called ApiMe, to get started:
1. Design your data model, its relationships, and its fields
2. Generate a resource endpoint for your data mode `$ rails g api_me:resource event presentor:belongs_to name:string description:text ...` (See [api_me documentation](https://github.com/wildland/api_me#usage) for details)
3. Add has_many relationships to the model and serializer, then add any additional custom filtering to the specific endpoints filter.

#### Adding UX to the main app
The main frontend app is served by the client_application controller, which can be found under the controllers folder, and the client_application index view. It uses the react_on_rails gem. It is mostly a react JS application that is compiled and built from the `/client` directory. Specifically, it used React, React Router, Redux, and Immutable JS, Webpack, and Bootstrap 4.
1. If you are new to React, I suggest reviewing the [React Tutorial](https://facebook.github.io/react/docs/tutorial.html) and then the [React/Redux Tutorial](https://learnredux.com) before getting started.


## Production Requirements
### Enviroment varables
- `SECRET_KEY_BASE`
