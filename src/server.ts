import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context';

const angularApp = new AngularAppEngine();

export async function netlifyAppEngineHandler(
  request: Request
): Promise<Response> {
  const context = getContext();

  // Example API endpoints can be defined here.
  // Uncomment and define endpoints as necessary.
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hello from the API' });
  // }

  const pathname = new URL(request.url).pathname;

  if (pathname === '/api/hello') {
    return Response.json({ message: 'Hello from Angular SSR app backend!' });
  }

  const result = await angularApp.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
