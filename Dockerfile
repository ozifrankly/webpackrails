FROM ruby:2.7.7

WORKDIR /app

RUN apt-get update && apt-get install vim wget lsb-release  curl -y

RUN sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add

RUN sh -c 'echo "deb https://dl.yarnpkg.com/debian/ stable main" |  tee /etc/apt/sources.list.d/yarn.list'

RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -

RUN apt-get update && apt-get install nodejs -y \
    && apt-get install yarn -y \
    && apt-get install postgresql-client-14 -y \
    && apt-get install redis-server -y

RUN gem install bundler

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN bundle install

EXPOSE 3000
