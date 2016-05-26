Rails.application.routes.draw do


  # Clobbers all routes, Keep this as the last route in the routes file
  mount_ember_app :frontend, to: '/', controller: 'ember_application'
end