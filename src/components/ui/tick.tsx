const Tick = function(){
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-4 h-4 text-green-500 mr-2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
}

export { Tick }

const Progres = function(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-4 h-4 text-yellow-500 mr-2">
            <circle cx="12" cy="12" r="10" strokeOpacity="3" />
            <line x1="12" y1="12" x2="12" y2="7" />
            <line x1="12" y1="12" x2="15" y2="12" />
        </svg>
    );
}

export { Progres }
