// Creates events for the keys passed in the form (key property)Press. These events are dispatched after 
// those keys are pressed. One event per key
// Ex: the key value for enter is Enter, so if you pass Enter it will setup an enterPress event for you.
// More than one key can be passed separated by commas

export function keyact(node, keys) {
    let keyarr = keys.toLowerCase().split(',').map(k => k.trim());

	const handleKeyboard = (event) => { console.log(event.key)
        event.preventDefault();
        let evKey = event.key.toLowerCase();

        // Some key property values aren't best for event names, you can use
        // the switch structure below to tweek names to any keys you like
        switch(evKey) {
            case 'escape': evKey = 'esc'; break;
            case ' ': evKey = 'space'; break;
        }

        if (keyarr.indexOf(evKey) > -1) {
            let eventName = evKey + 'Press';                            console.log(eventName)
            node.dispatchEvent(new CustomEvent(eventName));
        }
	};
	node.addEventListener('keyup', handleKeyboard);

	return {
		update(newkey)  { key = newkey; },
		destroy()       { node.removeEventListener('keyup', handleKeyboard); }
	}
}