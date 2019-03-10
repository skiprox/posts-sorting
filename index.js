'use strict';

const posts = require('./posts.json');

class SortPosts {
	constructor() {

	}
	/**
	 * Sorts by how long a persons post is,
	 * bad posters are those who have shorter posts
	 */
	sortByLength() {
		let week03 = posts.week03;
		week03 = week03.sort((a, b) => {
			return b.post.length - a.post.length;
		});
		this.returnSorted("Length", week03);
	}
	/**
	 * Sorts by how many times a person uses "I" or "me" or "personally" in a post,
	 * bad posters are those that use it more
	 */
	sortByPersonal() {
		let week03 = posts.week03;
		week03 = week03.sort((a, b) => {
			var countA = (a.post.match(/ me /g) || []).length;
			countA += (a.post.match(/ I /g) || []).length;
			countA += (a.post.match(/personally/g) || []).length;
			var countB = (b.post.match(/ me /g) || []).length;
			countB += (b.post.match(/ I /g) || []).length;
			countB += (b.post.match(/personally/g) || []).length;
			return countA - countB;
		});
		this.returnSorted("Personal", week03);
	}
	/**
	 * Returns two objects, sorted arrays of names
	 * of good and bad posters
	 */
	returnSorted(type, sortedArray) {
		console.log(`Sorted by ${type}`);
		let midpoint = Math.floor(sortedArray.length/2);
		let goodPosters = {
			"good_posters": sortedArray.slice(0, midpoint).map(item => item.name)
		};
		let badPosters = {
			"bad_posters": sortedArray.slice(midpoint, sortedArray.length).map(item => item.name)
		};
		console.log(goodPosters);
		console.log(badPosters);
	}
}

let sorter = new SortPosts();

sorter.sortByLength();
sorter.sortByPersonal();