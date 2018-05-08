export default (origin: string) => `
    <script>
		window.postMessage('`+ origin + `', '*');
		window.close();
    </script>
`;