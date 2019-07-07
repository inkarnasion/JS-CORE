const assert = require('chai').assert;
const expect = require('chai').expect;
const SoftUniFy= require('./03. Softunify_Ресурси');


describe('SoftUniFy class works correctly', () => {
    it('constructor initialize allSongs as an empty object', () => {
        let currentInstance = new SoftUniFy();
        let actual = currentInstance.allSongs;
        let expected = {};

        expect(actual).to.eql(expected, 'allSongs is not initialized as an empty object')
    });

    it('test downloadSong will be added to allSongs', () => {
        let currentInstance = new SoftUniFy();
        currentInstance.downloadSong('Me', 'song', 'country');
        let actual = Object.keys(currentInstance.allSongs)[0];
        let expected = 'Me';
        expect(actual).to.be.equal(expected, 'downloadSong does not add the song in allSongs');
    });

    it('playSong returns a message with unpresent song', () => {
        let currentInstance = new SoftUniFy();
        let actual = currentInstance.playSong('song');
        let expected = `You have not downloaded a song song yet. Use SoftUniFy's function downloadSong() to change that!`
        expect(actual).to.be.equal(expected, 'playSong does not return the message correctly');

    });

    it('playSong returns the correct song', () => {
        let currentInstance = new SoftUniFy();
        currentInstance.downloadSong('Az', 'song', 'folk');
        let actual = currentInstance.playSong('song');
        let expected = 'Az:\n' +
            'song - folk\n';
        expect(actual).to.be.equal(expected, 'playSong does not return the song correctly');
    });

    it('songList returns the correct songs', () => {
        let currentInstance = new SoftUniFy();
        currentInstance.downloadSong('Az', 'song', 'folk');
        let actual = currentInstance.songsList;
        let expected = 'song - folk';
        expect(actual).to.be.equal(expected, 'songList does not return the song correctly');
    });

    it('songList returns the correct message with no songs in allSongs', () => {
        let currentInstance = new SoftUniFy();
        let actual = currentInstance.songsList;
        let expected = `Your song list is empty`;
        expect(actual).to.be.equal(expected, 'songList does not return the message correctly');
    });

    it('rateArtist returns the average rate of votes', () => {
        let currentInstance = new SoftUniFy();
        currentInstance.downloadSong('Az', 'song', 'folk');
        let actual = currentInstance.rateArtist('Az');
        let expected = 0;
        expect(actual).to.be.equal(expected, 'rateArtis does not return the correctly average value');
    });
});