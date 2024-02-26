let albums = [];

function createAlbum(albumData) {
    const newAlbum = {
        id: albums.length + 1, 
        name: albumData.name,
        description: albumData.description,
        showNbTracks: albumData.showNbTracks,
        createdAt: albumData.createdAt,
        updatedAt: albumData.updatedAt,
        lastSongAddedAt: albumData.lastSongAddedAt,
    };
    albums.push(newAlbum);
    return newAlbum;
}

function updateAlbum(albumId, albumData) {
    const albumIndex = albums.findIndex(album => album.id === albumId);
    if (albumIndex !== -1) {
        albums[albumIndex] = { ...albums[albumIndex], ...albumData };
        return albums[albumIndex];
    } else {
        return null; 
    }
}


function deleteAlbum(albumId) {
    const albumIndex = albums.findIndex(album => album.id === albumId);
    if (albumIndex !== -1) {
        const deletedAlbum = albums.splice(albumIndex, 1);
        return deletedAlbum[0];
    } else {
        return null; 
    }
}

function getAlbumById(albumId) {
    return albums.find(album => album.id === albumId);
}


module.exports = { createAlbum, updateAlbum, deleteAlbum, getAlbumById };