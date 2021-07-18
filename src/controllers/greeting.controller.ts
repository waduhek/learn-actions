import express from 'express';

export default function greet(
  request: express.Request,
  response: express.Response,
): express.Response<string, Record<string, string>> {
  const { name } = request.query;

  if (name && typeof name === 'string') {
    return response
      .status(200)
      .send(`Hello, ${name}!`);
  }

  return response
    .status(200)
    .send('Hello, World!');
}
