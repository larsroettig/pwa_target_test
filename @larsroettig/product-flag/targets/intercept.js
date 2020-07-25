module.exports = targets => {
    targets.of('@magento/pwa-buildpack').specialFeatures.tap(flags => {
        flags[targets.name] = { esModules: true };
    });
    targets.of('@magento/venia-ui').richContentRenderers.tap(
       renderers => renderers.add({
           componentName: 'Main',
            importPath: '@larsroettig/product-flag/lib/components/Main'
          })
     )
}