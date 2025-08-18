function calculateConeVolume(radius, height) {

    let volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;

    let slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let area = Math.PI * radius * (radius + slantHeight);

    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}
 calculateConeVolume(3, 5)