type Eventtype = 'click' | 'scroll' | 'mousemove';

type ExcludeEventType = Exclude<Eventtype, 'scroll'>;

function handleEvent(event: ExcludeEventType) {
    console.log(`Handling event: ${event}`);
}

handleEvent('click'); // Valid
handleEvent('mousemove'); // Valid
// handleEvent('scroll'); // Error: Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEventType'.