import prisma from '$lib/prisma';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const description = formData.get('description');
    const tags = formData.getAll('tags');

    console.log('Form Data:', { description, tags });

    if (!description || tags.length === 0) {
      console.error('Description or tags are missing');
      return { error: 'Description and tags are required' };
    }

    await prisma.problem.create({
      data: {
        description,
        tags: JSON.stringify(tags)
      }
    });

    console.log("Problem uploaded")

    return { success: true };
  }
};