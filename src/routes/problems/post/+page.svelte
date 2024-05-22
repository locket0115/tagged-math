<script>
    let description = '';
    let tags = '';
</script>
  
<form method="POST">
    <div>
        <label for="description">Description:</label>
        <textarea id="description" name="description" bind:value={description}></textarea>
    </div>
    <div>
        <label for="tags">Tags (comma separated):</label>
        <input type="text" id="tags" name="tags" bind:value={tags} />
    </div>
    <button type="submit">Add Problem</button>
</form>