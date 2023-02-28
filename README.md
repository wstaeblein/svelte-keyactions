# Svelte Key Actions


Simple Svelte action to enable individual key events on any element. Useful when you need to trap only a few keys and don't want to bother writing specific code for it. Just call it passing the keys you need and listen to the events accordingly. The custom events created are always the key name followed by 'Press'. If you pass enter to the action you'll have an enterPress event that will fire when ENTER key is pressed and released, if you pass esc you'll have an escPress event that behave likewise.

```html
<script>
    import { keyact } from './KeyAct.js';

    let name = '';

    function processName() {
        // Do something
    }

    function cancelName() {
        // Do something
    }
</script>

<section>
    <div>
        <label for="name">Name</label>
        <input 
            type="text" 
            id="name" 
            placeholder="Enter your name" 
            bind:value={name} 
            use:keyact={"enter, esc"} 
            on:enterPress={processName} 
            on:escPress={cancelName} 
        />    
    </div>

</section>

<style>

</style>
```

[CHECK OUT THE DEMO](https://wstaeblein.github.io/svelte-keyactions)

For some keys that are not straightforward, such as SPACE you can tweak a switch structure in the ``/src/Keyact.js`` file to change the name of the event. When the SPACE key is pressed, the key property returns an actual space and that cannot be used in an event name. So we change it to the word space and we get a spacePress event.

## Instalation

**Only tested on Svelte 3**

This is so simple that it doesn't need a NPM package. Just copy the file ``/src/Keyact.js`` to your project's appropriate folder and import it where needed. All other files are just there for the sake of the example.


## Example

Download this code, extract it and run:

```
npm i
npm run dev
```