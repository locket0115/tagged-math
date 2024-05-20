<script>
    export let problems;
</script>

<section>
    <div>
        <h1>Problems</h1>

        <ul>
            {#each problems as problem}
                <li>
                    <a href='/problems/problem.id'>
                        {problem.id}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</section>
