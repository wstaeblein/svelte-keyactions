<script>
    import { keyact } from './KeyAct.js';

	let name = '';

    function processName() {
        alert('Name processed sucessfully!');
    }

    function cancelName() { 
        name = '';
    } 
    
    function processSpace() {
        alert('Space was pressed');
    }
</script>

<main>
    <div>
        <label for="name">Name</label>
        <input 
            type="text" 
            id="name" 
            placeholder="Enter your name" 
            bind:value={name} 
            use:keyact={'enter, esc, space'} 
            on:escPress={cancelName} 
            on:enterPress={processName} 
            on:spacePress={processSpace}
            
        />    
    </div>
</main>

<style>
    main{
        max-width: 500px;
        margin: auto;
    }
</style>