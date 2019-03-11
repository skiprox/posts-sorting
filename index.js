'use strict';

const posts = require('./posts.json');

// HELPERS
/**
 * Returns two objects, sorted arrays of names
 * of good and bad posters
 */
const returnSorted = (sortedArray) => {
	let midpoint = Math.floor(sortedArray.length/2);
	let goodPosters = sortedArray.slice(0, midpoint).map(item => item.name);
	let badPosters = sortedArray.slice(midpoint, sortedArray.length).map(item => item.name);
	let obj = {
		"Good Posters": goodPosters,
		"Bad Posters": badPosters
	}
	return obj;
}

module.exports = {
	/**
	 * Sorts by how long a persons post is,
	 * bad posters are those who have shorter posts
	 */
	sortByLength: () => {
		let week03 = posts.week03;
		week03 = week03.sort((a, b) => {
			return b.post.split(' ').length - a.post.split(' ').length;
		});
		return returnSorted(week03);
	},
	/**
	 * Sorts by how many times a person uses "I" or "me" or "personally" in a post,
	 * bad posters are those that use it more
	 */
	sortByPersonal: () => {
		let week03 = posts.week03;
		week03 = week03.sort((a, b) => {
			var countA = (a.post.match(/ me /g) || []).length;
			countA += (a.post.match(/ I /g) || []).length;
			countA += (a.post.match(/personally/g) || []).length;
			countA += (a.post.match(/my /g) || []).length;
			var countB = (b.post.match(/ me /g) || []).length;
			countB += (b.post.match(/ I /g) || []).length;
			countB += (b.post.match(/personally/g) || []).length;
			countB += (b.post.match(/my /g) || []).length;
			return countA - countB;
		});
		return returnSorted(week03);
	},
	/**
	 * Sorts by how many times a person says "and" or "additionally" or "also" or "further",
	 * indicates complex thoughts,
	 * good posters use them more
	 */
	sortByComplexThoughts: () => {
		let week03 = posts.week03;
		week03 = week03.sort((a, b) => {
			var countA = (a.post.match(/and/g) || []).length;
			countA += (a.post.match(/additionally/g) || []).length;
			countA += (a.post.match(/also/g) || []).length;
			countA += (a.post.match(/further/g) || []).length;
			var countB = (b.post.match(/and/g) || []).length;
			countB += (b.post.match(/additionally/g) || []).length;
			countB += (b.post.match(/also/g) || []).length;
			countB += (b.post.match(/further/g) || []).length;
			return countB - countA;
		});
		return returnSorted(week03);
	}
};
const makeRunnable = require('make-runnable');
