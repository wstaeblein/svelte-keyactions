# Svelte Key Actions


Simple Svelte action to enabled individual key events on any element. Useful when you need to trap only a few keys and don't want to bother writing specific code for it. Just call it passing the keys you need and listen to the events accordingly.

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

## Instalation

**Only tested on Svelte 3**

This is so simple that it doesn't need a NPM package. Just copy the file ``/src/Keyact.js`` to your project's appropriate folder and import it where needed.


## Example

Download this code, extract it and run:

```
npm run dev
```