<script>
    import { goto } from '$app/navigation';

    let description = '';
    let tagInput = '';
    let tags = [];
    let image = null;

    function addTag() {
        if (tagInput.trim() && !tags.some(tag => tag.name === tagInput.trim())) {
            tags = [...tags, { name: tagInput.trim() }];
            tagInput = '';
        }
    }

    function removeTag(tagToRemove) {
        tags = tags.filter(tag => tag.name !== tagToRemove.name);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('description', description);
        formData.append('tags', JSON.stringify(tags));
        formData.append('image', image);

        console.log(description);
        console.log(JSON.stringify(tags));

        const response = await fetch('/problems/post', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            await goto('/problems');
        } else {
            console.error('Failed to upload problem');
        }
    }
</script>

<svelte:head>
	<title>문제 게시</title>
	<meta name="Tagged Math" content="demo web" />
</svelte:head>

<style>
    .tag-list {
        display: flex;
        flex-wrap: warp;
        gap: 8px;
    }

    .tag-item {
        background-color: #ddd;
        padding: 4px 8px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .tag-item button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
    }
</style>

<form on:submit={handleSubmit}>
    <div>
        <label for="description">문제 본문:</label>
        <textarea id="description" bind:value={description} required></textarea>
    </div>
    <div>
        <label for="tags">태그:</label>
        <div>
            <input
                id="tag-input"
                type="text"
                bind:value={tagInput}
                placeholder="태그를 입력하고 '추가'를 눌러주세요"
            >
            <button type="button" on:click={addTag}>추가</button>
        </div>
        <div class="tag-list">
            {#each tags as tag}
                <div class="tag-item">
                    <span>{tag.name}</span>
                    <button type="button" on:click={() => removeTag(tag)}>✖</button>
                </div>
            {/each}
        </div>
    </div>
    <div>
        <label for="image">이미지:</label>
        <!-- <input id="image" type="file" on:change="{(e) => image = e.target.files[0]}" accept="image/*"> -->
    </div>
    <button type="submit">문제 추가</button>
</form>