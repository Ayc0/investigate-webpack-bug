# Special category

This tries to enable a special `splitChunks` category for the common code in the webpack config.

It seems to be working in general, but once we start to also have external CSS that are imported, it doesn't manage to detect that it should be injected in this special category too. And so this external CSS is injected in the components' chunks and not in the common's CSS and end up overriding it.
