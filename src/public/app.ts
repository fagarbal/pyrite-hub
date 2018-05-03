console.log("works");

const githubButton = document.getElementById('github-button');
const gitlabButton = document.getElementById('gitlab-button');
const bitbucketButton = document.getElementById('bitbucket-button');

function socialEvent(button, name) {
	button.addEventListener('click', () => {
		const popup = window.open('/auth/' + name, '', 'width=500,height=800,scrollbars=yes,menubar=no,resizable=yes,toolbar=no,location=no,status=no');
		popup.addEventListener('message', (e) => {
			console.log(e.data);
		});
	});
}

socialEvent(githubButton, 'github');
socialEvent(gitlabButton, 'gitlab');
socialEvent(bitbucketButton, 'bitbucket');
