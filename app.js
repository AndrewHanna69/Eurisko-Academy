const { addCategory } = require('./category');

const { createAlbum, updateAlbum, deleteAlbum, getAlbumById } = require('./albums');

const { addSongToAlbum, deleteSongFromAlbum } = require('./songs');

function testCase() {

    const popCategory = addCategory("Pop", "Description");
    const jazzCategory = addCategory("Jazz", "Description");

    const myAlbum = createAlbum("My Album", "Description");
    const tempAlbum = createAlbum("Temp Album", "Description");

    const popSongs = ["Pop song 1", "Pop song 2", "Pop song 3"];
    const jazzSongs = ["Jazz Song 1", "Jazz Song 2", "Jazz Song 3"];

    popSongs.forEach(song => addSongToAlbum(myAlbum, song, popCategory));
    jazzSongs.forEach(song => addSongToAlbum(tempAlbum, song, jazzCategory));

    updateAlbum(myAlbum, {category: popCategory});
    updateAlbum(tempAlbum, {category: jazzCategory});

    deleteAlbum(tempAlbum);

    const finalSongIndex = myAlbum.songs.length - 1;
    deleteSongFromAlbum(myAlbum.songs[finalSongIndex]);
}

testCase();