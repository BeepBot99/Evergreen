<script lang="ts">
    import {
        createDockview,
        DockviewApi,
        type DockviewComponentOptions,
        type DockviewTheme, type IDockviewPanelProps
    } from "dockview-core";
    import {onMount, type Snippet} from "svelte";
    import {PanelRenderer} from "$lib/dockview/PanelRenderer";
    import "dockview-core/dist/styles/dockview.css";

    interface Props {
        theme?: DockviewTheme;
        onRender?: (api: DockviewApi) => void;
        [component: string]: Snippet<[IDockviewPanelProps]> | DockviewTheme | ((api: DockviewApi) => void) | undefined;
    }

    let {theme, onRender, ...components}: Props = $props();

    let container: HTMLElement;

    let api: DockviewApi;

    onMount(() => {
        const options: DockviewComponentOptions = {
            theme,
            createComponent(options) {
                const snippet = components[options.name];
                return new PanelRenderer(snippet as Snippet<[IDockviewPanelProps]>);
            }
        }
        api = createDockview(container, options);
        onRender?.(api);
    });
</script>

<div class="h-full" bind:this={container}></div>