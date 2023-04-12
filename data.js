window.reviewData = [
    {
        name: "Saksham Gupta",
        date: "2018-04-31",
        rating: 5,
        review: "I absolutely loved kickboxing! It was such an intense workout, but I felt so empowered and strong after every class. It's definitely not for the faint of heart, but if you're up for a challenge, I highly recommend it.."
    },
    {
        name: "Eunseo Park",
        date: "2020-03-24",
        rating: 5,
        review: "I've always been interested in combat sports, but kickboxing was a whole new level of intensity. The kicks and punches were exhilarating, but I definitely felt sore the next day. If you're looking for a high-energy workout that will push you to your limits, kickboxing is the way to go.."
    },
    {
        name: "Ankita",
        date: "2013-03-3",
        rating: 5,
        review: "I've tried a lot of different workouts, but kickboxing was by far the most challenging. The combination of power, speed, and agility required is no joke. But if you're willing to put in the effort, the results are definitely worth it."
    },
    {
        name: "Minji Kim",
        date: "2013-03-3",
        
        rating: 5,
        review: "I've been doing kickboxing for years, and it never gets old. There's always a new move to master or a new challenge to overcome. If you're looking for a workout that will keep you on your toes and constantly pushing yourself, kickboxing is the way to go.."
    },
    {
        name: "Naman Sharmas",
        date: "2013-03-3",
        
        rating: 5,
        review: "I was hesitant to try kickboxing at first, but I'm so glad I did. It was such a stress-relieving workout, and I felt like I was able to channel all my frustration and anger into my punches and kicks. Plus, the community at the gym was so supportive and welcoming."
    },
    {
        name: "Jasmanpreet Singh",
        date: "2013-03-3",
       
        rating: 5,
        review: "Kickboxing was a great way for me to build confidence and feel strong in my own body. There's something about throwing a powerful kick or punch that just makes you feel like a badass. I would definitely recommend it to anyone looking to feel empowered"
    }
];


document.addEventListener('DOMContentLoaded', function() {
    createTable(reviewData);

    const form = document.querySelector('.review-form-input-area');
    form.addEventListener('submit', function(event) {
      // Prevent the default behavior of the form (i.e. reloading the page) when the form is submitted
      event.preventDefault();
  
      // Get the values entered by the user
      const name = document.querySelector('#name').value;
      const date = document.querySelector('#date').value;
      const rating = document.querySelector('input[name="rating"]:checked').value;
      const review = document.querySelector('#review').value;
  
      // Create a new object with the input data
      const newReview = { name, date, rating, review };
  
      // Add the new object to the reviewData array
      reviewData.push(newReview);
  
      // Clear the form
      form.reset();
  
      // Re-create the table with the updated data
      createTable(reviewData);
    });

  });

function createTable(reviews) {
    // Fetching the tbody element
    let table = document.querySelector("#reviews-table");
    let newRow, newCell, newText;
  
    // Iterating through the reviews and creating table
    reviews.forEach(function (review) {
      // creates a table row
      newRow = table.insertRow();
      newRow.className = "card";
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-name";
      newCell.textContent = "Name: ";
      newText = document.createTextNode(review.name);
      newCell.appendChild(newText);
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-date";
      newCell.textContent = "Date: ";
      newText = document.createTextNode(review.date);
      newCell.appendChild(newText);
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-rating";
      newCell.textContent = "Rating: ";
      newText = document.createTextNode(getRatingStars(review.rating));
      newCell.appendChild(newText);
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-review";
      newText = document.createTextNode(review.review);
      newCell.appendChild(newText);
    });
  }
  
  function getRatingStars(rating) {
    let starsHtml = '';
    for (let i = 0; i < rating; i++) {
      starsHtml += '★ ';
    }
    for (let i = rating; i < 5; i++) {
      starsHtml += '☆ ';
    }
    return starsHtml.trim();
  }