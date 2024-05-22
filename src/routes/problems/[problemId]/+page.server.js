import prisma from '$lib/prisma';

export async function load({ params }) {
  const { problemId } = params;
  const problem = await prisma.problem.findUnique({
    where: { id: parseInt(problemId) },
    select: {
      description: true,
      tags: true
    }
  });

  if (!problem) {
    return {
      status: 404,
      error: new Error('Problem not found')
    };
  }

  return {
    props: {
      problem
    }
  };
}