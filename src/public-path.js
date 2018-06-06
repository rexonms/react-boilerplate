/**
 * Changes the public path value form build time to run time.
 * The webpack sets up the public path on build time.
 * Hence, the chunked file (lazy load assets) path gets
 * hardcoded (both relative and absolute) at build time.
 * With the CI/CD, we build once and deploy the same code bundle to different environments.
 * __webpack_public_path__ changes the public path from build time to run time
 * so that public path changes based on the .env settings.
 */

if (process.env.NODE_ENV === 'test') {
  // eslint-disable-next-line
  const __webpack_public_path__ = 'test';}
else {
// eslint-disable-next-line
  __webpack_public_path__ = ensureSlash(process.env.PUBLIC_URL, true);
}


// create react app removes the ending slash hence add it if needed
function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  }
  return path;
}
