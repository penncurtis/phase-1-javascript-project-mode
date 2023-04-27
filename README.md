### Introduction/Basic Story of Application

This application showcases all the members of the original 'Jedi Council', as seen in the first installment of the cinematic series known as 'Star Wars.' We landed on this idea as we thought it would allow us to demonstrate our abilities and proficiency in the tools we have learned up until this point. It is important to note that the 'Jedi Council' itself varies throughout timelines. For the purposes of this project, we chose to portray the 'Jedi Council' from the third movie: "Star Wars: Episode III – Revenge of the Sith."

### Core Features

The first core feature is what you see when you land on the page is all of the council members displayed next to each other in a div. We populated this div by fetching from a local API.

The first event listener we used is included in the second core feature of our application. It is the showcase of a Jedi, and it can be seen by scrolling down the page slightly. The Jedi you see if the first from the list above and highlights some basic info about that given character. Furthermore, if the user were to click on any of the Jedis within the council display above, their information and image would be shown in the main showcase. 

The second event listener we used is one that the user would have likely already run into by this point. It is the ability to randomize the "allegiance" of each Jedi by passing the cursor over it's image within both the showcase display and council layout. 

The third event listener of this application gives the user the ability to add a new member to this Jedi Council. As is layed out in the 'form' at the bottom of the page, by inputting a new name, birth year, image, species type, and appearence list, the user can append a character to the council. This new character will also be subject to the random changes in "allegiance" as the user passes their cursor over them, as well as be able to be showcased upon being clicked. 