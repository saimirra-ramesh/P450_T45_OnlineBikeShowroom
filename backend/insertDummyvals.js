// Remove file later
// This file was created to add Dummy Users to the DB

const mongoose = require('mongoose');
const User = require('./models/userSchema');

mongoose.connect('mongodb+srv://friedcheesee:<password>@cluster0.vqdpm1s.mongodb.net/Users?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('strictQuery', true);

// Dummy data
const dummyUsers = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '1234567890',
    userName: 'johndoe',
    password: 'password1',
    address: '123 Main St, Cityville',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phoneNumber: '9876543210',
    userName: 'janesmith',
    password: 'password2',
    address: '456 Oak St, Townsville',
  },
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    phoneNumber: '5551234567',
    userName: 'alicejohnson',
    password: 'password3',
    address: '789 Pine St, Villagetown',
  },
  {
    firstName: 'Bob',
    lastName: 'Williams',
    email: 'bob.williams@example.com',
    phoneNumber: '3335557777',
    userName: 'bobwilliams',
    password: 'password4',
    address: '987 Elm St, Hamletville',
  },
  {
    firstName: 'Eva',
    lastName: 'Davis',
    email: 'eva.davis@example.com',
    phoneNumber: '1112223333',
    userName: 'evadavis',
    password: 'password5',
    address: '567 Birch St, Riverside',
  },
  {
    firstName: 'Chris',
    lastName: 'Miller',
    email: 'chris.miller@example.com',
    phoneNumber: '4446668888',
    userName: 'chrismiller',
    password: 'password6',
    address: '234 Cedar St, Lakeside',
  },
  {
    firstName: 'Grace',
    lastName: 'Taylor',
    email: 'grace.taylor@example.com',
    phoneNumber: '9998887777',
    userName: 'gracetaylor',
    password: 'password7',
    address: '876 Maple St, Hilltop',
  },
  {
    firstName: 'Sam',
    lastName: 'Brown',
    email: 'sam.brown@example.com',
    phoneNumber: '5557779999',
    userName: 'sambrown',
    password: 'password8',
    address: '765 Pine St, Mountainside',
  },
  {
    firstName: 'Lily',
    lastName: 'Jones',
    email: 'lily.jones@example.com',
    phoneNumber: '2224446666',
    userName: 'lilyjones',
    password: 'password9',
    address: '543 Oak St, Countryside',
  },
  {
    firstName: 'Alex',
    lastName: 'White',
    email: 'alex.white@example.com',
    phoneNumber: '7779991111',
    userName: 'alexwhite',
    password: 'password10',
    address: '321 Elm St, Suburbia',
  },
];

// Insert dummy data into the "users" collection
User.insertMany(dummyUsers)
  .then(() => {
    console.log('Dummy users inserted successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error inserting dummy users:', err);
    mongoose.connection.close();
  });
