const images = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve' , 'thirteen', 'fourteen', 'fifteen']
const res_name = [
          "Cafe Bliss",
          "The Food Factory",
          "Spice Junction",
          "Grill House",
          "The Curry Bowl",
          "Patna Bites",
          "Tandoori Tales",
          "Chow Down",
          "Urban Zayka",
          "Pizza Mania",
          "Royal Feast",
          "Biryani Express",
          "Taste of Punjab",
          "Chinese Delight",
          "Flavors of India",
          "Street Eats",
          "Hunger Hub",
          "Dessert Haven",
          "Sizzlers Spot",
          "Fusion Diner"
        ];
        
        const food_type = [
          "North Indian",
          "South Indian",
          "Chinese",
          "Continental",
          "Italian",
          "Mexican",
          "Thai",
          "Mughlai",
          "Fast Food",
          "Street Food"
        ];
        
        const patna_location = [
          "Kankarbagh",
          "Boring Road",
          "Fraser Road",
          "Ashok Rajpath",
          "Rajendra Nagar",
          "Bailey Road",
          "Patliputra Colony",
          "Digha",
          "Rajiv Nagar",
          "SP Verma Road",
          "Gandhi Maidan",
          "Exhibition Road",
          "Kurji",
          "Anisabad",
          "Phulwari Sharif",
          "Danapur",
          "Patna City",
          "S.K. Puri",
          "Bankipore",
          "Nala Road"
        ];

        const restaurants = []
        for(let i = 0; i<100; i++){
          const obj = {}
          obj["image"] = images[Math.floor(Math.random()*images.length)]
          obj["name"] = res_name[Math.floor(Math.random()*res_name.length)]
          obj["rating"] = (Math.random() * 4 + 1).toFixed(1);
          obj["food_type"] = food_type[Math.floor(Math.random()*food_type.length)]
          obj["price_for_two"] = Math.floor(Math.random()*2401+100)
          obj["location"] = patna_location[Math.floor(Math.random()*patna_location.length)]
          obj["distance"] = (Math.random() * 9 + 1).toFixed(1);
          obj["offer"] = Math.floor(Math.random()*30)
          obj["alcohol"] = Math.random() > 0.7
          obj["restaurant_opening_time"] = Math.floor(Math.random() *24)
          obj["restaurant_closing_time"] = (obj["restaurant_opening_time"]+12)%24

          restaurants.push(obj)
        }
//          Array to json

const fs = require('fs');
fs.writeFileSync('restaurants.json', JSON.stringify(restaurants , null , 2));
// Converts the restaurants array into a JSON string.
// The second parameter is null, and the third parameter (2) specifies the indentation level in spaces for better readability.

