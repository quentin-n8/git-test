function myAsyncFunction(isok) {
	return new Promise((resolve,reject) => {

		setTimeout(() => {
			if(isok) {
				console.log('resolve');
				resolve();
			}
			else {
				reject('Une erreur est survenue');
			}
		}, 1000);
	});
}

myAsyncFunction(true).then();

myAsyncFunction(false).catch( errorMsg => {
	console.log(errorMsg);
});

