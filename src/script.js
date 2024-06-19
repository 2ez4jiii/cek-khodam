window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nama = urlParams.get('nama');
    const daerah = urlParams.get('daerah');

    document.getElementById('outputName').textContent = nama;
    document.getElementById('outputRegion').textContent = daerah;

    const imgArray = [
        'img/ambatron.jpeg',
        'img/ksatriakegelapan.jpeg',
        'img/malasbanget.png',
        'img/sengajayabikinakumarah.jpg',
        'img/infokicaumania.jpg'
    ];

    const randomIndex = Math.floor(Math.random() * imgArray.length);
    const selectedImage = imgArray[randomIndex];

    document.getElementById('khodamImage').src = selectedImage;
    
};