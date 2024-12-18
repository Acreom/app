import ListItem from '@tiptap/extension-list-item';
import {
    Plugin,
    PluginKey,
    TextSelection,
} from '@tiptap/pm/state';
import {Node} from '@tiptap/pm/model';
import {Decoration, DecorationSet} from '@tiptap/pm/view';

const listItemDecorationKey = new PluginKey('listItemClassDecorator');

export default ListItem.extend({
    content:
        '(paragraph (bulletList|orderedList)*)|(taskItemContent (bulletList|orderedList)*)',
    addKeyboardShortcuts(this: any) {
        return {
            ...this.parent?.(),
            Tab: () => {
                const state = this.editor.state;
                const selection = state.selection;
                const blockRange = selection.$from.blockRange();
                if (!blockRange) return false;
                if (blockRange.parent.type.name !== this.name) {
                    return false;
                }
                const beforeRange = selection.$to.blockRange(
                    state.doc.resolve(blockRange.start - 2),
                );
                let chain = this.editor.chain();
                if (
                    beforeRange &&
                    ['bulletList', 'orderedList'].includes(
                        beforeRange.$from.nodeBefore?.type
                            .name as string,
                    ) &&
                    this.editor.can().joinBackward()
                ) {
                    chain = chain.joinBackward();
                }
                return chain.sinkListItem(this.name).run();
            },
            'Shift-Tab': () => {
                return this.editor.commands.liftListItem(this.name);
            },
            Backspace: () => {
                const state = this.editor.state;
                const selection = state.selection;
                const blockRange = selection.$from.blockRange();
                if (!blockRange) return false;
                if (
                    blockRange.parent.type.name !== this.name ||
                    !selection.empty
                )
                    return false;

                if (blockRange.start + 1 !== selection.from) {
                    return false;
                }

                const beforeSelection = TextSelection.findFrom(
                    state.doc.resolve(blockRange.start - 1),
                    -1,
                    true,
                );
                const beforeBlockRange =
                    beforeSelection?.$from.blockRange();
                if (
                    beforeBlockRange?.parent.type.name !== this.name
                )
                    return false;
                return this.editor.commands.deleteRange({
                    from: beforeSelection!.from,
                    to: selection.from,
                });
            },
        };
    },
    addProseMirrorPlugins() {
        return [
            ...(this.parent?.() ?? []),
            // adds custom class to list items with tasks in them
            new Plugin({
                key: listItemDecorationKey,
                props: {
                    decorations: state => {
                        const decorations: Decoration[] = [];
                        state.doc.nodesBetween(
                            0,
                            Math.max(0, state.doc.nodeSize - 2),
                            (
                                node: Node,
                                pos: number,
                                parent: Node | null,
                                _: number,
                            ) => {
                                if (
                                    ![
                                        'bulletList',
                                        'orderedList',
                                        'listItem',
                                        'taskItemContent',
                                    ].includes(node.type.name)
                                ) {
                                    return false;
                                }
                                if (
                                    node.type.name ===
                                    'taskItemContent'
                                ) {
                                    decorations.push(
                                        Decoration.node(
                                            pos - 1,
                                            pos -
                                            1 +
                                            parent!.nodeSize,
                                            {
                                                class: 'list-item--task',
                                            },
                                        ),
                                    );
                                    return false;
                                }
                            },
                        );
                        return DecorationSet.create(
                            state.doc,
                            decorations,
                        );
                    },
                },
            }),
        ];
    },
});
