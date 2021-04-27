# General Assembly Project 4: GreenHouse

## Project Brief:
* **Build a full-stack application** by making your own backend and your own front-end
* **Use a Python Django API** using Django REST Framework to serve your data from a Postgres database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers. **ALLOW** time for this.
* **Be deployed online** so it's publicly accessible.

## Timeframe:
7 Days

## Description:
GreenHouse allows users to browse for different types of plants to use for interior/exterior decorating. It also allows them to share their own pictures. These pictures appear on the Explore page, a compilation of all posts submitted.

# GreenHouse
![GreenHouse Home Page](client/src/assets/projectfour.jpg)

# Deployed app:
To explore all features, use these login credentials:

email: admin@email.com
password: adminpass

## Technologies used
### Frontend:
- React
- Axios
- Semantic UI React
- Semantic UI
- SCSS
- HTTP-proxy-middleware
- React Router DOM
### Backend:
- Python
- Django
- Django REST Framework
- Psycopg2
- PyJWT
### Development tools:
- VSCode
- Insomnia
- Yarn
- Git & GitHub
- Google Chrome development tools
- Trello Board (planning)
- Adobe Photoshop 2021 (project assets and wireframes)
- Heroku (deployment)

## Installation
Clone or download sei-project-four repo then run these in Terminal:
* `pipenv` to install Python packages
* `pipenv shell` to enter virtual environment
* `python manage.py makemigrations` to prepare migrations
* `python manage.py migrate` to migrate
* `python manage.py loaddata comments/seeds.json` to seed data for comments
* `python manage.py loaddata categories/seeds.json` to seed data for categories
* `python manage.py loaddata plants/seeds.json` to seed data for plants
* `python manage.py loaddata posts/seeds.json` to seed data for user posts
* `python manage.py runserver` to start back-end server
* `cd client` to go into the front-end directory
* `yarn` to install front-end dependencies
* `yarn start` to start front-end server

# PROCESS
## PLANNING (day 1)
## Concept
From the start of the course, I had planned on doing a plant-centric app/website so I immediately knew that that was what I would do for my final project. I decided to do the project solo because I wanted to prove to myself that I could do a more complex website and understand the combination of concepts better through independent struggling and problem-solving. At the beginning of the planning stage, I made sure to establish first the "story" of the app and the way components linked/interacted with each other. I used Miro to create the steps representing the user journey and Photoshop to create a wireframe and ERD.

### Relationships (ERD)
![GreenHouse ERD](client/src/assets/erd.jpg)

### Storyboard
![GreenHouse Storyboard](client/src/assets/storyboard.jpg)

### Wireframes
![GreenHouse Wireframe](client/src/assets/wireframes.jpg)

I knew that having complex interlinked models in a solo project would be easily overwhelming so I used a Trello board to organise myself. I split the project into backend, frontend, webpages(components), extra functions and bugs, including a list for components that are finished and styled. This definitely helped me delegate tasks evenly each day and to see what I need to prioritise in order to reach the minimum viable product (MVP). Although working on my own, I made sure to stay on Zoom all day in case I needed to quickly reach out to instructors for help which I did twice throughout the project. I also made sure to use and check Slack regularly for help from my classmates or to see if they were having similar obstacles. It made things go smoother and less stressful.

### Trello Organisation
![GreenHouse Trello](client/src/assets/trello.jpg)

## BACKEND SETUP (day 2 & 3)