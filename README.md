## Week 2 Assignment: Student Store Project

Submitted by: **Miguel Angel Garza Carranza - maiky@meta.com**

Estimated time spent: **13** hours spent in total

### About

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of CodePath. The web app consists of a frontend user interface for potential customers to browse available goods and a backend API to handle data management. The API will be built with Node and Express, and the UI will be built with React.

Check out our [deployed Student Store](https://codepath-student-store-demo.surge.sh/) for reference! Explore the exemplar by trying the following tasks:

- Click on the different categories (clothing, food, etc.) to filter the list of products.
- Search for an existing product.
- Search for a product that doesn't exist.
- Add several products to the shopping cart.
- Checkout and view the final receipt.

### Walkthrough Video

<a href="https://www.loom.com/share/e374760a3e7947b8b1cee607237dc360">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/e374760a3e7947b8b1cee607237dc360-with-play.gif">
</a>

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

## Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Lab 1 (Fast Food Feud) was the most helpful to me because it provided a recap of what React is and why it exists. It helped me remember how to create components and utilize hooks, specifically the useState hook. I used this hook extensively throughout my weekly project. It was necessary to re-render components whenever I clicked on a category, as the product grid needed to display products from that specific category. The same applied to the search bar. Overall, this lab was incredibly useful. Although I initially had some difficulties learning to use useState, it took me no more than an hour to grasp it and incorporate it into my website. I would love to give a shoutout to that hook as it was the key to successfully implementing all the core and stretch features on time!

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would add three minimal yet highly functional features to my project:

Firstly, I would include a button in the shopping cart that, when clicked, instantly clears all previously added products. This would be convenient for users who have an expanded sidebar and want to remove all items at once.

Secondly, I would implement a popup notification that appears in the bottom right corner whenever a product is added to the shopping cart. The popup would display a message like "Product added" and show an image of the other products already in the cart. It would provide a visual confirmation without including details such as price, total, subtotal, or taxes, focusing solely on the products and quantities.

Lastly, I would reintroduce the "Most Expensive" category as a filtering option within each component. This filter would allow users to view products within a specific category (e.g., tech) but sorted by their price in either ascending or descending order. It would provide an additional way for users to explore and compare products based on their prices.

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I loved the final result since this time I managed my time much better. As a result, I was able to recheck the code for irregularities, bugs, and other issues. I thoroughly enjoyed learning new technologies and frameworks, particularly React and useState. Even though I would have loved to add the three minimal features I mentioned earlier, I am overall satisfied with the project. Moving forward, my focus in the next week's project will be on the quality of the code. I realized that as I added more lines, it became increasingly challenging to maintain and understand the code. To overcome this, I will plan to dedicate time to establish a clear structure from the beginning. This will help me avoid unforeseen issues during the project's development phase.