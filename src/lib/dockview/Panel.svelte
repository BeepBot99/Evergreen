<script lang="ts">
    import type {Snippet} from "svelte";
    import type {IDockviewPanelProps} from "dockview-core";

    interface Props {
        snippet: Snippet<[IDockviewPanelProps]>;
        panelProps: IDockviewPanelProps;
    }

    let {snippet, panelProps}: Props = $props();
</script>

{@render snippet(panelProps)}