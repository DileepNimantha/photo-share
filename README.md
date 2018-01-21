# photo-share
NodeJS/MongoDB/Mongoose Rest API for a photo sharing app

Install
=======
Run 'npm install' after cloning the the project and run 'npm start' to start the server. Test with following routes.

API Reference
=============
/users
    get->   Get All Users
    post->  Create user

/user/:userId
    get->     Get user
    delete->  Delete user
    put->     Update user

/user/:userId/pictures
    get->     Get all pictures by user
    post->    Add picture

/picture/:pictureId
    get->     Get picture
    delete->  Delete picture
    put->     Update picture
