Example on how to do JavaScript tests for your django app using jsdom.

## Quickstart

    git clone https://github.com/k4ml/django-test-js.git
    cd django-test-js
    virtualenv -p python3 venv
    ./venv/bin/pip install -r requirements.txt
    npm install
    ./venv/bin/python manage.py test luwak.tests
