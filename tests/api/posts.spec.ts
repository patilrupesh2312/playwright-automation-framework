import { test, expect } from '@playwright/test';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

test.describe('Posts API', () => {
  test(
    'should return a post by ID',
    { tag: ['@api', '@get'] },
    async ({ request }) => {
      const response = await request.get('/posts/1');

      expect(response.status()).toBe(200);

      const responseBody = (await response.json()) as Post;

      expect(responseBody).toMatchObject({
        userId: 1,
        id: 1,
      });

      expect(responseBody.title).not.toBe('');
      expect(responseBody.body).not.toBe('');
    },
  );
});