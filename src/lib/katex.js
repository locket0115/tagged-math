import katex from 'katex';
import 'katex/dist/katex.min.css';

export function renderLatex(content) {
    return katex.renderToString(content, {
        throwOnError: false
    });
}
