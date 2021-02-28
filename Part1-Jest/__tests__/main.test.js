const formatVolumeIconPath = require('../assets/scripts/main');
describe("volume value", () => {
    test('level 3', () => {
        expect(formatVolumeIconPath(67)).toContain(`3`)
    });
    test('level 2', () => {
        expect(formatVolumeIconPath(60)).toContain(`2`)
    });
    test('level 1', () => {
        expect(formatVolumeIconPath(1)).toContain(`1`)
    });
    test('level 0', () => {
        expect(formatVolumeIconPath(0)).toContain(`0`)
    });
});