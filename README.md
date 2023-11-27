# Shopping Cart

This program is react based using react redux to manage state. Its makes a call to [Fake Store API](https://fakestoreapi.com/docs) which is handled in store. Then various components like App and Cart uses actions crated in the store to dispatch various commands and access to the store and it various items we need.

The application can be viewed online on [Netlify](https://shyftlab-react.netlify.app)

# Store Actions and Reducers

The store has various actions that update the cart items in which we can remove, add, reduce and clear all the items in the cart items.

## addToCart

This action takes a product as payload. If the product is not there it adds to the shopping cart items and it it does increases the quantity

## reduceFromCart

This action reduces the quantity of the item in the cart one number at time but doesn't go below 1.

## removeFromCart

This action completely removes the product from the cart.

## clearCart

This action removes all the items from the shopping cart.

# Folder Structure

A simple folder structure was used to make things straight forward.

## app

This folder houses the store.js file which calls in configureStore and cartSlice to make a react redux store

## components

This folder contains the components used all over the application. It contains subfolders with names that adhere to overall usage. the product sub folder contains the component ProductList which displays all the products and Product component to show a single product. A navbar sub folder for the Navbar also a Cart component that just shows the word Cart with a small circle showing how many items in the cart. Button sub folder was just show to show we can make more components

## features

This folder contains the slices we need for the redux store

## router

This contains the Root component required for react router v6.4+

## pages

This folder contains the pages mainly meant for routing.

# Pagination

Simple pagination was used. There are certain things that update in store which helps us in keep the pagination. Both state and reducers have properties which help us in pagination. Note I kept the pagination length to 10 as FakeApi sometimes returns 20 items

## State

### displayList

In state we have displayList which is subset of the all productList. The amount of the subste depends on which step we are.

### page

This property helps us keep track of how many pages to show in scroll.

## reducers

### updatePagination

This action checks of pagination is done or not. If done return. Otherwise check to see if current step that is amount of display items is less that productList lenght, if yes then we can add one more to the page, increase displayList size to 10 more items. Then we check if the next step if we is bigger than length of productList, if yes then we done with pagination.
