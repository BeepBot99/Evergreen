<script lang="ts">
    import Dockview from '$lib/dockview/Dockview.svelte'
    import type {DockviewApi} from 'dockview-core'
    import {evergreen} from "$lib/theme";

    function onRender(api: DockviewApi) {
        api.addPanel({
            id: 'panel1',
            component: 'myPanel',
        });
        api.addPanel({
            id: 'panel2',
            component: 'myPanel',
            position: {
                referencePanel: 'panel1',
                direction: 'right'
            },
        });
        api.addPanel({
            id: 'panel3',
            component: 'myOtherPanel',
            position: {
                referencePanel: 'panel2'
            },
        });
    }
</script>

<Dockview theme={evergreen} {onRender}>
    {#snippet myPanel ()}
        hello
    {/snippet}
    {#snippet myOtherPanel ()}
        hi
    {/snippet}
</Dockview>