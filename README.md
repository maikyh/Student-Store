## Week 2-3 Assignment: Student Store Project

Submitted by: **Miguel Angel Garza Carranza - maiky@meta.com**

Estimated time spent: **20** hours spent in total

### About

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of CodePath. The web app consists of a frontend user interface for potential customers to browse available goods and a backend API to handle data management. The API will be built with Node and Express, and the UI will be built with React.

Check out our [deployed Student Store](https://codepath-student-store-demo.surge.sh/) for reference! Explore the exemplar by trying the following tasks:

- Click on the different categories (clothing, food, etc.) to filter the list of products.
- Search for an existing product.
- Search for a product that doesn't exist.
- Add several products to the shopping cart.
- Checkout and view the final receipt.

### *Week 2* Walkthrough Video

<a href="https://www.loom.com/share/e374760a3e7947b8b1cee607237dc360">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/e374760a3e7947b8b1cee607237dc360-with-play.gif">
</a>

## *Week 3* Application Features

### Core Features

- [x] Users can click to expand the shopping cart in the left navigation.
- [x] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [x] Users can click the '-' button on a product cart to decrement that product in the shopping cart.
- [x] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [x] Users can checkout, and receive a receipt confirming their purchase.

### Stretch Features

- [x] Create an endpoint for fetching all orders in the database and an endpoint for serving an individual order based on its ID.
- [x] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.
- [x] Allow users to use an input to filter orders by the email of the person who placed the order.
- [x] When users click on any individual receipt, they will see the same shopping cart table they had when they confirmed the purchase.

## *Week 2* Application Features

### Core Features

- [x] The website displays header, banner, search, product grid, about, contact, and footer section.
- [x] The website displays the products at the [GET /store endpoint](https://codepath-store-api.herokuapp.com/store) on initial page load.
- [x] Users can click on a category (clothing, food, etc.) to filter the product grid by type.
- [x] Users can search for products.
- [x] User can click on a product in the grid to navigate to a new page containing additional product details.

### Stretch Features

- [x] Users can click to expand the shopping cart in the left navigation.
- [x] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [x] Users can click the '-' button on a product cart to decrement that product in the shopping cart.
- [x] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [x] Users can click on the "Most Expensive" category to view all products sorted by price in descending order.

## *Week 3* Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

As same as last week answer, Lab 1 (Gift Giver) was the one that helped me the most. It taught me how to use Express, which was completely new to me. In the first two weeks, I already had some basic knowledge of HTML, CSS, JS, and React, but working with Express was something completely different. The lesson on Express from CodePath was super helpful. It covered what Express is, how to use it, and how to implement it in JS. During the Gift Giver project, I learned how and why to call the routes and even used Postman to make sure everything was working fine. I also got the hang of terms like 'get' and 'post' and how to use them in JS to manage my own database. This lab was crucial in bringing the backend to life for my weekly project (Student Store, Part II), especially when it came to managing all the orders. I could add orders to the database using 'post' and retrieve past and individual orders using 'get' requests.

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would add four minimal yet highly functional features to my project:

Firstly, I would add some animations whenever the user click on expanding button to make a smoother User Experience, this transition would also be implemented whenever the user decided to collapse the sidebar.

Secondly, I would include a button in the shopping cart that, when clicked, instantly clears all previously added products. This would be convenient for users who have an expanded sidebar and want to remove all items at once.

Thirdly, I would implement a popup notification that appears in the bottom right corner whenever a product is added to the shopping cart. The popup would display a message like "Product added" and show an image of the other products already in the cart. It would provide a visual confirmation without including details such as price, total, subtotal, or taxes, focusing solely on the products and quantities.

Lastly, I would reintroduce the "Most Expensive" category as a filtering option within each component. This filter would allow users to view products within a specific category (e.g., tech) but sorted by their price in either ascending or descending order. It would provide an additional way for users to explore and compare products based on their prices.

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I was amazed by the project I could create in just 2 weeks. Time flew by, and I didn't even realize I had made over 100 commits. I couldn't wait to start the capstone project and see what I would be capable of achieving. This week was a completely new experience for me because I had no prior knowledge of the technology. However, this challenge helped me a lot in terms of searching for information, finding resources, and applying them. I became a **fast learner** and within a week, I gained a solid understanding of the technology, allowing me to implement it in last week's project and continue with the backend part. In future projects, I will allocate some time to establish a clear project structure. This will make it easier to manage as the code grows longer, this will ensure better code quality and make it more understandable for anyone who would like to contribute to the project or just for giving it a view.

## *Week 2* Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Lab 1 (Fast Food Feud) was the most helpful to me because it provided a recap of what React is and why it exists. It helped me remember how to create components and utilize hooks, specifically the useState hook. I used this hook extensively throughout my weekly project. It was necessary to re-render components whenever I clicked on a category, as the product grid needed to display products from that specific category. The same applied to the search bar. Overall, this lab was incredibly useful. Although I initially had some difficulties learning to use useState, it took me no more than an hour to grasp it and incorporate it into my website. I would love to give a shoutout to that hook as it was the key to successfully implementing all the core and stretch features on time!

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would add three minimal yet highly functional features to my project:

Firstly, I would include a button in the shopping cart that, when clicked, instantly clears all previously added products. This would be convenient for users who have an expanded sidebar and want to remove all items at once.

Secondly, I would implement a popup notification that appears in the bottom right corner whenever a product is added to the shopping cart. The popup would display a message like "Product added" and show an image of the other products already in the cart. It would provide a visual confirmation without including details such as price, total, subtotal, or taxes, focusing solely on the products and quantities.

Lastly, I would reintroduce the "Most Expensive" category as a filtering option within each component. This filter would allow users to view products within a specific category (e.g., tech) but sorted by their price in either ascending or descending order. It would provide an additional way for users to explore and compare products based on their prices.

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I loved the final result since this time I managed my time much better. As a result, I was able to recheck the code for irregularities, bugs, and other issues. I thoroughly enjoyed learning new technologies and frameworks, particularly React and useState. Even though I would have loved to add the three minimal features I mentioned earlier, I am overall satisfied with the project. Moving forward, my focus in the next week's project will be on the quality of the code. I realized that as I added more lines, it became increasingly challenging to maintain and understand the code. To overcome this, I will plan to dedicate time to establish a clear structure from the beginning. This will help me avoid unforeseen issues during the project's development phase.