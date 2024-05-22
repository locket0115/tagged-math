<script>
  export let tagName;
  export let problems;
  export let currentPage;
  export let totalPages;
</script>
  
<section>
    <div>
        <h1>Problems tagged with "{tagName}"</h1>
        <ul>
            {#each problems as problem}
                <li>
                    <a href={`/problems/${problem.id}`}>
                        {problem.id}
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