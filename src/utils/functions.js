export const shortHandler = ( text ,dig ) => {
    const splited = text.split("");
    const slicer = splited.slice(0 ,dig)
    let newText = slicer;

    if ( text.length > dig ) return newText.join("") + ".."
    return newText.join("")
}