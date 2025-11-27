/**
 * 
 * @param {Element} element 
 */
export function addMyComponent(element) {
    // Sjekke at `element` ikke er tilsvarende `null` / `nullish`
    if (element === null) {
        throw new Error("Element is `null` !");
    }

    const newElement = document.createElement("p");
    newElement.textContent = "<bold>Hello, World!</bold>";

    newElement.addEventListener("click", () => {
        addMyComponent(element);
    });

    element.appendChild(newElement);
}
