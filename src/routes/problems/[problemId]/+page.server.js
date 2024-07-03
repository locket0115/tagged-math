import prisma from '$lib/prisma';

export async function load({ params }) {
  try {
    const problem = await prisma.problem.findUnique({
      where: { id: parseInt(params.problemId) },
    });
    
    if (!problem) {
      return {
        status: 404,
        error: new Error('Problem not found')
      };
    }
    
    if(typeof problem.tags === 'string') {
      problem.tags = JSON.parse(problem.tags);
    }

    console.log('problem load succesful:\n', problem);

    return {
      props: {
        problem
      }
    };
  } catch (error) {
    console.error('Error loading problem:', error);
    return {
      status: 500,
      error: new Error('Failed to load problem')
    };
  }
}