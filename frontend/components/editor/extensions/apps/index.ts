import { createInstance as createJiraExtensionInstance } from './jira';
import { registerEditorExtension } from '~/components/editor/extensions';
import { EditorTypes } from '~/constants';

registerEditorExtension({
    type: EditorTypes.FULL,
    createInstance: createJiraExtensionInstance,
});