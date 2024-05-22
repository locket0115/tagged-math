<script>
  export let tags;
  export let currentPage;
  export let totalPages;
</script>
  
<section>
  <div>
    <h1>Tags</h1>
    <ul>
      {#each tags as tag}
        <li>
          <a href='/tags/${tag}'>
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