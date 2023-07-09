import {
  saveDocumentToServer,
  updateDocumentTree,
  saveDocumentToStorage,
} from "../service/index.js";

let timeout;
export const textareaKeyupEvent = (content) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    saveDocumentToStorage({ content });
  }, 200);
};

export const titleKeyupEvent = (title) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    saveDocumentToStorage({ title });
  }, 200);
};

export const titleFocusoutEvent = async ({ documentTree, editor, title }) => {
  const newDocument = editor.state.clone({
    title,
  });
  editor.state = newDocument;
  await saveDocumentToServer({ title: newDocument.title });
  updateDocumentTree({ documentTree });
};

export const textareaFocusoutEvent = async ({ editor, content }) => {
  console.log(editor.state);
  editor.state = editor.state.clone({
    content,
  });
  if (editor.state.id !== -1) {
    saveDocumentToServer({ content });
  }
};
