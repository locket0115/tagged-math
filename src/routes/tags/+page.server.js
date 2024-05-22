import prisma from '$lib/prisma';

export async function load({ url }) {
  const page = Number(url.searchParams.get('page')) || 1;
  const pageSize = 20;
  const skip = (page - 1) * pageSize;

  const problems = await prisma.problem.findMany({
    select: {
      tags: true
    }
  });

  const allTags = problems.flatMap(problem => JSON.parse(problem.tags));
  const uniqueTags = [...new Set(allTags)];
  const totalTags = uniqueTags.length;
  const paginatedTags = uniqueTags.slice(skip, skip + pageSize);

  return {
    props: {
      tags: paginatedTags,
      currentPage: page,
      totalPages: Math.ceil(totalTags / pageSize)
    }
  };
}