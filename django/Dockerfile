FROM python:3.8-alpine
ENV PYTHONUNBUFFERED=1
WORKDIR /django
COPY requirements.txt requirements.txt
RUN python -m pip install --upgrade pip
RUN pip3 install -r requirements.txt
COPY . .
CMD [ "python3", "manage.py", "runserver", "0.0.0.0:8000"]
