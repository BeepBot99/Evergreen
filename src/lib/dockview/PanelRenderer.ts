import type {GroupPanelPartInitParameters, IContentRenderer, IDockviewPanelProps} from "dockview-core";
import {mount, type Snippet} from "svelte";
import Panel from "$lib/dockview/Panel.svelte";

export class PanelRenderer implements IContentRenderer {
    private readonly _element: HTMLElement;

    get element(): HTMLElement {
        return this._element;
    }

    constructor(private snippet: Snippet<[IDockviewPanelProps]>) {
        this._element = document.createElement('div');
        this._element.classList.add('p-4');
    }

    init(parameters: GroupPanelPartInitParameters): void {
        mount(Panel, {
            target: this._element,
            props: {
                panelProps: parameters,
                snippet: this.snippet
            }
        })
    }
}