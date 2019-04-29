👋🏻

You can run this with `npm run start` or `yarn start`

I went with reach router and grommet because they're accessible by default, which shouldn't be taken for granted when you're hacking together an afternoon project that you want to deliver usable code that somewhat resembles production quality. I'm generally not a huge fan of UI libraries because of how dirty the markup is, but since these components support styling via styled components, you can abstract all of that out of the JSX and have readable markup.

Didn't have time to do any integration testing, but I would have mostly just used jest to make sure all the label texts were visible in the component, and maybe some edge case testing for values. Didn't have time to do any animations or decent layout either 😃, and if I had a little extra time I would have done photo support.

The biggest problem I had was that the api kept going down or throttling me, so I just mocked out the data. It wouldn't be a big deal to refetch it and support the api calls.

here's the app: https://yet-another-coding-challenge-ryanmagoon.find-my-spot1.now.sh

cheers
