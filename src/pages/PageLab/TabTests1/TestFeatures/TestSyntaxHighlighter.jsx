import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import styles from './TestCommon.module.scss';

// import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { coldarkCold} from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { oneLight} from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function TestSettingsReduxTest() {
    // DOCS
    // https://github.com/react-syntax-highlighter/react-syntax-highlighter
    // https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/prism.html
    SyntaxHighlighter.registerLanguage('javascript', js)
    SyntaxHighlighter.registerLanguage('jsx', jsx)
    SyntaxHighlighter.registerLanguage('scss', scss)
    const codeString1 = `(num) => num + 1`
    const codeString2 = `import jsx from 'fafafa/larara/smoke';
(num) => num + 13`
    const codeString3 = `.pirulo
    // que monono
{
    .lala {
        color: red
    }
}`
    return (
        <div className={[styles['test-page']]}>
            <div className={'clx-headline-title grey center'}>Syntax Highlighter</div>
            <div className={[styles['syntax-style']]}>
                <SyntaxHighlighter language='javascript' style={oneLight}>
                    {codeString1}
                </SyntaxHighlighter>

                <SyntaxHighlighter language='jsx' style={oneLight}>
                    {codeString2}
                </SyntaxHighlighter>
                <SyntaxHighlighter language='scss' style={oneLight}>
                    {codeString3}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
