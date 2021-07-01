import React, { useState, useEffect } from "react";
import Prism from "prismjs";

const CodeEditor = props => {
  const [content, setContent] = useState(props.content);

  const handleKeyDown = evt => {
    let value = content,
      selStartPos = evt.currentTarget.selectionStart;

    console.log(evt.currentTarget);

    // handle 4-space indent on
    if (evt.key === "Tab") {
      value =
        value.substring(0, selStartPos) +
        "    " +
        value.substring(selStartPos, value.length);
      evt.currentTarget.selectionStart = selStartPos + 3;
      evt.currentTarget.selectionEnd = selStartPos + 4;
      evt.preventDefault();

      setContent(value);
    }
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [props.language, content]);

  return (
    <div className="code-edit-container">
    <label htmlFor='body'>code body</label>
      <textarea
        className="code-input"
        value={content}
        name="body"
        onChange={evt => setContent(evt.target.value)}
        onKeyDown={handleKeyDown}
      />
      {/* We're using useState to track updates to our input, for which we're using a text area element. We also output the Prism-styled input into a pre block as per Prism JS's documentation. */}
      <pre className="code-output">
        <code className={`language-${props.language}`}>{content}</code>
      </pre>
    </div>
  );
};

export default CodeEditor;