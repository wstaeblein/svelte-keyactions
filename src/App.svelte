<script>
    import { keyact } from './KeyAct.js';

	let name = '';

    function processName() {
        alert('Name processed sucessfully!');
        cancelName();
    }

    function cancelName() { 
        name = '';
    } 
    

</script>

<main>
    <div>
        <h3>Please inform your name</h3>
        <p>Enter your name and ENTER to process or ESC to give up</p>
        <label for="name">First Name</label>
        <input 
            type="text" 
            id="name" 
            placeholder="Enter your name" 
            bind:value={name} 
            use:keyact={'enter, esc'} 
            on:escPress={cancelName} 
            on:enterPress={processName} 
        />    
    </div>

</main>

<style>
    main{
        max-width: 500px;
        margin: auto;
    }

    h3 {
        margin-bottom: 0;
        text-transform: uppercase;
    }

    p {
        margin-top: 0;
        font-size: small;
    }

    input {
        width: 330px;
    }
</style>