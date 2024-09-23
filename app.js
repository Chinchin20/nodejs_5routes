const express = require('express');
const path = require('path'); // Required to handle file paths
const shoeRoutes = require('./routes/shoeRoutes'); // Correct path to your routes

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.use('/shoes', shoeRoutes);


app.get('/', (req, res) => {
    res.redirect('/shoes');
});

// Handle 404 errors for unmatched routes
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
