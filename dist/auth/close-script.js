"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (origin) => `
    <script>
		window.postMessage('` + origin + `', '*');
		window.close();
    </script>
`;
//# sourceMappingURL=close-script.js.map