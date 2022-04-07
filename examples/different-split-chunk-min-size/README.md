# Different minSize config in splitChunks

This tries to change the `splitChunks` config and remove the custom conditions on `minSize`, and `maxAsyncRequests`, and instead set `minSize: 0`.

It seems to be working. But we need to check it out in a real app.
