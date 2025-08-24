function htmlTag(arr){
    let fileLocation = arr[0];
    let alternativeText = arr[1];

    //<img src="{file location}" alt="{alternate text}">
    console.log(`<img src="${fileLocation}" alt="${alternativeText}">`);
}