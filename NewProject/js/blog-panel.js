var x=[["image/blog/oahu.jpg","Things we remember the most on Oahu","First of all get to the northern coast , to see real waves at the Sunset Beach then . Experience the full force and power of the ocean every cell of his body ,  watching the surfers nimble , and promise yourself , that when - something will be able to as well ! Walk through the streets of Waimea , steeped in surf culture and an atmosphere of love for the ocean , sun , palm trees , waves and life . Choose any cafe you like  with pleasant music and tanned surfers ,order that - something incredibly tasty and feel like your at this celebration of life . And then you can leisurely drive to Haleiwa , get comfortable on the shore and enjoy the most beautiful sunset , catching yourself thinking that you are ready to stay here , in the homeland of surfing , forever !"],
["image/blog/regrets.jpg","Why you’ll never regret traveling?","Life never gives you the same chance twice. Doors don’t reopen. Once they shut, they shut for good.It’s easier to travel than you think. Once you take that first step out the door, anything is possible. Whether it’s a two week trip to Bali, a year-long trip around the world, or finally taking the family to Disney, get going now because you are missing a big world out there. Get ready to meet your new best friends! There’s nothing like a shared experience to bring people together. You’ll make so many friends on tour and some of them may even become friends for life. Not only will you make friends with fellow tourists, you’ll probably hit it off with a local or two as well."],
["image/blog/southafrica.jpg","Go on a safari or surfing","Most people come to South Africa to go on a safari — and for good reason. It’s home to some of the best game drives in the world and you’ll want to spend at least a couple of nights in one of the hundreds of national parks. There’s truly nothing like it.     Both the Atlantic Ocean and the Indian Ocean coasts of South Africa offer world-class surfing. Jeffrey’s Bay on the south coast near Port Elizabeth is the most famous surfing destination in South Africa and offers big waves and multiple breaks."],
["image/blog/privilege.jpg","Not everyone can travel as much as you","Even if you’ve hitchhiked around the world with no money, worked overseas, cut costs to travel around the world on $10 USD a day, or travel-hacked your way to a first-class ticket, you have the opportunity to do something most people go to sleep only dreaming about. You have the freedom and choice to move about the world in a way most people don’t.      That’s a form of privilege."],
["image/blog/taiwan.jpg","Go on Northern Coastline and hit the Beaches","Head to the coast for some incredible lunar-like landscapes at Yehliu Geopark. There are some unique, otherworldly rock formations, including one that looks like Queen Elizabeth (though it took over 4,000 years to form) that are a popular tourist attraction.      The beaches of Kenting on the southern tip of the island offer fun in the sun. White Sand Bay is the most popular and a great place to soak up the sun, swim, snorkel, or even go diving (just keep an eye out for jellyfish!). Other great beaches are South Bay and Little Bali Bay."]];  

function reply_click(){return false;}
function cl(){return false;}
$(document).ready(function(){
    var blogs = Array.prototype.slice.call( document.querySelectorAll('.blog-panel'));
    var blogs_count = blogs.length;
    var active_blog_index = 0;

     var title = document.getElementsByClassName("big-container-title")[0];
     var text = document.getElementsByClassName("big-container-text")[0];
     var img = document.getElementsByClassName("big-container-image")[0];
     
     img.src = x[active_blog_index][0]
     title.innerHTML = x[active_blog_index][1];
     text.innerHTML = x[active_blog_index][2];
    
    for (var i = 0; i < blogs_count; i++) {
        blogs[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");

        img.src = x[blogs.indexOf(this)][0];
        title.innerHTML = x[blogs.indexOf(this)][1];
        text.innerHTML = x[blogs.indexOf(this)][2]; 

        if ($(window).width() >= 768) {
          current[0].className = current[0].className.replace("active", "");
          this.className += " active";
          
        }
        
        
        
        });
      }

 });

