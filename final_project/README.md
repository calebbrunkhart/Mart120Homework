One of my biggest challenges with this project was the collision with walls and floors. 
I ended up changing my plan slightly and doing only floor type platforms instead of walls.
For whatever reason, I always encountered issues with larger blocks that had walls and tops to stand on.
the way I fixed this was by making the platforms thin enough that they didn't really have any walls to run into.
The error is still in the code, but I found a not so perfect work around. 
It can still be noticed if you hit the side of a platform in the right spot (you get teleported to the top of the platform).
I searched for the error in my collision logic, but after hours upon hours of searching and debugging, I could not fix the strange interaction.

My biggest challenge by far was the order of how I started building my game. 
I started by building levels and then designing a character and then trying to solve the physics.
What I should have done right away (and had to end up doing anyway) was to build the physics and game function and then design levels and such. 
I designed two of my three levels by the time I decided to work on the jump mechanic. 
I had to scrap my entire design and the very simple character movement I had developed up until that point.
This was because the way my character moved around the screen and how gravity was somewhat affecting it didn't work very well with the jumping ability.
It was very frustrating to have to start from square one, but once I restarted and built all of the physics before levels and enemies, I had a much easier time.

The jump was still a pain to design though.
Many times, the player would get stuck in some floors but not others. Other times, the player would be able to jump on one platform, but not on another.
After a lot of researching and debugging, I found a very simple solution to my issue. I added a jump counter to my code.
In other words, if the character is in the air, they can't jump. If they collide with a platform, the ground is moved up to that point and the jump counter is reset. 
This created a new error, where the character would float because I forgot to reset the ground level if the left the platform. 
This was a very easy fix as I just had to add an else statement that reset the ground level. 

One of my biggest triumphs was getting certain enemies, only on level 3, to chase the player, rather than just bounce back and forth or not move. 
I was really excited about this idea, as I wanted the last level to be very difficult. 
The first version I implemented of the enemy chasing the player wasn't quite right.
I forgot to take into acount the actual distance between the player and enemy, so the enemy would move in a set direction, rather than directly towards the player.
I asked searched for some answers and very quickly found that I had to use trigonometry to find the angle at which the enemy should move. 
A rather simple solution to a seemingly really hard problem.
This breaking a problem down into smaller problems really does help.
All I could think of was 'move enemy towards player' and that's exactly why my implementation didn't work. 
I need to separate the problem into all the different things it actually needed to do.

My personal favorite thing I implemented was, by far, the health system and the square that bounces around on the non-level screens. It's very basic. 3 hits, you lose. That's it, but something about the blue squares that look like the player and let you know your life total felt really cute and was super fun to implement. Also, figuring out how to concisely write code that changes the colors of the squares felt good to figue out. The square bouncing around the menus was just a cute addition I made to add some life to the otherwise static menus. Loved how it came out, it's like the dvd logo :)

Once I got all the function written, the rest of the game was a breeze. I just had to call functions and design levels. Designing the levels and then testing them out
myself, was one of my favorite things to do. Yes, calling the same function over and over again to draw rectangles on the screen in different spots was a drag at times,
but seeing all of it come together in the finished product was well worth it. Also, testing was super fun because I got to see, first hand, that the third level is really hard and rage inducing if you are terrible at platforms, such as myself.

One of my favorite project experiences of all time for sure.


Some things I decided not to implement because of time constraint, challenge, or just deciding I didn't want to do it:
- Player sprite. I was originally going to make a little guy that I would import, but decided against it because I immediately fell in love with the idea of everything being simple shapes. Kinda like a basic cool-math game.

- Background image. This was a last minute thought that I decided against because I would have wanted to draw my own background and I didn't have the time to come up with three different background for the levels. I tried implementing a basic image as a background and was having trouble with it as well, so I decided to keep the background a simple color.

- Enemies that shoot things at you. I decided that this didn't really fit the overall feel of the game, so I decided against it.