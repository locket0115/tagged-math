<script>
  export let data;

  let tags = data.props.tags;
  let currentPage = data.props.currentPage;
  let totalPages = data.props.totalPages;
</script>


<svelte:head>
	<title>태그</title>
	<meta name="Tags" content="demo web" />
</svelte:head>

<section>
  <div>
    <h1>태그 목록</h1>
    <ul>
      {#each tags as tag}
        <li>
          <a href='/tags/{tag}'>
            {tag}
          </a>
        </li>
      {/each}
    </ul>
    <div>
      {#if currentPage > 1}
        <a href={`?page=${currentPage - 1}`}>Previous</a>
      {/if}
      <span>Page {currentPage} of {totalPages}</span>
      {#if currentPage < totalPages}
        <a href={`?page=${currentPage + 1}`}>Next</a>
      {/if}
    </div>
  </div>
</section>