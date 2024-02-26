let songs = [];

function addSongToAlbum(albumId, songData) {
    const newSong = {
        id: songs.length + 1, 
        albumId: albumId,
        name: songData.name,
        singer: songData.singer,
        category: songData.category,
    };
    songs.push(newSong);
    return newSong;
}

function deleteSongFromAlbum(songId) {
    const songIndex = songs.findIndex(song => song.id === songId);
    if (songIndex !== -1) {
        const deletedSong = songs.splice(songIndex, 1);
        return deletedSong[0];
    } else {
        return null;
    }
}

module.exports = { addSongToAlbum, deleteSongFromAlbum };