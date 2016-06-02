# conify
Repository for the conify project

## Development Instructions
### System requirements
- Ruby 2.2.3
- Node v5.4.0

### Enviromental variables
*none*

### Getting started
[Quick Start](https://github.com/wildland/guides#setting-up-your-development-enviroment) for getting development machine setup.

1. Run `bundle install`
2. Run `rake db:create`
3. Run `rake db:migrate`

### Getting work done
run `$ foreman start -f Procfile.dev` to start the development server and getting stuff and things done

## Production Requirements
### Enviroment varables
- `SECRET_KEY_BASE`
- `SKIP_EMBER=true`
