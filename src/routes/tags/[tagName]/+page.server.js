import prisma from '$lib/prisma';

export async function load({ params, url }) {
  const { tagName } = params;
  const page = Number(url.searchParams.get('page')) || 1;
  const pageSize = 20;
  const skip = (page - 1) * pageSize;

  const problems = await prisma.problem.findMany();
  const filteredProblems = problems.filter(problem => {
    const tags = JSON.parse(problem.tags);
    return tags.includes(tagName);
  });

  const totalProblems = filteredProblems.length;
  const paginatedProblems = filteredProblems.slice(skip, skip + pageSize);

  return {
    props: {
      tagName,
      problems: paginatedProblems,
      currentPage: page,
      totalPages: Math.ceil(totalProblems / pageSize)
    }
  };
}
