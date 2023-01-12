---
title: Window is not defined when trying to use a React component from a UI library with Webpack ^4 in Next.js
readIn: 5min
date: 11/01/2023
---

Note after reading: This post was made just to share an experience, and if you are a Webpack champion and you see some mistake, or you just want to talk a little bit, please contact me on [Twitter](https://twitter.com/MontoneNico)!

![window is not defined error](/post/window-is-not-defined.png)

I faced this issue when we start using our React library in a new Next.js project, the first thing I think was: “Ok, let’s check if it’s defined each time I try to use it”. And I found components like: 

```jsx
export const SomeLibraryComponent = () => { 
	useEffect(() => {
		window.setTimeout(() => ...some logic)
	},[])

	return (
		...
	)
}
```

The component is a minimalistic representation of what the logic was. 

So, after checking if the window is defined we ended up with a component looking like: 

```jsx
export const SomeLibraryComponent = () => { 
	useEffect(() => {
		if (typeof window === 'undefined') {
			// window is not defined, we are on server -> just return
			return
		}
		window.setTimeout(() => ...some logic)
	},[])

	return (
		...
	)
}
```

But this didn’t solve the issue, if you are facing this, and works for you, I’m happy to hear that! 
In our case, probably because how we built the library didn’t work. 

So I start looking at our `webpack.config.js` and we had a lot of things but the entry and output were: 

```
**entry**: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'pluggyUI',
    libraryTarget: 'umd',
  },
```

Reading Webpack docs, version 4 didn’t have great docs about the output configuration, but the new version (5 at this moment) has a lot of information about the output object, and the thing that did the trick was [this one](https://webpack.js.org/configuration/output/#outputglobalobject).

### Understanding globalObject in Webpack

Since the docs don’t explain too much about this, I start testing and experimenting with the `globalObject` property. 

Seeing the [Webpack codebase](https://github.com/webpack/webpack) and after experimenting, I learn that it could have any value, for instance, you can use `pepe` as `globalObject`, it won’t work hopefully at runtime, but Webpack will allow it. But with this dum example, I really want to remark that anything you put as `globalObject` inside the `output` object, Webpack will use it to refer to *****the global object at runtime compilation.*****
Here you have the codebase where it uses it:

![Part of codebase of Webpack that implements globalObject](/post/global-object-usage.png)

### The solution

One thing I didn’t mention earlier, was that if we import a component dynamically in Nextjs, it works. On the client side, our library was working, so the problem was with the server.

So I change our `webpack.config.js` to: 

```jsx
entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'pluggyUI',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
```

Let’s understand this magic line above. `self` is equivalent to `window` in the browser (the default value in Webpack). But `self` in the server is not defined, so instead, we use `this` (global object in server). So if is used in a non-browser environment, we will have access to that global object. 

Keep in mind that this configuration would not work properly in some use cases and can cause some issues when running in different environments. It is better to be specific and choose a global object that suits your use case. 

But in our case, it works in all situations and it was very funny to understand a little bit more Webpack.