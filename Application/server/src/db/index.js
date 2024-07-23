const mongoose = require('mongoose');

MONGODB_URI = "mongodb+srv://cipherschoolsproject:91OOOxhdDYWBcn3G@cipherschoolsproject.he6gwz5.mongodb.net/";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected with MongoDB')
    }).catch((error)  => console.log("Error connecting to mongoDB!"))

