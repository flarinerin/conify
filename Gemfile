source 'https://rubygems.org'
gem 'dotenv-rails', groups: [:development, :test], require: 'dotenv/rails-now'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~>4.2.6'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.15'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
end


group :production do
  gem 'rails_12factor'
end

gem 'squeel'
gem 'factory_girl_rails'
gem 'puma'
gem 'react_on_rails'

group :development, :test do
  gem 'wildland_dev_tools', '>=0.1.0', git: 'git+ssh://git@github.com/wildland/wildland_dev_tools.git'
  gem 'annotate'
  gem 'brakeman'
  gem 'pry-rails'
  gem 'pry-byebug'
  gem 'rspec-rails'
  gem 'rubocop'
end

gem 'api_me'
gem 'token_authenticate_me', '>=0.4.2'
gem 'active_model_serializers', '~> 0.8.0'
