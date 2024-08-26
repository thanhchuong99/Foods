import { revalidateTag } from 'next/cache';

export const POST = async (request: Request) => {
  try {
    const payload = await request.json();
    const secret = payload.secret;
    const tag = payload.tag;

    if (!secret || secret !== process.env.REVALIDATE_SECRET_KEY) {
      return Response.json(
        {
          success: false,
          message: 'Unauthorized',
        },
        { status: 401, statusText: 'Unauthorized' },
      );
    }

    if (!tag) {
      return Response.json(
        {
          success: false,
          message: 'Missing tag',
        },
        { status: 400, statusText: 'Bad Request' },
      );
    }

    const VALID_TAGS = ['app-information'];

    if (VALID_TAGS.indexOf(tag) === -1) {
      return Response.json(
        {
          success: false,
          message: 'Invalid tag',
        },
        { status: 400, statusText: 'Bad Request' },
      );
    }

    revalidateTag(tag);

    return Response.json({
      success: true,
      message: 'Ok',
      revalidated: true,
      now: Date.now(),
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: 'Internal Server Error',
      },
      { status: 500, statusText: 'Internal Server Error' },
    );
  }
};
