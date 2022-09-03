# SQLI Frontend code test

Welcome to our code test! Please follow the instructions below. You can always ask us questions while you are doing the test if anything is unclear or confusing.

## Getting Started

```
npm install
npm start
```

## The test

1. Fork this repository.
2. Make `./components/DogBreeds.tsx` fetch data from `https://dog.ceo/api/breeds/list/all` and add the results to the table. Show a loading indicator while the data from the API is loading. The first character of the breed names should be in uppercase, and sub breeds should be a bullet list.
3. Create a sorting function to be able to sort the table data in DogBreeds.tsx upon clicking the "Breed" column header. The API doesn't support sorting, so you have to do it in the frontend. Clicking multiple times on the same column header should toggle the sort between ascending and descending.
4. Make it possible to check a checkbox by clicking the label text in `./components/Checkbox.tsx`.
5. Add an optional argument to `./components/Checkbox.tsx` to set if the component should be checked or not. Then create a state in `./App.tsx` to keep track of which of the checkboxes are selected.
6. Create a Button component that has the following arguments: label, onClick, disabled and isLoading. Use your button component in `./App.tsx` for the Checkboxes section and make the button work (Select second checkbox and Reset).
7. Make `./components/AgePredictor.tsx` work by using the API `https://api.agify.io/?name=[INPUT]`. While the data is loading, the `isLoading` prop in the button should be true, and that should replace the button label with `Loading...`. Show the results however you choose.
8. The News Feed needs to be implemented, make `./components/NewsFeed.tsx` show data from `./data/wordpress.json`. It contains 100 articles which can be slow to render. Make it so that the array only contains objects with the title, link and date (without changing the wordpress.json file). Limit the title length to 80 characters and use ellipsis (...) if it's longer, also present dates in the format "MM/DD/YYYY". Is there a way you can make this calculation of news items not run on each component rerender?
9. Turns out that there are some duplicates in the News Feed. Find a good way of removing them without touching `./data/wordpress.json`.
10. The design is a bit wide on desktops, we would like to show each component in a CSS grid with two columns on desktop and one column on mobile.
11. In `./components/Header.tsx` there is a "First dog breed" that we would like to show the first items breed from the "DogBreeds" component. To share this information between Header and DogBreeds we want you to create a React Context and use that context in the two components.
12. In `./@types/index.d.ts` there is an Animal type. Create another type called ExtendedAnimal that is inheriting Animal, but owner should be replaced with an array called owners. Owners should have name, address, phone and lastBoughtDate.
13. Create a pull request from your forked repository to ours in order for us to validate your work.

Good luck!
