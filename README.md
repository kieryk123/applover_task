# applover_task

Frontend developer recruitment task for Applover made by Paweł Kieryk.

LIVE VERSION: [CLICK HERE](http://dev.fireart.pl/applover/)

### I used:

- Vue

- Vuex

- Vue Router

- Axios

- Vue CLI 3

- SCSS

- BEM naming methodology

### Design

I've implemented the design that you delivered me. I've done a few things different than it's in design, but I think it won't be considered as a fault.

### Code

My approach was to build reusable components, so I can reuse them wherever I want in the future - in case of developing this app later.

Custom inputs that I've built are elastic and have additional properties like name, type and inputmode.

To increase application performance I've used functional components where it was possible.

In SCSS, I've declared some variables and mixins to develop my app faster.

### What would I do next:

- Make a responsive version.

- Set app language based on user location (It's possible to get lat and lng from the browser, but to get country I will have to use external API).

- Add modal component (Similiar way like I did tooltip - scoped slots).

- Add validation on the login form (I would use VeeValidate because I feel comfortable using this library).

- Add messages with value limit in configurator while setting width, height, beams, and posts (It will increase UX).

- Add background behind the door in 3D mode.

- Improve copying door configuration URL to clipboard (Now, I use `navigator.clipboard`, but it does work only on HTTPS and doesn't work across all browsers. I would use `document.execCommand` instead.)

I haven't done things from the list above because I simply had not enough time to do that. I've decided to finish critical things first, but I've left my comments on how I would do that ;)

### Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production
npm run build
```
