<!-- Tell us about your solution here -->

# Alexandria Pugia's Memerstack Frontend Challenge

## What I Did

- I decided to integrate a cookie that keeps track of the current color for 1 day.
  (This can easily be changed to 30 minutes, 2 hours, etc. based on preference, but I just defaulted it to 1 day.)

- I also added custom cookie getters and setters.
  I will readily admit, I found some online that worked and tweaked them from there to fit my specific use-case. It's what I'd do on the job if I'm trying to work quickly, so I feel like it's alright to do here. :)

- Ran out of time so I threw a cute little description text next to the color selector. I know, I know, it's such a **substantial** design upgrade. LOL.

## What I Tried

- I tried editing the button directly from the host folder, but due to CORS, you can't edit contents of cross-browser iFrames. It's no big deal, though. My cookie solution worked just fine.

- I was hoping to use sessionStorage to keep track of the color but it didn't work, again, because of CORS.

- Ran into some funky exponentially-growing event listeners for a while. Glad I got that bug squashed as it eventually made the page unusable.

## What I Wanted To Do

- I was hoping to add either Semantic UI or Material UI to add some nice headers and perhaps a `Card` around the color picker.

- I also wanted to resolve the bug where the cookieChanged event listener gets called twice, but I ran out of time while debugging it.

## Final Thoughts

While I think my solution works pretty well, I'm a little bummed out that I didn't have enough time to debug the double event listener call. I think it affects performance.
