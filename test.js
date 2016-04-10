import test from 'ava';
import checkUrlExists from './src/check-url-exists';
import extraColors from './src/extract-colors';
import serializer from './src/serializer';

test.cb('check-url-exists', t => {
	checkUrlExists('http://google.com', t.end);
});

test.cb('can extract colors', t => {
	t.plan(2);
	extraColors.all('http://www.wassily-kandinsky.org/images/gallery/Yellow-Red-Blue.jpg', response => {
		t.true(typeof response === 'object');
		t.is(response[0][1].length, 3, 'Second value is an array of RGB values');
		t.end();
	});
});

test.cb('serializer serializes', t => {
	extraColors.all('http://www.wassily-kandinsky.org/images/gallery/Yellow-Red-Blue.jpg', response => {
		const data = serializer.format(response);
		t.is(data[0].frequency, 1);
		t.end();
	});
});
