const expect = require('chai').expect;
const request = require('request');

const baseURL = "http://localhost:3000";

describe("Color Code Converter API", () => {
    describe("RGB to Hex conversion", () => {
        const url = baseURL + "/rgbToHex?red=255&green=255&blue=255";

        it("returns status 200", () => {
            request(url, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
            });
        });

        it("returns the color in hex", () => {
            request(url, (error, response, body) => {
                const json = JSON.parse(body);
                expect(json.hex).to.equal("ffffff");
            });
        });
    });

    describe("Hex to RGB conversion", () => {
        const url = baseURL + "/hexToRgb?hex=00ff00";

        it("returns status 200", () => {
            request(url, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
            });
        });

        it("returns the color in RGB", () => {
            request(url, (error, response, body) => {
                const json = JSON.parse(body);
                expect(json.rgb).to.deep.equal([0, 255, 0]);
            });
        });
    });
});
