function readPackageHook(pkg) {
  // Allow build scripts for packages that need native compilation
  if (['esbuild', 'sharp'].includes(pkg.name)) {
    pkg.pnpm = pkg.pnpm || {};
    pkg.pnpm.allowBuild = true;
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage: readPackageHook,
  },
};
