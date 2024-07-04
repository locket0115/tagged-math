<script>
    import { invalidate } from '$app/navigation';

    export let data;

    let newTagName = '';
    let tags = data.tags;

    async function addTag(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', newTagName);

        const response = await fetch('/tags/edit?action=addTag', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            newTagName = '';
            await invalidate();
        }
    }

    async function deleteTag(id) {
        const formData = new FormData();
        formData.append('id', id);

        const response = await fetch('/tags/edit?action=deleteTag', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            await invalidate();
        }
    }

    async function updateTag(id, newName) {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('name', newName);

        const response = await fetch('/tags/edit?action=updateTag', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            await invalidate();
        }
    }

    function handleUpdate(id) {
        const newName = prompt('Enter new name:');
        if (newName) {
            updateTag(id, newName);
        }
    }

    $: {
        tags = data.tags;
    }
</script>

<svelte:head>
	<title>태그 게시</title>
	<meta name="Tagged Math" content="demo web" />
</svelte:head>

<section>
    <h1>태그 수정</h1>

    <form on:submit={addTag}>
        <label for="newTagName">새로운 태그 이름:</label>
        <input id="newTagName" type="text" bind:value={newTagName} required />
        <button type="submit">태그 추가</button>
    </form>

    <ul>
        {#each tags as tag}
            <li>
                {tag.name}
                <button on:click={() => handleUpdate(tag.id)}>Edit</button>
                <button on:click={() => deleteTag(tag.id)}>Delete</button>
            </li>
        {/each}
    </ul>
</section>

<style>
    form {
        margin-bottom: 1em;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5em 0;
    }
    button {
        margin-left: 0.5em;
    }
</style>