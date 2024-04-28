const ol = document.querySelector("ol");
const movies = [
    {
        title: "The Cloverfield Paradox",
        year: 2018,
        director: "Julius Onah",
        picture: 'https://m.media-amazon.com/images/M/MV5BMTAwOTIxMDA0MjZeQTJeQWpwZ15BbWU4MDg1MjgzNzQz._V1_.jpg'
    },
    {
        title: "Bolt",
        year: 2008,
        director: "Chris Williams and Byron Howard",
        picture: 'https://m.media-amazon.com/images/M/MV5BNDQyNDE5NjQ1N15BMl5BanBnXkFtZTcwMDExMTAwMg@@._V1_FMjpg_UX1000_.jpg'
    },
    {
        title: "Rio",
        year: 2011,
        director: "Carlos Saldanha",
        picture: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Rio2011Poster.jpg'
    },
];
const template = movies.map(movies => `
<li>
    <p>Title: ${movies.title}</p>
    <p>Year: ${movies.year}</p>
    <p>Director: ${movies.director}</p>
    <p><img src="${movies.picture}" style="width: 200px"</p>
</li>
`);
console.log(template.join(''));
ol.innerHTML = template.join('');