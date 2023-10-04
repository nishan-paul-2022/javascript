/* eslint-disable @typescript-eslint/no-namespace */

enum MediaType {
	IMAGE = 'image',
	VIDEO = 'video',
	AUDIO = 'audio'
}

interface MediaInfo {
	type: MediaType;
	url: string;
	duration?: number;
}

namespace MediaFactory {
	export function createMedia(
		type: MediaType,
		url: string,
		duration?: number
	): MediaInfo {
		return { type, url, duration };
	}
}

// Example 11: Enum with Methods and Different Value Types
function F11() {
	const image = MediaFactory.createMedia(
		MediaType.IMAGE,
		'https://example.com/image.jpg'
	);
	const video = MediaFactory.createMedia(
		MediaType.VIDEO,
		'https://example.com/video.mp4',
		120
	);
	console.log(image);
	console.log(video);
}

F11();
