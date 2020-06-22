<a href="https://codeclimate.com/github/Slashflex/loosamax/maintainability"><img src="https://api.codeclimate.com/v1/badges/7ae766cf636102529853/maintainability" /></a>

# Welcome to Loosamax
[Demo](https://loosamax.herokuapp.com/)

To be able to play the game, you first need to register an account:

- Click on signup and fill in your credentials, an email will be sent to the email address that you entered during registration, then you will be redirected to your profile page (where you can upload an avatar image from your computer and update your password)
- Once registered, you can play the game on [home page](https://loosamax.herokuapp.com/)
- When you win a game, you can chooser to claim a reward, which will be sent to your email inbox (The reward is a random fetched meal from [the meal DB API](https://www.themealdb.com/))

Clone / edit this repository

If you want to modify this repository you can clone it:

```sh
git clone https://github.com/Slashflex/loosamax.git && cd loosamax
```

You have to install all the npm dependencies for the application to work:

```sh
npm install 
# this will install all required dependencies from the package.json file
```

If you plan to make changes to javascript files located inside ```public/js``` folder, you will have to run this command:

```sh
npm run webpack
```

This command will watch all the changes made to ```public/js/index.js``` and ```public/js/login.js``` and compile everything inside the ```webpackBundle.js``` file.

If you don't want Webpack to watch every changes, you can comment the line 10 of the file ```webpack.config.js```

```js
// watch: true,  
// or
watch: false,
```

If you plan to make changes to StyleSheets, you have to run this command:

```sh
npm run watch:sass
```

To make changes to styles, you have to edit the ```.scss``` files located inside ```public/sass``` folder.

Once done with styles, you can run this command to compile everything .scss files into the file ```public/css/styles.css```

```sh
npm run build:css
```

***

For the application to run properly, you have to edit the file ```config.example.env``` with your own credentials:

```sh
mv config.example.env config.env
```

Since this repository uses ```MongoDB``` as a NoSQL database, you should have a project created on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) with a free tier cluster:

 ![Create new project](https://i.imgur.com/9geMuH8.png)

Name your project, then proceed to ```Build a cluster```, select ```shared clusters``` which is free.

Leave everything to default:

![Create cluster](https://i.imgur.com/P75ohGn.png)

You should be redirected to the cluster's dashboard, which is building your cluster (it takes approximately 3-5 mins to build)

![Building cluster](https://i.imgur.com/VujdPMy.png)

Once built, click on ```connect``` and fill in credentials (be sure to copy your dbUserPassword, we'll need it later to connect to our app):

![Connect to cluster](https://i.imgur.com/LMaYsNY.png)

Choose a connection method:

![Connection method](https://i.imgur.com/Rc2Z94s.png)

Make sure you select ```Node.js > 3.6``` as driver and copy the connection string

![Connect to cluster](https://i.imgur.com/pipfUHD.png)

Now open the file ```config.env``` with an IDE and paste your connection string on line 3 

```sh
DATABASE=mongodb+srv://lol:<password>@cluster0-zkndq.mongodb.net/<dbname>?retryWrites=true&w=majority
```

Change ```<password>``` to ```<PASSWORD>``` and ```<dbname>``` to a database name of your choice eg. loosamax:

```sh
# You should have a variable like this
DATABASE=mongodb+srv://lol:<PASSWORD>@cluster0-zkndq.mongodb.net/loosamax?retryWrites=true&w=majority
```

Now in the same file on line 5, replace ```<your database password>``` by the one you copied earlier:

```sh
# It should look like this
DATABASE_PASSWORD=l2Yg1JI62HB9nXbg
```

Continue to line 7,  and replace ```<your secret JWT token>```

```sh
# Here you can choose a password of at least 30 characters eg.
JWT_SECRET=ultra-secure-jsonWebToken-json1-superStrong
```

And the last change will be on line 19:

- For this you should have a [sendgrid](https://sendgrid.com/) account and add a sender to your account ([Sendgrid sender setup](https://sendgrid.com/docs/ui/sending-email/senders/))

Once done, create an apikey on sendgrid, for this and once logged to your sendgrid dashboard, click on **Email API** then **Integration Guide**, and choose **SMTP Relay**

Choose a name for your API key, then click on create key, and a key (password) will be generated for you inside the password field, copy it and paste it inside the ```config.env``` file on line 19

![SendGrid API key](https://i.imgur.com/gbrWPhS.png)

```sh
# Sendgrid's username will always be 'apikey' so you don't have to change it
SENDGRID_USERNAME=apikey

# Your API key (password) should look like this
SENDGRID_PASSWORD=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
```

Now that everything is setup, you can start the server with:

```sh
npm start # or npm run start
```

You should see an output like this:

![npm start](https://i.imgur.com/NKVMdys.png)

It means that the ```NODE_ENV``` variable from config.env has been changed from 'development' to 'production' which is required for Sendgrid to be able to send actual email(s).

App running on port 1337, means that the node.js server (server.js file) is running either on port 1337 (in development or on the default port 80 HTTP or 443 HTTPS in production)

DB connection successful! means that there was no error to connect to our MongoDB cluster and everything is running smoothly.

So if you visit ```localhost:1337``` on a browser you should see the actual application and be able to use it.

***
# To Do(s)
 - Make some change to stylesheets
 - Make winning/losing hands visible
 - Deploy the documentation for the REST API 