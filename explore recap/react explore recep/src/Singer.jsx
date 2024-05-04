export default function Singer({ singer }) {
    // Check if singer is defined before accessing its properties
    if (!singer || !singer.name) {
        return <li>No singer data available</li>;
    }

    // If singer is defined and has a name property, render the singer's name
    return <li>{singer.name}</li>;
}
