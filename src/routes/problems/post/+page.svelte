<script>
    let description = '';
    let tags = '';
</script>

<svelte:head>
	<title>문제 게시</title>
	<meta name="Tagged Math" content="demo web" />
</svelte:head>

<form method="POST">
    <div>
        <label for="description">문제 본문:</label>
        <textarea id="description" name="description" bind:value={description}></textarea>
    </div>
    <div>
        <label for="tags">태그 (,로 구별):</label>
        <input type="text" id="tags" name="tags" bind:value={tags} />
    </div>
    <button type="submit">문제 추가</button>
</form>

<style>
    textarea{
        border:none;
        resize:none;

        width: 100%;
        height:300px;
        text-overflow:inherit;
    }

    input{
        border:none;
        resize:none;

        width: 100%;
        height: 100%;
        text-overflow:inherit;
    }
</style>